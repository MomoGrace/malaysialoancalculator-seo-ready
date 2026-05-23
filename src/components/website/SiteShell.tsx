import type { ReactNode } from 'react';
import Header from '@/components/website/Header';
import Footer from '@/components/website/Footer';
import CookieConsent from '@/components/website/CookieConsent';

export default function SiteShell({
  children,
  isHome = false,
}: {
  children: ReactNode;
  isHome?: boolean;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className={isHome ? '' : 'py-8 sm:py-10'}>{children}</div>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
