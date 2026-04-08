import { Link } from "react-router-dom";

const sectionLink =
  "text-neon underline decoration-white/30 underline-offset-2 transition-colors hover:decoration-white/60";

export default function PrivacyPolicyContent() {
  return (
    <div className="policy-doc text-[0.9375rem] leading-relaxed text-white/85 sm:text-base">
      <p className="border-b border-white/10 pb-6 text-sm text-white/60">
        <strong className="font-medium text-white/80">Last updated:</strong>{" "}
        April 2026
        <span className="mx-2 text-white/35">·</span>
        <span>BlackMatter Technologies Private Limited</span>
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
            <a href="#privacy-who" className={sectionLink}>
              Who we are
            </a>
          </li>
          <li>
            <a href="#privacy-collect" className={sectionLink}>
              Information we collect
            </a>
          </li>
          <li>
            <a href="#privacy-use" className={sectionLink}>
              How we use your information
            </a>
          </li>
          <li>
            <a href="#privacy-legal-basis" className={sectionLink}>
              Legal basis for processing
            </a>
          </li>
          <li>
            <a href="#privacy-sharing" className={sectionLink}>
              Sharing your information
            </a>
          </li>
          <li>
            <a href="#privacy-retention" className={sectionLink}>
              Data retention
            </a>
          </li>
          <li>
            <a href="#privacy-rights" className={sectionLink}>
              Your rights
            </a>
          </li>
          <li>
            <a href="#privacy-security" className={sectionLink}>
              Data security
            </a>
          </li>
          <li>
            <a href="#privacy-transfers" className={sectionLink}>
              International transfers
            </a>
          </li>
          <li>
            <a href="#privacy-children" className={sectionLink}>
              Children&apos;s privacy
            </a>
          </li>
          <li>
            <a href="#privacy-changes" className={sectionLink}>
              Changes to this policy
            </a>
          </li>
          <li>
            <a href="#privacy-contact" className={sectionLink}>
              Contact us
            </a>
          </li>
        </ol>
      </nav>

      <section
        id="privacy-who"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          1. Who we are
        </h3>
        <p className="mt-4">
          BlackMatter Technologies Private Limited (&quot;we&quot;,
          &quot;us&quot;, &quot;our&quot;) is a custom software and website
          development company registered in Bengaluru, Karnataka, India. We build
          digital products and solutions for businesses and individuals
          worldwide.
        </p>
        <p className="mt-4">
          This Privacy Policy explains how we collect, use, store, and protect
          your personal information when you visit{" "}
          <a
            href="https://www.blackmattertech.com"
            target="_blank"
            rel="noopener noreferrer"
            className={sectionLink}
          >
            www.blackmattertech.com
          </a>
          , contact us, or engage our services. We are committed to handling
          your data with care, transparency, and in accordance with applicable
          privacy laws including the Information Technology Act, 2000 and the
          Digital Personal Data Protection Act, 2023 (India).
        </p>
      </section>

      <section
        id="privacy-collect"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          2. Information we collect
        </h3>
        <h4 className="mt-6 font-jetbrains text-xs font-medium uppercase tracking-widest text-white/55">
          Information you provide directly
        </h4>
        <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-neon">
          <li>
            Name, email address, phone number, and company name submitted via
            contact or enquiry forms
          </li>
          <li>
            Project details and requirements shared in communications with us
          </li>
          <li>
            Billing and payment information when you engage our services
            (processed via secure third-party payment processors)
          </li>
          <li>Credentials if you use our custom client portal</li>
          <li>Testimonials or feedback you choose to share with us</li>
        </ul>
        <h4 className="mt-6 font-jetbrains text-xs font-medium uppercase tracking-widest text-white/55">
          Information collected automatically
        </h4>
        <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-neon">
          <li>IP address, browser type, device type, and operating system</li>
          <li>
            Pages visited, time spent, and navigation paths on our website
          </li>
          <li>Referring URLs showing how you arrived at our website</li>
          <li>
            Cookie and tracking data as described in our{" "}
            <Link to="/policies?tab=cookies" className={sectionLink}>
              Cookies Policy
            </Link>{" "}
            (including Google Analytics 4 when enabled and you have accepted
            non-essential cookies)
          </li>
        </ul>
        <h4 className="mt-6 font-jetbrains text-xs font-medium uppercase tracking-widest text-white/55">
          Information from third parties
        </h4>
        <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-neon">
          <li>
            Business contact details from professional networks such as LinkedIn
          </li>
          <li>
            Analytics and behavioural data from Google Analytics when we have
            configured it and you have consented via our cookie banner
          </li>
          <li>
            Advertising interaction data from Google Ads, LinkedIn, and Meta
            platforms, only where you have consented to relevant cookies or tags
            and we use those services
          </li>
        </ul>
      </section>

      <section
        id="privacy-use"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          3. How we use your information
        </h3>
        <p className="mt-4">We use the information we collect to:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-neon">
          <li>
            Respond to enquiries and communicate with prospective and current
            clients
          </li>
          <li>
            Provide, manage, and deliver our software and website development
            services
          </li>
          <li>
            Process payments, issue invoices, and maintain financial records
          </li>
          <li>
            Improve and optimise our website, services, and marketing efforts
          </li>
          <li>
            Send service-related communications such as project updates,
            invoices, and support
          </li>
          <li>
            Send marketing communications where you have opted in (you may
            unsubscribe at any time)
          </li>
          <li>
            Comply with legal and regulatory obligations including GST and
            accounting requirements under Indian law
          </li>
          <li>
            Protect the security and integrity of our business and systems
          </li>
        </ul>
        <p className="mt-6 text-white/70">
          We do not sell your personal information to third parties, and we do
          not use your data to make automated decisions that significantly
          affect you.
        </p>
      </section>

      <section
        id="privacy-legal-basis"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          4. Legal basis for processing
        </h3>
        <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-neon">
          <li>
            <strong className="text-white">Contractual necessity</strong> — to
            fulfil our service agreements with you
          </li>
          <li>
            <strong className="text-white">Legitimate interests</strong> — to
            operate and improve our business, where not overridden by your
            rights
          </li>
          <li>
            <strong className="text-white">Consent</strong> — for marketing
            communications and non-essential cookies
          </li>
          <li>
            <strong className="text-white">Legal obligation</strong> — where
            required by Indian law, including GST compliance and statutory
            record-keeping
          </li>
        </ul>
      </section>

      <section
        id="privacy-sharing"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          5. Sharing your information
        </h3>
        <p className="mt-4">We may share your information with:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-neon">
          <li>
            <strong className="text-white">Service providers</strong> — trusted
            third-party vendors including our custom CRM platform, hosting
            providers, payment processors, and cloud storage. These parties are
            contractually bound to handle data securely and only for specified
            purposes.
          </li>
          <li>
            <strong className="text-white">Advertising platforms</strong> —
            Google Ads, LinkedIn, and Meta/Facebook for campaign tracking and
            remarketing, where you have consented to marketing cookies or
            equivalent and we use those platforms
          </li>
          <li>
            <strong className="text-white">Analytics providers</strong> —
            Google Analytics for website performance measurement when enabled and
            you have accepted analytics cookies
          </li>
          <li>
            <strong className="text-white">Professional advisors</strong> —
            accountants, legal counsel, or auditors where necessary
          </li>
          <li>
            <strong className="text-white">Authorities</strong> — government
            bodies, regulators, or law enforcement when required by law
          </li>
          <li>
            <strong className="text-white">Business transfers</strong> — in the
            event of a merger, acquisition, or sale of assets
          </li>
        </ul>
        <p className="mt-6 text-white/70">
          We do not share your personal data with unaffiliated third parties for
          their own marketing purposes.
        </p>
      </section>

      <section
        id="privacy-retention"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          6. Data retention
        </h3>
        <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-neon">
          <li>
            Client project data and financial records are retained for a minimum
            of 8 years as required under Indian accounting and GST laws
          </li>
          <li>
            Enquiry and contact form data is retained for up to 2 years if no
            engagement follows
          </li>
          <li>
            Marketing communication preferences are retained until you
            unsubscribe or request deletion
          </li>
          <li>
            Website analytics data is subject to Google Analytics&apos; retention
            settings (typically 14–26 months) when analytics is in use
          </li>
        </ul>
      </section>

      <section
        id="privacy-rights"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          7. Your rights
        </h3>
        <p className="mt-4">Under applicable law, you may have the right to:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-neon">
          <li>
            <strong className="text-white">Access</strong> — request a copy of
            the personal data we hold about you
          </li>
          <li>
            <strong className="text-white">Correction</strong> — ask us to
            correct inaccurate or incomplete data
          </li>
          <li>
            <strong className="text-white">Deletion</strong> — request deletion
            of your personal data where we no longer have a lawful basis to
            retain it
          </li>
          <li>
            <strong className="text-white">Withdraw consent</strong> — where
            processing is based on consent, withdraw it at any time without
            affecting prior processing
          </li>
          <li>
            <strong className="text-white">Grievance redressal</strong> — raise
            a complaint with us or with the Data Protection Board of India once
            operational
          </li>
        </ul>
        <p className="mt-6">
          To exercise any of these rights, contact us at{" "}
          <a
            href="mailto:info@blackmattertech.com"
            className={sectionLink}
          >
            info@blackmattertech.com
          </a>
          . We will respond within 30 days. We may need to verify your identity
          before processing your request.
        </p>
      </section>

      <section
        id="privacy-security"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          8. Data security
        </h3>
        <p className="mt-4">
          We implement appropriate technical and organisational measures to
          protect your personal data against unauthorised access, loss,
          alteration, or disclosure, including:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-neon">
          <li>Encrypted data transmission (HTTPS/TLS)</li>
          <li>
            Access controls and authentication for internal systems and our CRM
          </li>
          <li>Regular security reviews and software updates</li>
          <li>
            Limiting access to personal data to authorised personnel only
          </li>
        </ul>
        <p className="mt-6 text-white/70">
          No method of transmission over the internet is 100% secure. If you
          believe your data has been compromised, please contact us immediately
          at{" "}
          <a
            href="mailto:info@blackmattertech.com"
            className={sectionLink}
          >
            info@blackmattertech.com
          </a>
          .
        </p>
      </section>

      <section
        id="privacy-transfers"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          9. International data transfers
        </h3>
        <p className="mt-4">
          Some of our third-party service providers (such as Google and Meta)
          may process your data outside India. Where such transfers occur, we
          rely on the service provider&apos;s standard contractual commitments
          and applicable cross-border data transfer mechanisms to ensure an
          adequate level of protection.
        </p>
      </section>

      <section
        id="privacy-children"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          10. Children&apos;s privacy
        </h3>
        <p className="mt-4">
          Our website and services are not directed at children under the age of
          18. We do not knowingly collect personal data from minors. If you
          believe we have inadvertently collected such information, please
          contact us and we will delete it promptly.
        </p>
      </section>

      <section
        id="privacy-changes"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          11. Changes to this policy
        </h3>
        <p className="mt-4">
          We may update this Privacy Policy from time to time. When we make
          material changes, we will update the &quot;Last updated&quot; date at
          the top of this page. We encourage you to review this policy
          periodically.
        </p>
      </section>

      <section
        id="privacy-contact"
        className="scroll-mt-24 border-t border-white/10 pb-8 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          12. Contact us
        </h3>
        <p className="mt-4">
          For any questions, concerns, or requests regarding this Privacy Policy
          or your personal data, please reach out to us:
        </p>
        <ul className="mt-6 space-y-3 text-white/90">
          <li>
            <span className="font-jetbrains text-[10px] uppercase tracking-widest text-white/45">
              Company
            </span>
            <br />
            BlackMatter Technologies Private Limited
          </li>
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
            27/2, 1st Main Road, Palace Guttahalli, Bengaluru, Karnataka, India –
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
