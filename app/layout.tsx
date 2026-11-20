import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { I18nProvider } from '@/lib/i18n';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });

export const metadata: Metadata = {
  title: 'Naelle Noutong Nangmo — Full Stack · Data · Cloud & DevOps · Product Owner junior',
  description:
    'Portfolio de Naelle Noutong Nangmo : développement Full Stack, data engineering, cloud & DevOps, product owner et business analyst junior. Stage dès avril 2027, alternance dès septembre 2027.',
  keywords: [
    'Naelle Noutong Nangmo',
    'Data Engineering',
    'Full Stack Developer',
    'Cloud DevOps',
    'Product Owner junior',
    'Business Analyst',
    'Portfolio',
    '3iL Ingénieurs',
  ],
  authors: [{ name: 'Naelle Noutong Nangmo' }],
  creator: 'Naelle Noutong Nangmo',
  openGraph: {
    title: 'Naelle Noutong Nangmo — Full Stack · Data · Cloud & DevOps · Product Owner junior',
    description:
      'Portfolio de Naelle Noutong Nangmo : développement Full Stack, data engineering, cloud & DevOps, product owner et business analyst junior. Stage dès avril 2027, alternance dès septembre 2027.',
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naelle Noutong Nangmo — Full Stack · Data · Cloud & DevOps · Product Owner junior',
    description:
      'Portfolio de Naelle Noutong Nangmo : développement Full Stack, data engineering, cloud & DevOps, product owner et business analyst junior. Stage dès avril 2027, alternance dès septembre 2027.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
