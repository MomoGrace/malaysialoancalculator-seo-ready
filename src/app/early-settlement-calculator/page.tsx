import type { Metadata } from 'next';
import SiteShell from '@/components/website/SiteShell';
import EarlySettlementCalculator from '@/components/website/calculators/EarlySettlementCalculator';

export const metadata: Metadata = {
  title: 'Early Loan Settlement Calculator Malaysia | LoanCalc Malaysia',
  description: 'Estimate early loan settlement balance, interest savings and possible rebate for Malaysian loan planning.',
  alternates: { canonical: '/early-settlement-calculator' },
  openGraph: {
    title: 'Early Loan Settlement Calculator Malaysia | LoanCalc Malaysia',
    description: 'Estimate early loan settlement balance, interest savings and possible rebate for Malaysian loan planning.',
    url: '/early-settlement-calculator',
  },
};

export default function Page() {
  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Early Settlement Calculator Malaysia',
    url: 'https://malaysialoancalculator.com/early-settlement-calculator',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'MYR',
    },
    description: 'Estimate early loan settlement balance, interest savings and possible rebate for Malaysian loan planning.',
  };

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <EarlySettlementCalculator />
    </SiteShell>
  );
}
