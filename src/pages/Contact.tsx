import React from 'react';
import { inquiryCategories } from '../data/site';
import { ContactForm } from '../components/ContactForm';
import { Page } from '../components/Page';
import { PixelCharacters } from '../components/PixelCharacters';
import { Reveal } from '../components/Reveal';

export function Contact() {
  return (
    <Page
      title="Contact — Twin Bits"
      description="Questions, ideas or collaborations? Get in touch with independent game studio Twin Bits.">
      
      <div className="container-site pb-20 pt-8 md:pt-12 lg:pb-24 lg:pt-14">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 xl:gap-24">
          <section aria-labelledby="contact-title">
            <Reveal>
              <p className="eyebrow">Contact</p>
              <h1
                id="contact-title"
                className="display mt-5 text-[clamp(4.5rem,24vw,8rem)] lg:mt-7 lg:text-[clamp(5.5rem,9vw,9.5rem)]">
                
                <span className="block">Let’s</span>
                <span className="block">talk.</span>
              </h1>
            </Reveal>
            <Reveal delay={1}>
              <p className="mt-7 max-w-[28rem] text-[clamp(1.375rem,2vw,1.875rem)] leading-[1.25] lg:mt-9">
                Questions, ideas or collaborations? We’d love to hear from you.
              </p>
            </Reveal>
            <Reveal delay={2} className="mt-10 sm:flex sm:items-end sm:gap-14 lg:mt-14 lg:block">
              <PixelCharacters className="[--px:4px] lg:[--px:4.5px]" />
              <ul className="mt-9 space-y-5 sm:mt-0 lg:mt-10 lg:space-y-6" aria-label="What we can help with">
                {inquiryCategories.map((category) =>
                <li key={category} className="flex items-center gap-6 text-[clamp(1.25rem,1.6vw,1.5rem)]">
                    <span aria-hidden="true" className="h-3.5 w-3.5 shrink-0 bg-ink" />
                    {category}
                  </li>
                )}
              </ul>
            </Reveal>
          </section>

          <Reveal delay={2} className="lg:pt-1">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </Page>);

}