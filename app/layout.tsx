import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';

import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets:['latin'],
  variable:'--font-sans',
});

export const metadata: Metadata = {
  title: 'Bohdan\'s (grynkiv0x001) Blog',
  description: 'Simple blog about software development and music',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={`${jetbrainsMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
