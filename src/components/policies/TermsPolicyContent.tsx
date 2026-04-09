const sectionLink =
  "text-neon underline decoration-white/30 underline-offset-2 transition-colors hover:decoration-white/60";

export default function TermsPolicyContent() {
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
            <a href="#terms-acceptance" className={sectionLink}>
              Acceptance of terms
            </a>
          </li>
          <li>
            <a href="#terms-services" className={sectionLink}>
              Our services
            </a>
          </li>
          <li>
            <a href="#terms-engagement" className={sectionLink}>
              Engagement and project agreements
            </a>
          </li>
          <li>
            <a href="#terms-payment" className={sectionLink}>
              Payment terms
            </a>
          </li>
          <li>
            <a href="#terms-gst" className={sectionLink}>
              Taxes and GST
            </a>
          </li>
          <li>
            <a href="#terms-ip" className={sectionLink}>
              Intellectual property
            </a>
          </li>
          <li>
            <a href="#terms-client" className={sectionLink}>
              Client responsibilities
            </a>
          </li>
          <li>
            <a href="#terms-confidentiality" className={sectionLink}>
              Confidentiality
            </a>
          </li>
          <li>
            <a href="#terms-warranty" className={sectionLink}>
              Post-launch warranty
            </a>
          </li>
          <li>
            <a href="#terms-warranties-disclaimers" className={sectionLink}>
              Warranties and disclaimers
            </a>
          </li>
          <li>
            <a href="#terms-liability" className={sectionLink}>
              Limitation of liability
            </a>
          </li>
          <li>
            <a href="#terms-termination" className={sectionLink}>
              Termination
            </a>
          </li>
          <li>
            <a href="#terms-disputes" className={sectionLink}>
              Dispute resolution
            </a>
          </li>
          <li>
            <a href="#terms-law" className={sectionLink}>
              Governing law
            </a>
          </li>
          <li>
            <a href="#terms-changes" className={sectionLink}>
              Changes to these terms
            </a>
          </li>
          <li>
            <a href="#terms-contact" className={sectionLink}>
              Contact us
            </a>
          </li>
        </ol>
      </nav>

      <section
        id="terms-acceptance"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          1. Acceptance of terms
        </h3>
        <p className="mt-4">
          By accessing{" "}
          <a
            href="https://www.blackmattertech.com"
            target="_blank"
            rel="noopener noreferrer"
            className={sectionLink}
          >
            www.blackmattertech.com
          </a>
          , submitting an enquiry, or engaging BlackMatter Technologies Private
          Limited (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, &quot;BlackMatter
          Technologies&quot;) for any services, you (&quot;Client&quot;,
          &quot;you&quot;) agree to be bound by these Terms of Service. If you do
          not agree, please refrain from using our website or engaging our
          services.
        </p>
        <p className="mt-4">
          These terms apply to all visitors, prospective clients, and clients of
          BlackMatter Technologies. They are to be read alongside any separate
          project agreement or statement of work signed between the parties,
          which will prevail in the event of any conflict.
        </p>
      </section>

      <section
        id="terms-services"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          2. Our services
        </h3>
        <p className="mt-4">
          BlackMatter Technologies provides custom software development, website
          design and development, web application development, and related
          digital consultancy services. The exact scope of work for each
          engagement is defined in a written project agreement or statement of
          work agreed upon before commencement of work.
        </p>
        <p className="mt-4">
          We reserve the right to decline any project request at our discretion
          without providing a reason.
        </p>
      </section>

      <section
        id="terms-engagement"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          3. Engagement and project agreements
        </h3>
        <p className="mt-4">
          All projects are formalised through a written project agreement or
          statement of work (SOW) that sets out the scope, deliverables,
          timeline, and fees. No work will commence until a project agreement
          has been signed and the required upfront deposit has been received.
        </p>
        <p className="mt-4">
          Any changes to the agreed scope must be requested in writing and may
          result in adjustments to the timeline and fees. We will provide a
          written change order for your approval before proceeding with any
          out-of-scope work.
        </p>
        <p className="mt-4">
          We will make reasonable efforts to meet agreed timelines. However,
          delays caused by late provision of client materials, approvals,
          feedback, or third-party factors beyond our control are not our
          responsibility and may result in a revised project schedule.
        </p>
      </section>

      <section
        id="terms-payment"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          4. Payment terms
        </h3>
        <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-neon">
          <li>
            All fees are as set out in the relevant project agreement or SOW
          </li>
          <li>
            A non-refundable deposit of 50% of the total project fee is
            required before work commences
          </li>
          <li>
            The remaining balance is invoiced upon completion of agreed
            milestones or delivery of the final deliverable, as specified in the
            project agreement
          </li>
          <li>All invoices are due within 7 days of the invoice date</li>
          <li>
            Late payments will attract interest at 2% per month on the
            outstanding amount, calculated from the due date until the date of
            actual payment
          </li>
          <li>
            We reserve the right to pause or withhold delivery of work, access
            to deliverables, and ongoing support until all overdue amounts are
            settled
          </li>
          <li>
            Payments must be made via the method specified on the invoice (bank
            transfer, UPI, or other agreed method)
          </li>
        </ul>
      </section>

      <section
        id="terms-gst"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          5. Taxes and GST
        </h3>
        <p className="mt-4">
          All fees quoted by BlackMatter Technologies are exclusive of Goods and
          Services Tax (GST). GST will be charged in addition to the quoted fee
          at the applicable rate as per Indian tax law at the time of invoicing.
        </p>
        <p className="mt-4">
          A GST-compliant tax invoice will be issued for all services rendered.
          Clients registered under GST may claim input tax credit in accordance
          with applicable rules. It is the client&apos;s responsibility to
          provide their GSTIN if they wish it to appear on the invoice.
        </p>
        <p className="mt-4">
          For international clients, GST treatment will be determined based on
          the nature and place of supply under the Integrated Goods and Services
          Tax (IGST) Act, 2017.
        </p>
      </section>

      <section
        id="terms-ip"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          6. Intellectual property
        </h3>
        <h4 className="mt-6 font-jetbrains text-xs font-medium uppercase tracking-widest text-white/55">
          Client ownership
        </h4>
        <p className="mt-3">
          Upon receipt of full and final payment, all custom deliverables created
          specifically for you under the project agreement — including source
          code, designs, and documentation — are assigned to you. You will own
          those works outright.
        </p>
        <h4 className="mt-6 font-jetbrains text-xs font-medium uppercase tracking-widest text-white/55">
          Our retained rights
        </h4>
        <p className="mt-3">
          We retain ownership of all pre-existing tools, frameworks, libraries,
          templates, methodologies, and know-how developed independently of your
          project (&quot;background IP&quot;). Where such background IP is
          incorporated into deliverables, we grant you a perpetual, royalty-free,
          non-exclusive licence to use it solely as part of the delivered
          project.
        </p>
        <h4 className="mt-6 font-jetbrains text-xs font-medium uppercase tracking-widest text-white/55">
          Third-party components
        </h4>
        <p className="mt-3">
          Some deliverables may incorporate open-source software or third-party
          licensed components. These remain subject to their respective
          licences. We will inform you of any such components included in your
          project.
        </p>
        <h4 className="mt-6 font-jetbrains text-xs font-medium uppercase tracking-widest text-white/55">
          Portfolio use
        </h4>
        <p className="mt-3">
          We may display your completed project in our portfolio and reference
          your name as a client in our marketing materials only if you have given
          prior written consent to do so. We will always seek your approval
          before any such use.
        </p>
      </section>

      <section
        id="terms-client"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          7. Client responsibilities
        </h3>
        <p className="mt-4">You agree to:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-neon">
          <li>
            Provide accurate, complete, and timely information, materials, and
            feedback required for us to carry out the work
          </li>
          <li>
            Ensure you hold all necessary rights and permissions for any
            content, data, or third-party materials you supply to us
          </li>
          <li>
            Designate an authorised representative to make decisions on your
            behalf throughout the project
          </li>
          <li>
            Review and accept or provide written feedback on deliverables within
            the agreed review periods
          </li>
          <li>
            Maintain appropriate backups of your existing systems before any
            integration or deployment work is carried out
          </li>
        </ul>
        <p className="mt-6 text-white/70">
          You must not use our services for any unlawful purpose or in a way that
          infringes the rights of any third party.
        </p>
      </section>

      <section
        id="terms-confidentiality"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          8. Confidentiality
        </h3>
        <p className="mt-4">
          Both parties agree to keep the other&apos;s confidential information —
          including business strategies, technical specifications, pricing,
          client data, and project details — strictly confidential and not to
          disclose it to any third party without prior written consent, except
          where required by law.
        </p>
        <p className="mt-4">
          This obligation does not apply to information that is or becomes
          publicly known through no fault of the receiving party, or that is
          independently developed without reference to the confidential
          information.
        </p>
        <p className="mt-4">
          All project-related information you share with us will be treated as
          confidential and used solely for the purpose of delivering your
          project. We will not share it with any third party except as required
          by applicable law.
        </p>
      </section>

      <section
        id="terms-warranty"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          9. Post-launch warranty
        </h3>
        <p className="mt-4">
          BlackMatter Technologies provides a 90-day post-launch warranty on all
          delivered projects. During this period, we will fix any bugs or defects
          arising directly from our development work at no additional charge,
          provided that:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-neon">
          <li>
            The issue is reported to us in writing within the 90-day warranty
            period
          </li>
          <li>
            The defect is reproducible and traceable to our original code or
            implementation
          </li>
          <li>
            No unauthorised modifications have been made to the deliverables
            by the client or any third party
          </li>
        </ul>
        <p className="mt-6 text-white/70">
          The warranty does not cover new features, changes in requirements,
          issues arising from third-party software updates, hosting environment
          changes, or client-side modifications. Post-warranty support and
          maintenance is available under a separate agreement.
        </p>
      </section>

      <section
        id="terms-warranties-disclaimers"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          10. Warranties and disclaimers
        </h3>
        <p className="mt-4">
          We warrant that our services will be performed with reasonable skill
          and care in accordance with good industry practice.
        </p>
        <p className="mt-4">
          Our website and any free resources, advice, or general information
          provided are offered &quot;as is&quot; without warranty of any kind. We
          do not guarantee that the website will be uninterrupted, error-free,
          or free of harmful components.
        </p>
        <p className="mt-4">
          Beyond the 90-day post-launch warranty described in section 9, we make
          no further warranty that software or websites will remain free from
          issues arising from changes in third-party services, hosting
          environments, or browsers.
        </p>
      </section>

      <section
        id="terms-liability"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          11. Limitation of liability
        </h3>
        <p className="mt-4">To the maximum extent permitted by applicable law:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-neon">
          <li>
            Our total liability to you for any claim shall not exceed the total
            fees paid by you to BlackMatter Technologies in the 3 months
            preceding the event giving rise to the claim
          </li>
          <li>
            We shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages — including loss of profits, loss
            of data, or business interruption — even if we have been advised of
            the possibility of such damages
          </li>
          <li>
            We are not liable for delays or failures resulting from causes beyond
            our reasonable control, including internet outages, third-party
            service failures, natural disasters, or government actions
          </li>
        </ul>
        <p className="mt-6 text-white/70">
          Nothing in these terms limits liability that cannot be excluded under
          applicable Indian law, including liability for fraud or gross
          negligence.
        </p>
      </section>

      <section
        id="terms-termination"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          12. Termination
        </h3>
        <p className="mt-4">
          Either party may terminate a project agreement with 30 days&apos;
          written notice. Upon termination:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-neon">
          <li>
            You will pay for all work completed up to the termination date,
            calculated on a pro-rata basis against the agreed project fee
          </li>
          <li>
            We will deliver all completed work and associated materials upon
            receipt of all outstanding payments
          </li>
          <li>The 50% deposit is non-refundable once work has commenced</li>
        </ul>
        <p className="mt-6">
          We may terminate immediately and without notice if you breach these
          terms or any project agreement and fail to remedy the breach within 7
          days of written notice from us, or if any payment is overdue by more
          than 30 days.
        </p>
      </section>

      <section
        id="terms-disputes"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          13. Dispute resolution
        </h3>
        <p className="mt-4">
          The parties will first attempt to resolve any dispute, controversy, or
          claim arising out of or relating to these terms or any project
          agreement through good-faith negotiations. If the dispute cannot be
          resolved within thirty (30) days of a written notice from either party,
          either party may pursue remedies as permitted under section 14.
        </p>
        <p className="mt-4 text-white/70">
          Nothing in this section prevents either party from seeking urgent
          injunctive or equitable relief before a court of competent jurisdiction
          where necessary to protect its rights.
        </p>
      </section>

      <section
        id="terms-law"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          14. Governing law
        </h3>
        <p className="mt-4">
          These Terms of Service and any dispute or claim arising out of or in
          connection with them (including non-contractual disputes) shall be
          governed by and construed in accordance with the laws of India, without
          regard to conflict-of-law principles.
        </p>
        <p className="mt-4">
          Subject to section 13, the courts located in Bengaluru, Karnataka,
          India shall have exclusive jurisdiction over any proceedings arising
          out of or relating to these terms or our services, and you submit to
          the personal jurisdiction of those courts.
        </p>
      </section>

      <section
        id="terms-changes"
        className="scroll-mt-24 border-t border-white/10 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          15. Changes to these terms
        </h3>
        <p className="mt-4">
          We may update these Terms of Service from time to time. When we make
          material changes, we will update the &quot;Last updated&quot; date at
          the top of this page. Your continued use of our website or engagement
          of our services after changes become effective constitutes your
          acceptance of the revised terms, except where a signed project
          agreement provides otherwise.
        </p>
        <p className="mt-4 text-white/70">
          For ongoing client engagements, material changes will be communicated
          where reasonably practicable.
        </p>
      </section>

      <section
        id="terms-contact"
        className="scroll-mt-24 border-t border-white/10 pb-8 pt-12"
      >
        <h3 className="font-orbitron text-lg font-normal uppercase tracking-wide text-white sm:text-xl">
          16. Contact us
        </h3>
        <p className="mt-4">
          For questions about these Terms of Service, please contact us:
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
