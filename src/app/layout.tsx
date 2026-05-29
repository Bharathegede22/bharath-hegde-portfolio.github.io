import type { Metadata } from 'next';
import './globals.css';
import PortfolioHeader from '@/components/PortfolioHeader';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: 'Bharath Hegde | D2C Founder & E-commerce Builder',
  description: 'Portfolio of Bharath Hegde, co-founder of abov earth and InertiaCart, specializing in apparel manufacturing, e-commerce operations, and bootstrapping.',
  keywords: 'Bharath Hegde, abov earth, InertiaCart, FourKubes, D2C founder, E-commerce, Bootstrapped startup, Bengaluru entrepreneur',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        {/* Inline script to prevent FOUC (Flash of Unstyled Content) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && systemPrefersDark)) {
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.colorScheme = 'dark';
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.style.colorScheme = 'light';
                }
              } catch (e) {
                console.error(e);
              }
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col text-foreground bg-background selection:bg-primary/30 selection:text-foreground">
        <PortfolioHeader />
        <main className="flex-grow">
          {children}
        </main>
        <ScrollToTop />
      </body>
    </html>
  );
}
