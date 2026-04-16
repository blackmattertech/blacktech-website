-- Creates blog table for CMS-managed website blog content.
create table if not exists public.blogs (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  slug text not null unique,
  title text not null,
  subtitle text,
  excerpt text not null,
  cover_image_url text not null,
  category text not null,
  author_name text not null,
  read_time_minutes integer not null default 3,
  content_json jsonb not null default '[]'::jsonb,
  is_published boolean not null default false,
  published_at timestamptz
);

alter table public.blogs
  add constraint blogs_read_time_minutes_positive
  check (read_time_minutes > 0);

create index if not exists blogs_publish_sort_idx
  on public.blogs (is_published, published_at desc nulls last, created_at desc);

create index if not exists blogs_category_idx
  on public.blogs (category);

create index if not exists blogs_slug_idx
  on public.blogs (slug);

-- Keep updated_at current on updates.
create or replace function public.set_blogs_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists blogs_set_updated_at on public.blogs;
create trigger blogs_set_updated_at
before update on public.blogs
for each row execute function public.set_blogs_updated_at();

-- Security posture: public can read published rows only.
alter table public.blogs enable row level security;

grant select on table public.blogs to anon, authenticated;
revoke insert, update, delete on table public.blogs from anon, authenticated;

drop policy if exists blogs_public_read_published on public.blogs;
create policy blogs_public_read_published
on public.blogs
for select
to anon, authenticated
using (is_published = true);
