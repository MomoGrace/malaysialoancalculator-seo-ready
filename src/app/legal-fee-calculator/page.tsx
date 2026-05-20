import type { Metadata } from 'next';
import SiteShell from '@/components/website/SiteShell';
import LegalFeeCalculator from '@/components/website/calculators/LegalFeeCalculator';

export const metadata: Metadata = {
  title: 'Legal Fee & Stamp Duty Calculator Malaysia | LoanCalc Malaysia',
  description: 'Estimate legal fees and stamp duty for Malaysian property purchase and loan agreement planning.',
  alternates: { canonical: '/legal-fee-calculator' },
  openGraph: {
    title: 'Legal Fee & Stamp Duty Calculator Malaysia | LoanCalc Malaysia',
    description: 'Estimate legal fees and stamp duty for Malaysian property purchase and loan agreement planning.',
    url: '/legal-fee-calculator',
  },
};

export default function Page() {
  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Legal Fee Calculator Malaysia',
    url: 'https://malaysialoancalculator.com/legal-fee-calculator',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'MYR',
    },
    description: 'Estimate legal fees and stamp duty for Malaysian property purchase and loan agreement planning.',
  };

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <LegalFeeCalculator />
    </SiteShell>
  );
}
