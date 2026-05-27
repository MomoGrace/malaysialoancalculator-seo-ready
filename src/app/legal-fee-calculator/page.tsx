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
    url: 'https://www.malaysialoancalculator.com/legal-fee-calculator',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'MYR',
    },
    description: 'Estimate legal fees and stamp duty for Malaysian property purchase and loan agreement planning.',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.malaysialoancalculator.com/' },
      { '@type': 'ListItem', position: 2, name: 'Legal Fee Calculator', item: 'https://www.malaysialoancalculator.com/legal-fee-calculator' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is MOT stamp duty and how is it calculated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MOT (Memorandum of Transfer) stamp duty is a mandatory government tax levied on every property ownership transfer in Malaysia, collected by the Inland Revenue Board (LHDN). The stamp duty follows a tiered rate structure: 1% on the first RM1,000,000 of the property price, and 2% on the remaining amount above RM1,000,000. For example, if you purchase a property at RM1,500,000, you would pay RM10,000 for the first RM1,000,000 (1%) plus RM10,000 for the remaining RM500,000 (2%), totalling RM20,000 in MOT stamp duty. Under the 2024 Budget, first-time home buyers enjoy a full exemption on the 1% MOT stamp duty for properties priced up to RM1,000,000, which can result in savings of up to RM10,000. This exemption applies to Malaysian citizens purchasing their first residential property and is a significant incentive to encourage homeownership. The stamp duty must be paid within 30 days of signing the Sale and Purchase Agreement, or penalties of up to 100% of the duty may be imposed.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much are legal fees for SPA and loan agreement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Legal fees in Malaysia are governed by the prescribed scale set by the Malaysian Bar Council, meaning they are standardised across all law firms in the country. For a RM500,000 property, the SPA legal fee is calculated as RM1,500 (for the first RM150,000 at 1%) plus RM2,450 (for the remaining RM350,000 at 0.7%), totalling approximately RM3,950. Additionally, the loan agreement attracts separate legal fees based on the loan amount — for a 90% margin of RM450,000, this would come to approximately RM3,600. In total, for a RM500,000 property with a 90% loan, you should budget around RM7,000 to RM8,000 just for professional legal fees covering both the SPA and the loan agreement. These fees are payable to your appointed solicitor and are typically payable in stages: 50% upon signing the SPA and the remaining 50% upon completion of the transaction. It is advisable to confirm the exact fee schedule with your lawyer before engaging their services.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between legal fees and stamp duty?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Legal fees and stamp duty are two distinct mandatory costs in any Malaysian property transaction, and it is important not to confuse them. Legal fees are the professional charges paid to your lawyer for preparing and processing documents, conducting title searches, liaising with banks, and ensuring the transaction complies with all legal requirements. Stamp duty, on the other hand, is a government tax collected by LHDN that must be stamped on legal instruments such as the Memorandum of Transfer, the Sale and Purchase Agreement, and the loan agreement before they become legally valid. While legal fees go directly to your solicitor\'s firm, stamp duty is remitted to the government and is non-recoverable. On top of both, you should also budget for disbursement fees — these are out-of-pocket expenses your lawyer incurs on your behalf, including land search fees, registration fees at the Land Office, postage, and courier charges, typically ranging from RM1,500 to RM3,000 depending on the property. All three categories — legal fees, stamp duty, and disbursements — are unavoidable and should be factored into your total property purchase budget.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who pays for legal fees and stamp duty in property transactions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In a typical Malaysian property transaction, the buyer bears the majority of the costs, including MOT stamp duty, SPA legal fees, loan agreement legal fees, and most disbursement expenses. The seller, however, is responsible for discharging the existing loan and may need to pay their own lawyer for handling the redemption of the property title and preparing the necessary discharge documents. Additionally, the seller is liable for the Real Property Gains Tax (RPGT) if the property is sold within the holding period — as of 2024, the RPGT rate for individuals is 15% if disposed of within the first 3 years, 10% in the 4th year, 5% in the 5th year, and 0% after the 6th year for Malaysian citizens. For companies, the RPGT rate is 20% for the first 3 years, 15% in the 4th and 5th years, and 10% thereafter. While the default arrangement places most costs on the buyer, the exact allocation can be negotiated between buyer and seller and reflected in the SPA terms. It is recommended to clarify the cost distribution with your lawyer before signing any agreement to avoid unexpected expenses later in the process.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are there any stamp duty exemptions for first-time home buyers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the Malaysian government has introduced several stamp duty exemptions to support first-time home buyers, particularly through the 2024 and 2025 Budget initiatives. For Malaysian citizens purchasing their first residential property, there is a full stamp duty exemption on the instrument of transfer (MOT) for homes priced up to RM500,000, which can save buyers up to RM5,000 in stamp duty costs. For properties priced between RM500,001 and RM1,000,000, a 75% stamp duty exemption on the instrument of transfer applies, offering potential savings of between RM3,750 and RM7,500. The 2024 Budget also extended the full exemption on the loan agreement stamp duty for first homes valued up to RM500,000, meaning buyers can save an additional RM1,250 to RM2,250 depending on their loan margin. These exemptions are available for Sale and Purchase Agreements signed between 1 January 2024 and 31 December 2025, and the property must be for residential use — commercial properties and vacant land do not qualify. To claim these exemptions, ensure your lawyer submits the exemption application to LHDN together with the relevant stamp duty documents within the stipulated timeframe.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I negotiate or reduce legal fees when buying property?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Legal fees for property transactions in Malaysia follow the scale prescribed by the Malaysian Bar Council under the Solicitors\' Remuneration Order, which means the base professional fees are non-negotiable and standardised across all licensed law firms. For example, whether you engage a firm in Kuala Lumpur or Penang, the SPA legal fee for a RM500,000 property must be calculated using the same scale. However, while the professional fees are fixed, the disbursement component can vary between firms as it covers out-of-pocket expenses such as land office registration fees, courier charges, travel costs, and photocopying fees. It is advisable to request a detailed written quote from at least two or three law firms before making your decision, comparing not just the headline legal fees but also the estimated disbursements and any miscellaneous charges. Some firms may bundle services more competitively or offer more transparent fee structures. Be cautious of any firm offering legal fees significantly below the Bar Council scale, as this may indicate non-compliance or hidden costs. Ultimately, choosing a lawyer with strong experience in property conveyancing can save you time, stress, and potential complications that could cost far more than any minor savings on fees.',
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
      <LegalFeeCalculator />
    </SiteShell>
  );
}
