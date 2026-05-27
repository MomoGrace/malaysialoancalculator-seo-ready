import type { Metadata } from 'next';
import SiteShell from '@/components/website/SiteShell';
import About from '@/components/website/policies/About';

export const metadata: Metadata = {
  title: 'About MalaysiaLoanCalculator',
  description: 'MalaysiaLoanCalculator is an independent Malaysia-focused loan calculator and personal finance tools website.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About MalaysiaLoanCalculator',
    description: 'MalaysiaLoanCalculator is an independent Malaysia-focused loan calculator and personal finance tools website.',
    url: '/about',
  },
};

export default function Page() {
  return (
    <SiteShell>
      <About />
    </SiteShell>
  );
}
