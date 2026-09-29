import { CallButton, Icon, type IconName, SectionTitle } from './ui';

const STEPS: { title: string; text: string; icon: IconName }[] = [
  { title: 'Contact', text: 'Téléphone, e-mail ou formulaire de contact', icon: 'chat' },
  {
    title: 'Estimation GRATUITE',
    text: 'Une fois contacté, notre expert vous établira une première estimation selon votre situation',
    icon: 'euro'
  },
  {
    title: 'Visite chantier et devis définitif',
    text: "Après visite du lieu d'intervention, notre équipe pourra alors vous établir un devis complet sans frais cachés",
    icon: 'clipboard'
  },
  {
    title: 'Validation du devis et intervention',
    text: 'Une fois que vous avez validé le devis, nos experts font le nécessaire pour une intervention efficace et 100% sécurisée',
    icon: 'wrench'
  }
];

export default function Workflow() {
  return (
    <section id="deroulement" className="bg-ink py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle tone="dark">Déroulement de notre prestation</SectionTitle>

        <div className="relative mt-16">
        <div aria-hidden="true" className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-px bg-white/20 lg:block" />
        <ol data-reveal-stagger className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((step, i) => (
            <li key={step.title} data-reveal className="relative flex flex-col items-center text-center">
              <span className="relative flex h-14 w-14 items-center justify-center rounded-md bg-brand-soft text-brand ring-8 ring-ink">
                <Icon name={step.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-lg font-extrabold">
                {i + 1}. {step.title}
              </h3>
              <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-white/70">{step.text}</p>
            </li>
          ))}
        </ol>
        </div>

        <div data-reveal className="mt-16 flex justify-center">
          <CallButton className="shadow-none" />
        </div>
      </div>
    </section>
  );
}
