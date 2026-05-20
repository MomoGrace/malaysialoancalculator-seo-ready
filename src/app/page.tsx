import type { Metadata } from 'next';
import SiteShell from '@/components/website/SiteShell';
import HomePage from '@/components/website/HomePage';

export const metadata: Metadata = {
  title: 'Loan Calculator Malaysia | Car, Home & Personal Loan Calculator',
  description: 'Free Malaysia loan calculator to estimate monthly repayment, total interest and total payment for car loans, home loans, personal loans in Malaysia.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Loan Calculator Malaysia | Car, Home & Personal Loan Calculator',
    description: 'Free Malaysia loan calculator to estimate monthly repayment, total interest and total payment for car loans, home loans, personal loans in Malaysia.',
    url: '/',
  },
};

export default function Page() {
  return (
    <SiteShell isHome>
      <HomePage />
    </SiteShell>
  );
}
