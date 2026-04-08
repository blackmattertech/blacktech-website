const sectionLink =
  "text-neon underline decoration-white/30 underline-offset-2 transition-colors hover:decoration-white/60";

export default function CookiesPolicyContent() {
  return (
    <div className="policy-doc text-[0.9375rem] leading-relaxed text-white/85 sm:text-base">
      <p className="border-b border-white/10 pb-6 text-sm text-white/60">
        <strong className="font-medium text-white/80">Last updated:</strong>{" "}
        April 2026
        <span className="mx-2 text-white/35">·</span>
        <span>Applies to all visitors of this website</span>
      </p>

      <nav
        className="my-10 rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
        aria-label="Table of contents"
      >
        <h3 className="font-orbitron text-xs font-medium uppercase tracking-[0.2em] text-white/50">
          Contents
        </h3>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-white/80 marker:text-white/40">
          <li>
            <a href="#what-are-cookies" className={sectionLink}>
              What are cookies?
            </a>
          </li>
          <li>
            <a href="#how-we-use-cookies" className={sectionLink}>
              How we use cookies
            </a>
          </li>
          <li>
            <a href="#types-of-cookies" className={sectionLink}>
              Types of cookies we use
            </a>
          </li>
          <li>
            <a href="#third-party-cookies" className={sectionLink}>
              Third-party cookies
            </a>
          </li>
          <li>
            <a href="#managing-preferences" className={sectionLink}>
              Managing your cookie preferences
            </a>
          </li>
          <li>
            <a href="#changes-to-policy" className={sectionLink}>
              Changes to this policy
            </a>
          </li>
          <li>
            <a href="#cookies-contact" className={sectionLink}>
              Contact us
            </a>
          </li>
        </ol>
      </nav>

      <section
        id="what-are-cookies"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          1. What are cookies?
        </h3>
        <p className="mt-4">
          Cookies are small text files placed on your device (computer, tablet,
          or smartphone) when you visit a website. They are widely used to
          make websites work efficiently, improve user experience, and provide
          information to the website owner.
        </p>
        <p className="mt-4">
          When you visit our website, we may place cookies or similar
          technologies (such as web beacons, pixels, and local storage) on your
          device. This policy explains what cookies we use, why we use them,
          and how you can control them.
        </p>
      </section>

      <section
        id="how-we-use-cookies"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          2. How we use cookies
        </h3>
        <p className="mt-4">We use cookies to:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-neon">
          <li>Ensure our website functions correctly and securely</li>
          <li>Remember your cookie consent choice across visits</li>
          <li>
            When you accept non-essential cookies, analyse how visitors use our
            website so we can improve performance and content (e.g. with Google
            Analytics 4, if enabled)
          </li>
          <li>
            Support our marketing activities only where you have consented and
            we use such tools
          </li>
        </ul>
        <p className="mt-6 text-white/70">
          We do not use cookies to collect sensitive personal information such
          as financial details, passwords, or government-issued identification
          numbers.
        </p>
      </section>

      <section
        id="types-of-cookies"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          3. Types of cookies we use
        </h3>
        <p className="mt-4">
          The table below describes the categories of cookies used on this
          website.
        </p>
        <div className="mt-6 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="bg-white/5 px-4 py-3 font-jetbrains text-[10px] uppercase tracking-widest text-white/60">
                  Category
                </th>
                <th className="bg-white/5 px-4 py-3 font-jetbrains text-[10px] uppercase tracking-widest text-white/60">
                  Purpose
                </th>
                <th className="bg-white/5 px-4 py-3 font-jetbrains text-[10px] uppercase tracking-widest text-white/60">
                  Examples
                </th>
                <th className="bg-white/5 px-4 py-3 font-jetbrains text-[10px] uppercase tracking-widest text-white/60">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody className="text-white/85">
              <tr className="border-b border-white/10 align-top">
                <td className="px-4 py-4 font-medium text-white">Essential</td>
                <td className="px-4 py-4">
                  Required for the website to function. Includes session
                  management, security tokens, and load balancing. Cannot be
                  disabled.
                </td>
                <td className="px-4 py-4 text-white/75">
                  First-party{" "}
                  <code className="rounded bg-white/10 px-1 py-0.5 text-xs">
                    bm_cookie_consent
                  </code>{" "}
                  (HTTP cookie) and{" "}
                  <code className="rounded bg-white/10 px-1 py-0.5 text-xs">
                    blackmatter-cookie-consent
                  </code>{" "}
                  (browser local storage mirror) — stores accepted or refused
                </td>
                <td className="px-4 py-4 text-white/75 whitespace-nowrap">
                  Up to 1 year
                </td>
              </tr>
              <tr className="border-b border-white/10 align-top">
                <td className="px-4 py-4 font-medium text-white">Analytics</td>
                <td className="px-4 py-4">
                  Help us understand how visitors interact with the site. Only
                  loaded if you click Accept on our cookie banner and we have
                  configured analytics.
                </td>
                <td className="px-4 py-4 text-white/75">
                  Google Analytics 4 (
                  <code className="rounded bg-white/10 px-1 py-0.5 text-xs">
                    _ga
                  </code>
                  ,{" "}
                  <code className="rounded bg-white/10 px-1 py-0.5 text-xs">
                    _ga_*
                  </code>
                  ) when enabled
                </td>
                <td className="px-4 py-4 text-white/75 whitespace-nowrap">
                  Per Google (often up to 2 years)
                </td>
              </tr>
              <tr className="border-b border-white/10 align-top">
                <td className="px-4 py-4 font-medium text-white">Functional</td>
                <td className="px-4 py-4">
                  Remember choices you make (e.g. language, region) to provide
                  a more personalised experience. We do not use additional
                  functional cookies beyond essential consent storage at this
                  time.
                </td>
                <td className="px-4 py-4 text-white/75">—</td>
                <td className="px-4 py-4 text-white/75 whitespace-nowrap">—</td>
              </tr>
              <tr className="align-top">
                <td className="px-4 py-4 font-medium text-white">Marketing</td>
                <td className="px-4 py-4">
                  Used to deliver relevant advertisements and track campaign
                  effectiveness. Only active if you have provided consent and
                  we deploy such tags.
                </td>
                <td className="px-4 py-4 text-white/75">
                  None deployed on this site at present
                </td>
                <td className="px-4 py-4 text-white/75 whitespace-nowrap">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section
        id="third-party-cookies"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          4. Third-party cookies
        </h3>
        <p className="mt-4">
          When you accept cookies and we have enabled analytics, Google may set
          cookies via Google Analytics 4 (scripts loaded from{" "}
          <code className="rounded bg-white/10 px-1 py-0.5 text-xs">
            googletagmanager.com
          </code>
          ). We do not currently load other third-party marketing or analytics
          tags on this website.
        </p>
        <p className="mt-6">
          Third parties have their own privacy and cookie policies. We
          recommend reviewing those policies on their respective websites. We do
          not control how third parties use information they collect via their
          cookies.
        </p>
      </section>

      <section
        id="managing-preferences"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          5. Managing your cookie preferences
        </h3>
        <p className="mt-4">
          You have the right to choose which non-essential cookies you accept.
          You can manage your preferences in the following ways:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-6 marker:text-neon">
          <li>
            <strong className="text-white">Cookie banner:</strong> When you
            first visit our website, a cookie consent banner will appear. You
            can <strong className="text-white">Accept</strong> (essential storage
            plus optional analytics when configured) or{" "}
            <strong className="text-white">Refuse</strong> (essential consent
            record only; no Google Analytics).
          </li>
          <li>
            <strong className="text-white">Browser settings:</strong> Most
            browsers allow you to block or delete cookies through their privacy
            or settings menu. Note that disabling certain cookies may affect
            website functionality.
          </li>
          <li>
            <strong className="text-white">Opt-out tools:</strong> You can opt
            out of Google Analytics tracking at{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className={sectionLink}
            >
              tools.google.com/dlpage/gaoptout
            </a>
            . You can manage advertising preferences via the{" "}
            <a
              href="https://www.youronlinechoices.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={sectionLink}
            >
              Your Online Choices
            </a>{" "}
            platform.
          </li>
          <li>
            <strong className="text-white">Withdraw consent:</strong> You may
            withdraw or update your consent at any time by clicking the
            &quot;Cookie settings&quot; link in our website footer.
          </li>
        </ul>
        <p className="mt-6 text-white/70">
          Please note that essential cookies cannot be disabled as they are
          necessary for the website to operate.
        </p>
      </section>

      <section
        id="changes-to-policy"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          6. Changes to this policy
        </h3>
        <p className="mt-4">
          We may update this Cookies Policy from time to time to reflect
          changes in technology, legislation, or our business practices. When we
          make significant changes, we will update the &quot;Last updated&quot;
          date at the top of this page and, where appropriate, notify you via a
          banner on our website.
        </p>
        <p className="mt-4">
          We encourage you to review this policy periodically to stay informed
          about how we use cookies.
        </p>
      </section>

      <section
        id="cookies-contact"
        className="scroll-mt-24 border-t border-white/10 pb-8 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          7. Contact us
        </h3>
        <p className="mt-4">
          If you have any questions about our use of cookies or this policy,
          please contact us:
        </p>
        <ul className="mt-6 space-y-3 text-white/90">
          <li>
            <span className="font-jetbrains text-[10px] uppercase tracking-widest text-white/45">
              Email
            </span>
            <br />
            <a
              href="mailto:info@blackmattertech.com"
              className={sectionLink}
            >
              info@blackmattertech.com
            </a>
          </li>
          <li>
            <span className="font-jetbrains text-[10px] uppercase tracking-widest text-white/45">
              Address
            </span>
            <br />
            27/2, 1st Main Road, Palace Guttahalli, Bengaluru, Karnataka/IN,
            560003
          </li>
          <li>
            <span className="font-jetbrains text-[10px] uppercase tracking-widest text-white/45">
              Website
            </span>
            <br />
            <a
              href="https://www.blackmattertech.com"
              target="_blank"
              rel="noopener noreferrer"
              className={sectionLink}
            >
              www.blackmattertech.com
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
