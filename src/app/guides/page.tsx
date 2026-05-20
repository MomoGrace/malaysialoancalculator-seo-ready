import type { Metadata } from 'next';
import SiteShell from '@/components/website/SiteShell';
import GuidesPage from '@/components/website/GuidesPage';

export const metadata: Metadata = {
  title: 'Malaysia Loan Guides & Articles | LoanCalc Malaysia',
  description: 'Read practical Malaysia loan guides covering car loans, home loans, personal loans, DSR, legal fees, interest rates and repayment planning.',
  alternates: { canonical: '/guides' },
  openGraph: {
    title: 'Malaysia Loan Guides & Articles | LoanCalc Malaysia',
    description: 'Read practical Malaysia loan guides covering car loans, home loans, personal loans, DSR, legal fees, interest rates and repayment planning.',
    url: '/guides',
  },
};

export default function Page() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://malaysialoancalculator.com/' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://malaysialoancalculator.com/guides' },
    ],
  };

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <GuidesPage />
    </SiteShell>
  );
}
