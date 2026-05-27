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
    url: 'https://www.malaysialoancalculator.com/car-loan-calculator',
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
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.malaysialoancalculator.com/' },
      { '@type': 'ListItem', position: 2, name: 'Car Loan Calculator', item: 'https://www.malaysialoancalculator.com/car-loan-calculator' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How is car loan interest calculated in Malaysia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most car loans in Malaysia use the flat rate method under the Hire Purchase Act 1967. The total interest is calculated as: Loan Amount × Annual Interest Rate × Loan Tenure (years). Unlike reducing balance loans, the interest is charged on the original principal throughout the entire loan period, regardless of how much you have already repaid. For example, a RM 70,000 loan at 3.5% flat rate for 7 years would have total interest of RM 17,150, resulting in a monthly payment of approximately RM 1,035.12. The effective interest rate (internal rate of return) is approximately 1.8 to 2 times the stated flat rate, so a 3.5% flat rate is equivalent to roughly 6.3-7.0% effective rate. It is important to understand this difference when comparing car loan offers from different banks in Malaysia.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a good down payment for a car in Malaysia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The minimum down payment required for new cars in Malaysia is 10% of the on-the-road (OTR) price, as regulated by Bank Negara Malaysia. For used cars, the minimum is typically 20%. However, financial experts strongly recommend putting down at least 20-30% for new cars to reduce your monthly instalment burden and total interest cost. For instance, on a RM 100,000 car, a 10% down payment (RM 10,000) results in a RM 90,000 loan, while a 30% down payment (RM 30,000) reduces the loan to RM 70,000 — saving you thousands in interest over the loan period. A higher down payment also reduces the risk of negative equity, which is a common problem in Malaysia where car depreciation outpaces loan repayment, especially during the first 3-5 years of ownership.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the maximum car loan tenure in Malaysia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The maximum car loan tenure in Malaysia is 9 years (108 months), which is the maximum allowed under the Hire Purchase Act 1967. However, most financial advisors and Bank Negara Malaysia recommend keeping the tenure between 5 to 7 years. While a longer tenure of 8-9 years means lower monthly payments, it results in significantly higher total interest paid over the loan period. For example, a RM 80,000 loan at 3.5% flat rate over 5 years costs RM 14,000 in interest, while the same loan over 9 years costs RM 25,200 — an extra RM 11,200 just in interest. Additionally, cars in Malaysia typically lose 40-60% of their value within the first 5 years, so a 9-year loan often means you will still be paying off a car that has depreciated well below its outstanding loan balance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I get a car loan with bad credit in Malaysia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is possible to get a car loan with a less-than-ideal credit history, but it will be more challenging and expensive. Banks in Malaysia check your CCRIS (Central Credit Reference Information System) and CTOS reports before approving any loan application. If your record shows late payments, defaults, or high existing debt, banks may reject your application or offer a higher interest rate (typically 4-5% flat rate instead of the standard 2.5-3.5%). Some banks may also require a larger down payment of 30-40% to offset the perceived risk. Licensed money lenders and alternative financing companies may be more flexible with credit requirements, but they often charge significantly higher rates of 8-15% per annum. To improve your chances, settle any outstanding debts, ensure all existing loan payments are up to date for at least 6-12 months before applying, and consider getting a co-borrower or guarantor with a strong credit profile.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between fixed rate and variable rate car loans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In Malaysia, the vast majority of car loans use the flat rate method, where the interest is fixed throughout the loan tenure and calculated on the original loan amount. This means your monthly instalment remains the same from the first month to the last, making it easy to budget and plan your finances. Variable rate car loans are extremely rare in Malaysia and are more commonly associated with home loans. Under a variable rate structure, the interest rate fluctuates based on the Base Rate (BR) set by Bank Negara Malaysia, meaning your monthly payment could increase or decrease over time. For car financing, the flat rate method provides predictability and simplicity, which is why it remains the standard. When comparing car loans, focus on the flat rate offered and calculate the effective interest rate to get a true picture of the loan cost.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which banks offer the best car loan rates in Malaysia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Car loan interest rates in Malaysia vary depending on the bank, your credit profile, the car brand, and whether the car is new or used. As of 2025, major banks like Maybank, CIMB, Public Bank, and Hong Leong Bank typically offer flat rates ranging from 2.5% to 3.5% for new national cars (Proton, Perodua) and 2.8% to 4.0% for new non-national cars (Toyota, Honda, etc.). Used car loan rates are generally higher, ranging from 3.5% to 5.0%. Some banks offer promotional rates during festive seasons or year-end sales events that can go as low as 1.9-2.2% for selected models. It is highly recommended to compare offers from at least 3-4 banks before committing. You should also check if your preferred bank has a preferred panel dealer relationship, as this can sometimes unlock better rates. Always calculate the total repayment amount rather than just looking at the monthly instalment to get the best deal.',
        },
      },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CarLoanCalculator />
    </SiteShell>
  );
}
