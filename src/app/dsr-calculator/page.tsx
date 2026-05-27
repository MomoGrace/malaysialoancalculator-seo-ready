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
    url: 'https://www.malaysialoancalculator.com/dsr-calculator',
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
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.malaysialoancalculator.com/' },
      { '@type': 'ListItem', position: 2, name: 'DSR Calculator', item: 'https://www.malaysialoancalculator.com/dsr-calculator' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is DSR (Debt Service Ratio) and why does it matter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DSR (Debt Service Ratio) is a key financial metric used by Malaysian banks to measure the percentage of your monthly income that goes towards servicing existing debt obligations. Bank Negara Malaysia (BNM) guidelines require all financial institutions to assess a borrower\'s DSR before approving any new credit facility, ensuring responsible lending practices and protecting consumers from over-indebtedness. Different banks in Malaysia set different DSR thresholds — for example, Maybank and CIMB typically cap housing loan DSR at 60-70%, while Public Bank may be slightly more conservative at around 55-65% depending on the applicant\'s income bracket. A lower DSR indicates stronger repayment capacity and significantly improves your chances of loan approval, often leading to better interest rate offers as well. If your DSR is too high, banks may reject your application outright or approve a smaller loan amount with higher interest rates, making it crucial to understand and manage your DSR before applying for any financing in Malaysia.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is DSR calculated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DSR is calculated using the formula: DSR = (Total Monthly Debt Commitments ÷ Monthly Net Income) × 100. For example, if your monthly net income is RM5,000 and your total monthly debt commitments (car loan RM800, credit card minimum payment RM500, personal loan RM300, and proposed housing loan RM1,200) add up to RM2,800, your DSR would be 56%. It is important to note that most Malaysian banks use net income (income after EPF, SOCSO, and income tax deductions) rather than gross income, though some may consider gross income for certain loan products. Debt commitments include all existing instalments such as car loans, personal loans, study loans, credit card minimum payments (typically 5% of outstanding balance or RM50, whichever is higher), hire purchase, and any overdraft facilities. Some banks like Maybank also factor in standing commitments such as rental payments, alimony, and even utility bills when assessing your full financial picture.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I improve my DSR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There are several practical strategies to improve your DSR in the Malaysian context. First, prioritise paying off high-interest debts such as credit card balances — clearing a RM10,000 credit card outstanding balance can reduce your minimum monthly commitment by RM500, instantly lowering your DSR. Second, explore ways to increase your income, such as taking on freelance work, requesting a salary increment, or declaring side income streams like e-commerce sales or rental income from a sublet property (with proper documentation). Third, reduce your number of active credit cards — having 5 credit cards with RM50 minimum payments each adds RM250 to your monthly commitments, so close unused cards before applying for a loan. Fourth, consider consolidating multiple debts into a single lower-interest personal loan, which can reduce your total monthly instalment amount — for instance, merging three personal loans with combined monthly payments of RM1,500 into one consolidation loan at RM1,100 saves you RM400 per month. Fifth, use your EPF Account 2 or Account 3 statements as proof of savings and financial discipline, as some banks like RHB and Hong Leong Bank may offer more favourable DSR assessments for applicants who can demonstrate strong EPF contributions and healthy savings history.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does DSR affect all types of loan applications?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, DSR impacts virtually every type of loan application in Malaysia, but the strictness of assessment varies significantly across loan products. Housing loans are the most strictly assessed, with banks typically requiring a DSR below 60-70% because of the large loan amounts and long repayment periods involved — for instance, a RM500,000 home loan over 30 years represents a significant long-term commitment. Car loans generally have slightly more relaxed DSR thresholds, with some banks accepting DSRs up to 70-75% since the loan tenure is shorter (typically 5-9 years) and the collateral (the vehicle) provides additional security for the bank. Personal loans and overdraft facilities are assessed on a case-by-case basis, with banks like Alliance Bank and AmBank sometimes approving applicants with DSRs up to 80% but at higher interest rates. Credit card applications use a different but related assessment — banks evaluate your existing credit utilisation and minimum payment burden, and if your total card minimum payments already consume a large portion of your income, new card applications may be declined or approved with very low credit limits (as low as RM2,000 instead of the typical RM5,000-10,000).',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a healthy DSR for loan approval in Malaysia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In Malaysia, a DSR of 30-40% is considered ideal and puts you in the strongest position for loan approval with the best interest rates — for example, with a RM6,000 monthly income and total debts of RM1,800, you sit at a comfortable 30% DSR. A DSR between 40-60% is still widely acceptable for most banks and loan types, though some premium banks like OCBC and Standard Chartered may offer slightly less competitive rates compared to applicants in the ideal range. Once your DSR crosses 60%, approvals become more challenging — banks like Maybank and CIMB may still approve your application but often impose stricter conditions such as requiring a guarantor, requesting additional collateral, or offering the loan at a higher interest rate (BLR + 1.5% instead of BLR + 0.8%). A DSR above 70% is considered high-risk by virtually all Malaysian banks, and your application is likely to be rejected unless you have exceptional circumstances such as a very high net worth, substantial fixed deposits with the bank, or a strong existing banking relationship. As a general rule, keeping your DSR below 50% gives you the most flexibility and negotiating power when applying for financing in Malaysia.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does CCRIS and CTOS affect my DSR and loan application?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CCRIS (Central Credit Reference Information System) and CTOS are the two main credit reporting systems used by Malaysian banks when evaluating your loan application, and both have a direct impact on how your DSR is perceived. CCRIS is maintained by Bank Negara Malaysia and provides a comprehensive record of all your credit facilities, outstanding balances, and monthly payment behaviour over the past 12 months — banks use this to verify the debt commitments you declare in your DSR calculation, and any discrepancies can cause immediate rejection. CTOS, operated by CTOS Data Systems Sdn Bhd, provides additional information including legal cases, bankruptcy records, and litigation history that may not appear in CCRIS. Negative records that can severely hurt your application include late payments (even 1-2 days late are recorded), dishonoured cheques, default judgments, and being listed under the Bankruptcy Act 1967 — for instance, having 3 or more late payment records in your CCRIS report within the past 12 months will likely result in rejection by major banks. To improve your credit profile before applying, request your free CCRIS report from BNM and your CTOS report from myCTOS.com, then ensure all outstanding debts are brought current, dispute any inaccurate records, and maintain at least 6 months of clean on-time payment history before submitting a new loan application.',
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
      <DSRCalculator />
    </SiteShell>
  );
}
