import type { Metadata } from 'next';
import { Archivo, Hanken_Grotesk } from 'next/font/google';
import './globals.css';

// Fuentes del diseño, cargadas con next/font/google y expuestas como
// variables CSS. globals.css las referencia en --display / --body.
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pragma Controllers — Control de contratistas para minería, petróleo y gas',
  description:
    'Auditoría y control de contratistas, gestión documental y asesoría legal-estratégica para empresas de minería, petróleo y gas. Cuyo: San Juan · Mendoza.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${archivo.variable} ${hanken.variable}`}>
      <body data-theme="light">{children}</body>
    </html>
  );
}
