import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import RevealOnScroll from '@/components/RevealOnScroll';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap'
});

const title = 'CapAlu – Vitrier et menuisier à Paris et en Île-de-France';
const description = 'Spécialiste des travaux de vitrerie et de menuiserie aluminium, PVC, bois et façades commerciales sur mesure à Paris et Île-de-France. Intervention 24h/24 et 7j/7.';

export const metadata: Metadata = {
  metadataBase: new URL('https://capalu.fr'),
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description: 'Vitrerie et menuiserie sur mesure à Paris et Île-de-France. Devis gratuit et intervention rapide.',
    url: '/',
    siteName: 'CapAlu',
    images: [{ url: '/images/og-capalu.jpg', width: 1200, height: 630, alt: 'CapAlu, vitrerie et menuiserie à Paris' }],
    locale: 'fr_FR',
    type: 'website'
  },
  twitter: { card: 'summary_large_image' }
};

// Couleur de la barre du navigateur sur mobile
export const viewport: Viewport = {
  themeColor: '#2462a5'
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'CapAlu',
  description,
  url: 'https://capalu.fr',
  logo: 'https://capalu.fr/images/logo-capalu.png',
  image: 'https://capalu.fr/images/og-capalu.jpg',
  telephone: '+33745046175',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '44 rue Rébéval',
    postalCode: '75019',
    addressLocality: 'Paris',
    addressCountry: 'FR'
  },
  areaServed: { '@type': 'AdministrativeArea', name: 'Île-de-France' },
  // Horaires affichés sur le site : interventions et devis en semaine (urgences 24/7, cf. description)
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '20:00'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-FR" className={manrope.variable} data-scroll-behavior="smooth">
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <Header />
        {children}
        <Footer />
        <RevealOnScroll />
      </body>
    </html>
  );
}
