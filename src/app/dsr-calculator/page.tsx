import type { Metadata } from 'next';
import SiteShell from '@/components/website/SiteShell';
import DSRCalculator from '@/components/website/calculators/DSRCalculator';

export const metadata: Metadata = {
  title: 'DSR Calculator Malaysia | Debt Service Ratio | LoanCalc Malaysia',
  description: 'Check your estimated debt service ratio for Malaysian loan planning before comparing bank offers.',
  alternates: { canonical: '/dsr-calculator' },
  openGraph: {
    title: 'DSR Calculator Malaysia | Debt Service Ratio | LoanCalc Malaysia',
    description: 'Check your estimated debt service ratio for Malaysian loan planning before comparing bank offers.',
    url: '/dsr-calculator',
  },
};

export default function Page() {
  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'DSR Calculator Malaysia',
    url: 'https://malaysialoancalculator.com/dsr-calculator',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'MYR',
    },
    description: 'Check your estimated debt service ratio for Malaysian loan planning before comparing bank offers.',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://malaysialoancalculator.com/' },
      { '@type': 'ListItem', position: 2, name: 'DSR Calculator', item: 'https://malaysialoancalculator.com/dsr-calculator' },
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
      <DSRCalculator />
    </SiteShell>
  );
}
