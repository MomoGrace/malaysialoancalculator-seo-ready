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
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'LoanCalc Malaysia',
    url: 'https://malaysialoancalculator.com',
    description: 'Free Malaysia loan calculator to estimate monthly repayment, total interest and total payment for car loans, home loans, personal loans in Malaysia.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://malaysialoancalculator.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LoanCalc Malaysia',
    url: 'https://malaysialoancalculator.com',
  };

  return (
    <SiteShell isHome>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HomePage />
    </SiteShell>
  );
}
