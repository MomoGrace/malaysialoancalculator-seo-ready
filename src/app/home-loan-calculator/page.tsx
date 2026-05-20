import type { Metadata } from 'next';
import SiteShell from '@/components/website/SiteShell';
import HomeLoanCalculator from '@/components/website/calculators/HomeLoanCalculator';

export const metadata: Metadata = {
  title: 'Home Loan Calculator Malaysia | LoanCalc Malaysia',
  description: 'Estimate Malaysian home loan monthly repayment, total interest and housing loan costs using reducing balance examples.',
  alternates: { canonical: '/home-loan-calculator' },
  openGraph: {
    title: 'Home Loan Calculator Malaysia | LoanCalc Malaysia',
    description: 'Estimate Malaysian home loan monthly repayment, total interest and housing loan costs using reducing balance examples.',
    url: '/home-loan-calculator',
  },
};

export default function Page() {
  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Home Loan Calculator Malaysia',
    url: 'https://malaysialoancalculator.com/home-loan-calculator',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'MYR',
    },
    description: 'Estimate Malaysian home loan monthly repayment, total interest and housing loan costs using reducing balance examples.',
  };

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <HomeLoanCalculator />
    </SiteShell>
  );
}
