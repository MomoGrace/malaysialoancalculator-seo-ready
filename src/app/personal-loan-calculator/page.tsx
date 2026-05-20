import type { Metadata } from 'next';
import SiteShell from '@/components/website/SiteShell';
import PersonalLoanCalculator from '@/components/website/calculators/PersonalLoanCalculator';

export const metadata: Metadata = {
  title: 'Personal Loan Calculator Malaysia | LoanCalc Malaysia',
  description: 'Calculate Malaysian personal loan monthly repayment, interest cost and total repayment for planning purposes.',
  alternates: { canonical: '/personal-loan-calculator' },
  openGraph: {
    title: 'Personal Loan Calculator Malaysia | LoanCalc Malaysia',
    description: 'Calculate Malaysian personal loan monthly repayment, interest cost and total repayment for planning purposes.',
    url: '/personal-loan-calculator',
  },
};

export default function Page() {
  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Personal Loan Calculator Malaysia',
    url: 'https://malaysialoancalculator.com/personal-loan-calculator',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'MYR',
    },
    description: 'Calculate Malaysian personal loan monthly repayment, interest cost and total repayment for planning purposes.',
  };

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <PersonalLoanCalculator />
    </SiteShell>
  );
}
