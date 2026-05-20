import type { Metadata } from 'next';
import SiteShell from '@/components/website/SiteShell';
import CarLoanCalculator from '@/components/website/calculators/CarLoanCalculator';

export const metadata: Metadata = {
  title: 'Car Loan Calculator Malaysia | LoanCalc Malaysia',
  description: 'Calculate Malaysian car loan instalment, total interest and total repayment using flat rate hire purchase examples.',
  alternates: { canonical: '/car-loan-calculator' },
  openGraph: {
    title: 'Car Loan Calculator Malaysia | LoanCalc Malaysia',
    description: 'Calculate Malaysian car loan instalment, total interest and total repayment using flat rate hire purchase examples.',
    url: '/car-loan-calculator',
  },
};

export default function Page() {
  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Car Loan Calculator Malaysia',
    url: 'https://malaysialoancalculator.com/car-loan-calculator',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'MYR',
    },
    description: 'Calculate Malaysian car loan instalment, total interest and total repayment using flat rate hire purchase examples.',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://malaysialoancalculator.com/' },
      { '@type': 'ListItem', position: 2, name: 'Car Loan Calculator', item: 'https://malaysialoancalculator.com/car-loan-calculator' },
    ],
  };

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CarLoanCalculator />
    </SiteShell>
  );
}
