import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { I18nProvider } from '@/lib/i18n';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });

export const metadata: Metadata = {
  title: 'Naelle Noutong Nangmo — Full Stack · Data Engineering · Cloud & DevOps',
  description:
    'Portfolio de Naelle Noutong Nangmo — développeuse Full Stack spécialisée en data engineering. I build systems. I connect worlds.',
  keywords: [
    'Naelle Noutong Nangmo',
    'Data Engineering',
    'Full Stack Developer',
    'Cloud DevOps',
    'Portfolio',
    '3iL Ingénieurs',
  ],
  authors: [{ name: 'Naelle Noutong Nangmo' }],
  creator: 'Naelle Noutong Nangmo',
  openGraph: {
    title: 'Naelle Noutong Nangmo — Full Stack · Data Engineering · Cloud & DevOps',
    description: 'I build systems. I connect worlds.',
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naelle Noutong Nangmo — Portfolio',
    description: 'I build systems. I connect worlds.',
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
