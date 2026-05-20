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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://malaysialoancalculator.com/' },
      { '@type': 'ListItem', position: 2, name: 'Personal Loan Calculator', item: 'https://malaysialoancalculator.com/personal-loan-calculator' },
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
      <PersonalLoanCalculator />
    </SiteShell>
  );
}
