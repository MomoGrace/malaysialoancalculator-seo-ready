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
    url: 'https://www.malaysialoancalculator.com/home-loan-calculator',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'MYR',
    },
    description: 'Estimate Malaysian home loan monthly repayment, total interest and housing loan costs using reducing balance examples.',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.malaysialoancalculator.com/' },
      { '@type': 'ListItem', position: 2, name: 'Home Loan Calculator', item: 'https://www.malaysialoancalculator.com/home-loan-calculator' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How is home loan interest calculated in Malaysia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most Malaysian home loans use the reducing balance method, where interest is charged on the remaining principal after each monthly repayment. The standard formula is M = P × [r(1+r)^n] / [(1+r)^n - 1], where P is the loan amount, r is the monthly interest rate (annual rate divided by 12), and n is the total number of monthly instalments. Since 2015, Bank Negara Malaysia (BNM) replaced the Base Lending Rate (BLR) with the Base Rate (BR) system, which gives banks more flexibility in setting their reference rates. For example, if you borrow RM 450,000 at 4.5% over 30 years, your monthly repayment would be approximately RM 2,280, and the total interest paid over the full tenure would be around RM 370,800. As you make more repayments, a larger portion of each instalment goes towards reducing the principal rather than paying interest, making early repayment a powerful strategy to save on overall costs.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the current home loan interest rate in Malaysia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'As of 2025, home loan interest rates in Malaysia typically range from 4.0% to 4.8% for conventional term loans, depending on the bank and borrower profile. Major banks like Maybank, CIMB, Public Bank, and Hong Leong Bank offer competitive packages, with some providing promotional fixed rates for the first 3 to 5 years before switching to a variable rate pegged to the bank\'s Base Rate. Islamic home financing products such as BBA (Bai Bithaman Ajil) and Murabahah offer comparable profit rates, generally between 4.1% and 4.9%, and are increasingly popular due to their Shariah-compliant structure.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the maximum home loan tenure in Malaysia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The maximum home loan tenure in Malaysia is generally 35 years, or until the borrower reaches age 65 to 70 (whichever comes first), as set by most lending institutions following BNM guidelines. Some banks may cap the age at 60 for self-employed applicants. It is also mandatory to have MRTA (Mortgage Reducing Term Assurance) or MRTT (Mortgage Reducing Term Takaful) coverage, which protects your family by settling the outstanding loan if something happens to you.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much down payment do I need for a house?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Under Bank Negara Malaysia\'s current guidelines, first-time homebuyers can purchase properties priced up to RM 700,000 with a minimum 10% down payment, while properties above that threshold require at least 20%. For second and subsequent home purchases, banks generally require a minimum down payment of 20% to 30%. Malaysian government servants can benefit from the LPPSA housing loan scheme, which offers loans up to RM 600,000 with very favourable rates. Additionally, you can withdraw from your EPF Account 2 to supplement your down payment.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the difference between conventional and Islamic home loans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Conventional home loans in Malaysia operate as term loans where you borrow money from the bank and repay it with interest over the tenure, with rates pegged to the bank\'s Base Rate. Islamic home financing does not involve interest (riba) and instead uses Shariah-compliant contracts. The most common is the BBA (Bai Bithaman Ajil), where the bank purchases the property and sells it to you at a markup. The Murabahah (Cost-Plus Sale) structure works similarly but is often used for completed properties, while the Diminishing Musyarakah (MMP) is a co-ownership model where you and the bank jointly own the property and you gradually buy the bank\'s share over time.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I refinance my home loan in Malaysia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, refinancing your home loan is a common practice in Malaysia and can be a smart financial move if market rates have dropped significantly since you first took out your loan. Many homeowners refinance from a higher rate of, say, 4.7% to a new rate of 4.2%, which on a RM 400,000 loan over 25 years could save approximately RM 150 per month and over RM 45,000 in total interest. However, you should carefully consider the costs involved, including legal fees (typically RM 2,000 to RM 4,000), stamp duty on the new loan agreement, valuation fees (around RM 1,500 to RM 3,000), and potential early settlement penalties from your existing bank (usually 1% to 3% of the outstanding amount).'
        }
      }
    ]
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeLoanCalculator />
    </SiteShell>
  );
}
