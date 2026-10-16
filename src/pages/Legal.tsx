import { ReactNode } from 'react';
import { Page } from '../components/Page';

const CONTACT_EMAIL = 'twobitsgamestudio@gmail.com';
const UPDATED = 'October 16, 2026';

function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.035em]">{title}</h2>
      <div className="mt-3 space-y-4 text-[17px] leading-[1.65] text-ink/80">{children}</div>
    </section>
  );
}

function LegalLayout({ label, title, description, children }: { label: string; title: string; description: string; children: ReactNode }) {
  return (
    <Page title={`${title} — Twin Bits`} description={description}>
      <div className="container-site py-12 md:py-16 lg:py-20">
        <article className="mx-auto max-w-[800px]">
          <p className="eyebrow">{label}</p>
          <h1 className="display mt-5 text-[clamp(3.25rem,10vw,6rem)]">{title}</h1>
          <p className="mt-5 text-sm text-ink/60">Last updated: {UPDATED}</p>
          {children}
        </article>
      </div>
    </Page>
  );
}

export function PrivacyPolicy() {
  return (
    <LegalLayout
      label="Legal"
      title="Privacy Policy"
      description="How Twin Bits handles information when you visit our website.">
      <LegalSection title="Who we are">
        <p>Twin Bits operates this website at twinbits.site. For questions about this policy or your information, email <a className="text-accent underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
      </LegalSection>
      <LegalSection title="Information we handle">
        <p>You can browse this site without creating an account. Our hosting provider may process standard technical information needed to deliver and protect the site, such as your IP address, browser and device details, requested pages, and access times.</p>
        <p>If you contact us by email, we receive the address and any information you choose to include. The contact form on this website is not currently connected to a sending service, so submitting it does not send us your message.</p>
      </LegalSection>
      <LegalSection title="How we use information">
        <p>We use technical information to operate, secure, and troubleshoot the website. We use information you send us to respond to your inquiry and manage the related conversation. We do not sell personal information. The current site does not include advertising or analytics trackers.</p>
      </LegalSection>
      <LegalSection title="Third-party services and links">
        <p>The site loads fonts from Google Fonts, which may receive technical information associated with that request. Our hosting provider delivers the site and may retain access logs. Links to Google Play and other external websites are governed by those services’ own privacy policies.</p>
        <p>This policy covers the Twin Bits website. Individual games may use different services or process different information; their own privacy notices will describe those practices when applicable.</p>
      </LegalSection>
      <LegalSection title="Retention and your choices">
        <p>We keep correspondence only as long as reasonably needed to respond, maintain records, or meet applicable obligations. You can ask us to access, correct, or delete information you have sent us by emailing <a className="text-accent underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will respond in accordance with applicable law.</p>
      </LegalSection>
      <LegalSection title="Security and changes">
        <p>We use reasonable measures to protect information, but no internet service can guarantee absolute security. If the site’s data practices change, we will update this page and its “Last updated” date.</p>
      </LegalSection>
    </LegalLayout>
  );
}

export function Terms() {
  return (
    <LegalLayout
      label="Legal"
      title="Terms of Use"
      description="Terms for using the Twin Bits website.">
      <LegalSection title="Using this website">
        <p>These terms apply to your use of the Twin Bits website at twinbits.site. You may browse it for personal, non-commercial purposes. Please do not misuse the site, interfere with its operation, or attempt to access systems or information without authorization.</p>
      </LegalSection>
      <LegalSection title="Content and intellectual property">
        <p>The site’s text, artwork, design, logos, and other content belong to Twin Bits or their respective rights holders. You may not copy, redistribute, or use them commercially without permission, except where applicable law allows it.</p>
      </LegalSection>
      <LegalSection title="Games and external links">
        <p>Descriptions and images of games are provided for information and may change. A link to a third-party store or service takes you to a separate website with its own terms and privacy practices. Availability, pricing, and features of any game are determined by its listing and applicable game terms.</p>
      </LegalSection>
      <LegalSection title="Availability">
        <p>We aim to keep the site accurate and available, but we may update, suspend, or remove content or features. The site is provided as available, without a guarantee that it will be uninterrupted or error-free. Nothing in these terms limits rights that cannot be excluded under applicable law.</p>
      </LegalSection>
      <LegalSection title="Changes and contact">
        <p>We may revise these terms by posting an updated version here. Continued use after an update means you accept the revised terms, to the extent permitted by law. For questions, email <a className="text-accent underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
      </LegalSection>
    </LegalLayout>
  );
}

