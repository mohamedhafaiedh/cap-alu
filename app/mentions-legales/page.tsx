import type { Metadata } from 'next';
import { Icon, type IconName, PHONE_DISPLAY, PHONE_HREF } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Mentions légales – CapAlu',
  description: 'Mentions légales du site capalu.fr, édité par CapAlu, vitrier et menuisier à Paris.',
  alternates: { canonical: '/mentions-legales' }
};

const SITE_URL = 'https://capalu.fr';
const link = 'whitespace-nowrap text-brand underline decoration-brand/40 underline-offset-2 hover:decoration-brand';

// Structure reprise de la page mentions légales de GoNext (go-next.fr/mentions-legales)
function LegalSection({ icon, title, children }: { icon: IconName; title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="mb-3 flex items-center gap-3">
        <span className="shrink-0 rounded-lg bg-brand-soft p-2 text-brand">
          <Icon name={icon} className="h-5 w-5" />
        </span>
        <h2 className="text-xl font-bold text-ink sm:text-2xl">{title}</h2>
      </div>
      <div className="pl-3.5 sm:pl-12">{children}</div>
    </section>
  );
}

export default function MentionsLegales() {
  return (
    <main className="legal-page bg-blueprint py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[900px] px-4 sm:px-6">
        {/* Même carte que le formulaire de devis (angles droits, ombre douce), sans le cadre décalé */}
        <div className="relative">
          <div className="relative border border-line bg-white p-6 shadow-[0_20px_50px_rgb(14_23_38/0.08)] sm:p-12">
          <h1 className="m-rise mb-8 border-b border-line pb-4 text-center text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Mentions légales
          </h1>

          <div
            style={{ '--rise-delay': '0.12s' } as React.CSSProperties}
            className="m-rise space-y-8 text-sm leading-relaxed text-steel sm:text-base"
          >
            <p className="italic">
              Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la
              Confiance dans l’économie numérique (L.C.E.N.), nous portons à la connaissance des utilisateurs et
              visiteurs du site les informations suivantes.
            </p>

            <LegalSection icon="building" title="Informations légales">
              <p className="mb-3">
                <strong className="text-ink">CapAlu</strong> est une entreprise spécialisée dans les travaux de vitrerie
                et de menuiserie en Île-de-France.
              </p>
              <ul className="space-y-1.5">
                <li>
                  <strong className="text-ink">Adresse</strong> : 44 rue Rébéval, 75019 Paris, France
                </li>
                <li>
                  <strong className="text-ink">Téléphone</strong> :{' '}
                  <a href={PHONE_HREF} className={link}>
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <strong className="text-ink">Responsable de la publication</strong> : Amine Hamdi
                </li>
              </ul>
            </LegalSection>

            <LegalSection icon="globe" title="Accès au site">
              <p className="mb-3">
                L’utilisateur du site internet <strong className="text-ink">{SITE_URL}</strong> reconnaît disposer de la
                compétence et des moyens nécessaires pour accéder et utiliser ce site internet.
              </p>
              <p>
                Les utilisateurs de ce site internet sont tenus de respecter les dispositions de la loi relative à
                l’informatique, aux fichiers et aux libertés, dont la violation est passible de sanctions pénales. Ils
                doivent notamment s’abstenir de toute collecte, utilisation détournée du contenu de ce site. Concernant
                les informations personnelles, les utilisateurs du site doivent s’abstenir de tout acte susceptible de
                porter atteinte à la vie privée ou à la réputation des personnes.
              </p>
            </LegalSection>

            <LegalSection icon="file" title="Contenu du site">
              <p className="mb-3">
                Nous remercions les utilisateurs du site de nous faire part d’éventuelles omissions, erreurs ou
                corrections, par téléphone ou au travers du formulaire de demande de devis mis à disposition sur le site.
                Notre objectif est de diffuser des informations exactes et tenues à jour concernant les activités de
                CapAlu.
              </p>
              <p className="mb-2">Les informations du présent site :</p>
              <ul className="mb-3 list-disc space-y-1 pl-6">
                <li>sont exclusivement de nature générale et ne visent pas une situation particulière,</li>
                <li>ne sont pas nécessairement complètes, exhaustives, exactes ou à jour,</li>
                <li>
                  renvoient parfois à des sites extérieurs sur lesquels CapAlu n’a aucun contrôle et pour lesquels
                  l’entreprise décline toute responsabilité,
                </li>
                <li>ne constituent pas un devis ni un engagement contractuel.</li>
              </ul>
              <p>
                CapAlu décline toute responsabilité à l’égard des inconvénients techniques pouvant résulter d’une
                utilisation de ce site ou de tout autre site extérieur auquel il renvoie.
              </p>
            </LegalSection>

            <LegalSection icon="shield" title="Propriété intellectuelle">
              <p className="mb-3">
                La structure générale, ainsi que les textes, photographies de réalisations, images, logo, graphismes et
                tous autres éléments composant ce site web sont de l’utilisation exclusive de{' '}
                <strong className="text-ink">CapAlu</strong>.
              </p>
              <p className="mb-3">
                Toute représentation totale ou partielle de ce site, par quelques procédés que ce soient, sans
                autorisation expresse de CapAlu, est interdite et constituerait une contrefaçon sanctionnée par les
                articles L335-2 et suivants du Code de la propriété intellectuelle.
              </p>
              <p>
                Les liens hypertextes mis en place dans le cadre du présent site internet en direction d’autres
                ressources présentes sur le réseau internet ne sauraient engager la responsabilité de CapAlu.
              </p>
            </LegalSection>

            <LegalSection icon="server" title="Hébergement">
              <p className="mb-2">
                L’hébergement du site internet <strong className="text-ink">{SITE_URL}</strong> est assuré par la
                société <strong className="text-ink">Netlify, Inc.</strong>
              </p>
              <p>
                Site web :{' '}
                <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className={link}>
                  https://www.netlify.com
                </a>
              </p>
            </LegalSection>

            <LegalSection icon="lock" title="Données personnelles">
              <p className="mb-3">
                Les informations transmises via le formulaire de demande de devis (nom, email, téléphone, adresse,
                message) sont utilisées uniquement pour répondre à votre demande. Elles ne sont ni cédées ni revendues à
                des tiers.
              </p>
              <p>
                Conformément au Règlement général sur la protection des données (RGPD), vous disposez d’un droit
                d’accès, de rectification et de suppression de vos données. Pour l’exercer, contactez-nous au{' '}
                <a href={PHONE_HREF} className={link}>
                  {PHONE_DISPLAY}
                </a>
                .
              </p>
            </LegalSection>

            <LegalSection icon="cookie" title="Cookies">
              <p>Ce site n’utilise aucun cookie de suivi ou de mesure d’audience.</p>
            </LegalSection>
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}
