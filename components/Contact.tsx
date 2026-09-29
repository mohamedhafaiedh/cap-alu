import ContactForm from './ContactForm';
import { Icon, PHONE_DISPLAY, PHONE_HREF, SectionTitle, WHATSAPP_HREF, WhatsAppIcon } from './ui';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="min-w-0 lg:col-span-5 lg:pt-8">
          <SectionTitle align="left">Contactez-nous maintenant</SectionTitle>
          <p data-reveal className="mt-6 text-base leading-relaxed text-steel sm:text-[17px]">
            Nos professionnels expérimentés sont à votre disposition 24h/24, 7j/7 pour répondre à tous vos besoins. Vous
            pouvez choisir le moyen de contact qui vous convient.
          </p>

          <div data-reveal-stagger className="mt-10 space-y-4">
            <a
              data-reveal
              href={PHONE_HREF}
              className="group flex min-h-20 items-center gap-3 rounded-md border border-line px-3 py-2 sm:gap-4 sm:px-4 transition hover:border-brand"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white">
                <Icon name="phone" />
              </span>
              <span className="text-[13px] font-bold whitespace-nowrap text-ink group-hover:text-brand min-[360px]:text-[15px] sm:text-lg">{PHONE_DISPLAY}</span>
            </a>
            <a
              data-reveal
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-20 items-center gap-3 rounded-md border border-line px-3 py-2 sm:gap-4 sm:px-4 transition hover:border-brand"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white">
                <WhatsAppIcon />
              </span>
              <span className="text-[13px] font-bold whitespace-nowrap text-ink group-hover:text-brand min-[360px]:text-[15px] sm:text-lg">WhatsApp : {PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>

        <div id="devis" data-reveal style={{ '--reveal-delay': '120ms' } as React.CSSProperties} className="relative lg:col-span-7">
          <div aria-hidden="true" className="absolute -top-3 -right-3 hidden h-full w-full border-2 border-ink sm:block" />
          <div className="relative border border-line bg-white p-6 shadow-[0_20px_50px_rgb(14_23_38/0.08)] sm:p-10">
            <h3 className="text-2xl font-extrabold tracking-tight text-ink">Demande de devis gratuit</h3>
            <p className="mt-2 text-[15px] text-steel">
              Remplissez le formulaire ci-dessous et un expert vous contactera dans un délai d’une heure.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
