import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CapAlu – Vitrier et menuisier à Paris et en Île-de-France',
  description: 'Spécialiste des travaux de vitrerie et de menuiserie aluminium, PVC, bois et façades commerciales sur mesure à Paris et Île-de-France. Intervention 24h/24 et 7j/7.',
  icons: {
    icon: '/images/logocapalu.jpg',
    shortcut: '/images/logocapalu.jpg',
    apple: '/images/logocapalu.jpg'
  },
  openGraph: {
    title: 'CapAlu – Vitrier et menuisier à Paris et en Île-de-France',
    description: 'Vitrerie et menuiserie sur mesure à Paris et Île-de-France. Devis gratuit et intervention rapide.',
    url: 'https://capalu.fr',
    siteName: 'CapAlu',
    images: [{ url: '/images/logocapalu.jpg' }],
    locale: 'fr_FR',
    type: 'website'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-FR" className="scroll-smooth">
      <body className="home wp-singular page-template page-template-elementor_header_footer page page-id-135 wp-custom-logo wp-theme-hello-biz wp-child-theme-hello-biz-child-main ehp-default ehbiz-default elementor-default elementor-template-full-width elementor-kit-61 elementor-page elementor-page-135">
        {children}
      </body>
    </html>
  );
}

