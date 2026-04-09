-- Creates CRM lead table for website contact/project form submissions.
create table if not exists public.website_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  -- Primary contact fields
  name text not null,
  email text not null,
  phone text,
  field text,

  -- Form selections
  lead_sources text[] not null default '{}',
  interests text[] not null default '{}',
  estimated_budget text,
  project_details text not null,

  -- Compliance / metadata
  agreed_to_terms boolean not null default false,
  source text not null default 'website',
  user_agent text,
  client_ip text
);

-- Useful indexes for CRM filtering/sorting.
create index if not exists website_leads_created_at_idx
  on public.website_leads (created_at desc);

create index if not exists website_leads_email_idx
  on public.website_leads (email);

create index if not exists website_leads_source_idx
  on public.website_leads (source);

-- Keep updated_at current on updates.
create or replace function public.set_website_leads_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists website_leads_set_updated_at on public.website_leads;
create trigger website_leads_set_updated_at
before update on public.website_leads
for each row execute function public.set_website_leads_updated_at();

-- Security posture: enable RLS.
-- Service role key can still insert/read regardless of policies.
alter table public.website_leads enable row level security;
