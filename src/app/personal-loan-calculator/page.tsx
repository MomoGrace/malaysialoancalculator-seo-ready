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
    url: 'https://www.malaysialoancalculator.com/personal-loan-calculator',
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
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.malaysialoancalculator.com/' },
      { '@type': 'ListItem', position: 2, name: 'Personal Loan Calculator', item: 'https://www.malaysialoancalculator.com/personal-loan-calculator' },
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is the maximum personal loan amount in Malaysia?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'In Malaysia, the maximum personal loan amount most commercial banks offer is RM 250,000 for conventional financing. Banks typically cap the loan at 8 to 10 times your monthly gross salary, so a person earning RM 5,000 a month may qualify for up to RM 50,000. Government servants and civil servants can often access higher amounts through cooperative loans such as those offered by Koperasi Angkatan Tentera (KAT) or Koperasi Serbaguna Malaysia (KSM), which can extend up to 15 times their monthly salary. Additionally, government employees may opt for Amanah Saham Bumiputera (ASB) financing, which can offer up to RM 300,000 or more depending on their ASB balance and eligibility. It is important to compare multiple banks like Maybank, CIMB, Public Bank, and RHB to find the best loan limit and interest rate for your income bracket.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do I need collateral for a personal loan?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most personal loans in Malaysia are unsecured, meaning you do not need to pledge any assets to obtain them. Banks rely primarily on your credit score, income level, and employment stability to determine your eligibility. However, secured personal loans are also available and typically offer significantly lower interest rates, sometimes as low as 3.5% per annum compared to 6-18% for unsecured loans. Common forms of collateral include fixed deposits placed with the same bank, unit trust investments, or even EPF Account 2 balances under certain schemes. If you have a substantial fixed deposit with Maybank or CIMB, for example, you can pledge it as security for a collateralised loan at a rate close to the deposit rate plus a small margin. Secured loans are a good option if you want to minimise interest costs and have assets you are comfortable pledging to the bank.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long does personal loan approval take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'For salaried employees working at established companies, personal loan approval in Malaysia typically takes 3 to 5 working days from the date of full document submission. Self-employed individuals, freelancers, and business owners may wait up to 10 to 14 working days as banks require additional verification of income, including business registration documents and audited financial statements. Major banks like Hong Leong Bank and Standard Chartered offer online pre-approval tools that can give you an indicative decision within minutes, though the final approval still requires document verification. To speed up your application, ensure you prepare all required documents beforehand: your MyKad (IC), 3 months of latest payslips, 6 months of bank statements, and your EPF statement. Applying through your existing bank where your salary is credited can also speed up the process since they already have your financial track record on file.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I settle my personal loan early?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes, all licensed banks in Malaysia allow early settlement of personal loans, but the financial implications vary depending on your loan agreement. Under Bank Negara Malaysia guidelines, banks are permitted to charge an early settlement penalty, which is typically calculated as 1% to 3% of the outstanding loan balance. Many banks impose a lock-in period of 6 to 12 months during which early settlement fees are higher, so it is worth checking your letter of offer carefully. For reducing balance loans, early settlement can yield meaningful interest savings because interest is calculated on the remaining principal. For example, settling a RM 50,000 reducing balance loan at 8% p.a. after 2 years of a 5-year tenure could save you several thousand ringgit in remaining interest. Some banks like Alliance Bank and Affin Bank waive the early settlement fee entirely after the lock-in period, so always clarify this with your loan officer before making a lump-sum payment.",
                },
              },
              {
                '@type': 'Question',
                name: 'What affects my personal loan interest rate?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Your personal loan interest rate in Malaysia is influenced by several key factors, with your income level and employment type being the most significant. Employees of government-linked companies (GLCs) and multinational corporations often receive preferential rates as low as 3.99% because of their perceived job stability. Your credit history plays an equally important role — a clean Central Credit Reference Information System (CCRIS) record and no adverse listings on CTOS will help you secure the lowest rates available. Banks also evaluate your Debt Service Ratio (DSR), which measures how much of your monthly income goes towards existing debt commitments; a DSR below 60% is generally preferred, with some banks accepting up to 70% for high-income earners. The loan amount and tenure also matter — larger loan amounts and shorter tenures often qualify for better rates because the bank earns more in absolute interest over a shorter period. Maintaining a good credit score, minimising outstanding debts, and applying during promotional periods can help you secure the most competitive rate.',
                },
              },
              {
                '@type': 'Question',
                name: 'What documents are needed for personal loan application in Malaysia?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The standard documents required for a personal loan application in Malaysia include your MyKad (identity card) or passport for non-citizens as the primary identification document. Salaried employees need to provide 3 months of latest payslips, 6 months of bank statements showing salary credits, and an EPF contribution statement which can be downloaded from the KWSP i-Akaun portal. Some banks may also request your latest LHDN BE (income tax) form or EA form as additional proof of income. For self-employed individuals and business owners, the requirements are more extensive and typically include your Business Registration Certificate (SSM), 6 to 12 months of business bank statements, the latest 2 years of audited profit and loss statements, and a copy of your LHDN BE or B form. Commission-based earners such as real estate agents and insurance agents should also prepare their commission statements and EPF contributions for at least the past 6 months. Having all documents ready in PDF format before applying online or visiting a branch can significantly reduce your approval waiting time.',
                },
              },
            ],
          }),
        }}
      />
      <PersonalLoanCalculator />
    </SiteShell>
  );
}
