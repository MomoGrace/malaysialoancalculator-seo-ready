import type { Metadata } from 'next';
import SiteShell from '@/components/website/SiteShell';
import ValuationFeeCalculator from '@/components/website/calculators/ValuationFeeCalculator';

export const metadata: Metadata = {
  title: 'Valuation Fee Calculator Malaysia | LoanCalc Malaysia',
  description: 'Estimate Malaysian property valuation fees based on common fee scale examples for planning purposes.',
  alternates: { canonical: '/valuation-fee-calculator' },
  openGraph: {
    title: 'Valuation Fee Calculator Malaysia | LoanCalc Malaysia',
    description: 'Estimate Malaysian property valuation fees based on common fee scale examples for planning purposes.',
    url: '/valuation-fee-calculator',
  },
};

export default function Page() {
  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Valuation Fee Calculator Malaysia',
    url: 'https://malaysialoancalculator.com/valuation-fee-calculator',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'MYR',
    },
    description: 'Estimate Malaysian property valuation fees based on common fee scale examples for planning purposes.',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://malaysialoancalculator.com/' },
      { '@type': 'ListItem', position: 2, name: 'Valuation Fee Calculator', item: 'https://malaysialoancalculator.com/valuation-fee-calculator' },
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
      <ValuationFeeCalculator />
    </SiteShell>
  );
}
