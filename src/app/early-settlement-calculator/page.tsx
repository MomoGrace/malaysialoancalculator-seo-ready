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
    url: 'https://www.malaysialoancalculator.com/early-settlement-calculator',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'MYR',
    },
    description: 'Estimate early loan settlement balance, interest savings and possible rebate for Malaysian loan planning.',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.malaysialoancalculator.com/' },
      { '@type': 'ListItem', position: 2, name: 'Early Settlement Calculator', item: 'https://www.malaysialoancalculator.com/early-settlement-calculator' },
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
                name: 'Is there a penalty for early loan settlement?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, most loan agreements in Malaysia include an early settlement penalty, though the specifics vary by loan type and bank. For home loans (mortgages), banks typically impose a lock-in period of 3 to 5 years during which an early settlement penalty of 2% to 3% of the outstanding loan amount applies. For example, if you have RM 400,000 remaining on your Maybank housing loan and settle within the 3-year lock-in, you could face a penalty of RM 8,000 to RM 12,000. Car loans governed by the Hire Purchase Act 1967 use the Rule of 78 formula to calculate a rebate on unearned interest, but banks may also impose an additional penalty fee of up to 20% of that rebate. Personal loans from banks like CIMB or RHB often carry a penalty of 1% to 3% of the outstanding balance if settled before the agreed tenure. Always check your loan agreement or request a settlement letter from your bank to confirm the exact penalty before making any early payment.',
                },
              },
              {
                '@type': 'Question',
                name: 'How is the early settlement rebate calculated for car loans?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Under the Malaysian Hire Purchase Act 1967, car loan rebates are calculated using the Rule of 78 formula, which front-loads interest payments in the earlier months of your loan. The formula works by assigning descending weight to each month — the first month gets the highest weight (equal to the total number of months), and the last month gets a weight of 1. For example, if you take a RM 80,000 car loan at 3.5% flat rate over 7 years (84 months), the total interest is RM 19,600, giving a total repayment of RM 99,600. If you settle after 3 years (36 months), the bank calculates how much of the total interest has already been "earned" using the weighted Rule of 78 proportions, then provides a rebate on the remaining unearned interest. The settlement figure you pay is the outstanding principal minus this rebate. It is important to note that because interest is front-loaded, you will have paid a disproportionate amount of interest in the first few years, meaning the rebate you receive may be smaller than you expect compared to a simple pro-rata calculation.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is early settlement always worth it financially?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Not necessarily — whether early settlement makes financial sense depends on several key factors including the penalty amount, remaining interest savings, and your opportunity cost. As a practical example, suppose you have RM 50,000 remaining on a 5-year personal loan at 6% reducing balance with 2 years left; if the bank charges a 2% early settlement penalty (RM 1,000), but you would save RM 3,200 in remaining interest, you still net a saving of RM 2,200. However, if that same RM 50,000 could earn you 4.5% annually in a Malaysian Fixed Deposit or ASB (Amanah Saham Bumiputera), you should compare the guaranteed interest earnings against the loan interest savings. You should also consider whether draining your savings for early settlement leaves you without an adequate emergency fund — financial advisors in Malaysia generally recommend keeping at least 3 to 6 months of expenses (roughly RM 15,000 to RM 30,000 for most households) in liquid savings. Always run the numbers specific to your loan using this calculator, and consult a licensed financial planner if you are unsure about the best course of action for your situation.",
                },
              },
              {
                '@type': 'Question',
                name: 'How do I request for early loan settlement?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "To initiate an early loan settlement in Malaysia, you should first contact your bank's loan servicing department — either by visiting the nearest branch, calling their hotline, or submitting a request through the bank's online portal or mobile app. Request an official early settlement letter that includes the exact settlement amount valid for a specific period, usually 7 to 14 days from the date of issuance. For major banks like Public Bank, Hong Leong, and AmBank, this letter will itemise the outstanding principal, the early settlement rebate (for hire purchase loans), any applicable penalty fees, and the total amount payable. You will typically need to provide your identification documents (NRIC or passport), the original loan agreement, and your vehicle registration card if it is a car loan. Once you receive the settlement letter, arrange payment via bank transfer, cashier's order, or cheque at the specified branch, and always obtain an official receipt and a final settlement confirmation letter from the bank for your records. Processing time for the release of your vehicle grant or property title deed after full payment usually takes an additional 2 to 4 weeks depending on the bank and whether there are any third-party charges registered on the asset.",
                },
              },
              {
                '@type': 'Question',
                name: 'Can I use EPF to settle my housing loan early?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes, Malaysian Employees Provident Fund (EPF) members can withdraw from Account 2 to partially or fully settle their housing loan under the EPF Members' Housing Withdrawal scheme. As of 2024, you are allowed to withdraw up to a maximum of 30% of the total balance in Account 2, or the remaining outstanding housing loan amount — whichever is lower. To apply, log in to your i-Akaun account on the KWSP website or mobile app, navigate to the \"Withdrawal\" section, select \"Housing Withdrawal,\" and submit your application along with the latest loan statement from your bank. The processing time is typically 5 to 7 working days, and the funds will be disbursed directly to your bank account or to the lending institution depending on the withdrawal type. It is worth noting that using EPF savings for loan settlement reduces your retirement fund, so you should weigh the interest savings on your mortgage (currently around 4.0% to 4.5% for most Malaysian home loans) against the potential long-term returns of your EPF savings (which have historically averaged 5% to 6% annual dividend). If you are unsure, consider making a partial settlement to reduce your loan tenure or monthly instalment while preserving some EPF savings for retirement.",
                },
              },
              {
                '@type': 'Question',
                name: 'What happens after I fully settle my loan?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'After you complete your early settlement payment, the bank will issue an official final settlement letter confirming that your loan has been fully discharged with zero outstanding balance. For car loans, the bank will release your vehicle registration card (geran kereta) and the original HP agreement to you, typically within 2 to 4 weeks after settlement — you must then bring these documents to Jabatan Pengangkutan Jalan (JPJ) to register the ownership transfer and have your name entered as the full owner. For housing loans, the bank\'s lawyer will prepare a Discharge of Charge document to remove the bank\'s legal claim on your property, and this must be stamped and registered with the Land Office (Pejabat Tanah) in your state; the full process can take 3 to 6 months and may involve legal fees of RM 1,500 to RM 3,000. Your loan account status will be updated in the Central Credit Reference Information System (CCRIS) maintained by Bank Negara Malaysia, which will reflect a fully settled loan — this positive record strengthens your credit profile for future loan applications. Most importantly, keep the settlement letter and all related documents in a safe place permanently, as you may need them as proof of ownership or for future financial transactions such as refinancing or selling the asset.',
                },
              },
            ],
          }),
        }}
      />
      <EarlySettlementCalculator />
    </SiteShell>
  );
}
