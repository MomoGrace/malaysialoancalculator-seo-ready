import type { Metadata } from 'next';
import SiteShell from '@/components/website/SiteShell';
import ValuationFeeCalculator from '@/components/website/calculators/ValuationFeeCalculator';

export const metadata: Metadata = {
  title: 'Valuation Fee Calculator Malaysia | LoanCalc Malaysia',
  description: 'Estimate Malaysian property valuation fees based on common fee scale examples for planning purposes.',
  alternates: { canonical: '/valuation-fee-calculator' },
  openGraph: {
    title: 'Valuation Fee Calculator Malaysia | LoanCalc Malaysia',
    description: 'Estimate Malaysian property valuation fees based on common fee scale examples for planning purposes.',
    url: '/valuation-fee-calculator',
  },
};

export default function Page() {
  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Valuation Fee Calculator Malaysia',
    url: 'https://www.malaysialoancalculator.com/valuation-fee-calculator',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'MYR',
    },
    description: 'Estimate Malaysian property valuation fees based on common fee scale examples for planning purposes.',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.malaysialoancalculator.com/' },
      { '@type': 'ListItem', position: 2, name: 'Valuation Fee Calculator', item: 'https://www.malaysialoancalculator.com/valuation-fee-calculator' },
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
                name: 'When is a property valuation required?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "A property valuation is mandatory in Malaysia when applying for a mortgage or refinancing an existing home loan, as banks need an independent assessment of the property's market value before approving financing. It is also required when buying or selling property to ensure a fair transaction price, especially in hot areas like KLCC, Mont'Kiara, or Bangsar where prices can fluctuate rapidly. For Real Property Gains Tax (RPGT) purposes, LHDN requires a professional valuation to determine the capital gains on disposal of any property held for more than 3 years. Valuations are also necessary during probate proceedings to assess estate value for inheritance distribution, in divorce settlements where matrimonial assets must be divided, and in corporate acquisitions involving property transfers. Additionally, Syariah-compliant financing products such as Murabahah and Musyarakah Mutanaqisah typically require a fresh valuation at each financing stage.",
                },
              },
              {
                '@type': 'Question',
                name: 'Who pays for the property valuation fee?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "In Malaysia, the borrower or home buyer typically bears the cost of the property valuation fee when applying for a housing loan. The bank will appoint a valuer from their approved panel list, which includes registered firms regulated by the Board of Valuers, Appraisers, Estate Agents and Property Managers (BOVAEP) under the Valuers, Appraisers and Estate Agents Act 1981. Payment can be made directly to the valuer upon submission of the valuation request, or in some cases, the bank collects the fee upfront and remits it to the valuer on your behalf. For example, Maybank and CIMB typically require the valuation fee to be paid at their branch counter before the inspection is scheduled. Yes, you can also engage a registered valuer independently for personal purposes such as negotiation, litigation, or tax planning, though banks will not accept an externally commissioned report for loan approval and will still require their own panel valuer's assessment.",
                },
              },
              {
                '@type': 'Question',
                name: 'How long is a property valuation valid?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A property valuation report in Malaysia is generally valid for 3 to 6 months from the date of the physical inspection by the registered valuer. Most major banks including Public Bank, Hong Leong Bank, and RHB Bank follow a 3-month validity window for residential properties, while some may extend this to 6 months for commercial or industrial properties in stable market conditions. If the report expires before your loan is fully disbursed or the sale completes, the bank will require a fresh valuation at your additional cost. Market volatility plays a significant role here — during periods of rapid price appreciation such as the property boom in Greater Kuala Lumpur between 2020 and 2022, banks were stricter and sometimes insisted on revaluations within just 2 months. Properties with unique characteristics, such as leasehold land with fewer than 30 remaining years or heritage buildings in George Town, Penang, may also face shorter validity periods due to greater valuation uncertainty.',
                },
              },
              {
                '@type': 'Question',
                name: 'What factors affect property valuation in Malaysia?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Location is the single most influential factor in Malaysian property valuation, with properties within 1 km of an MRT or LRT station in the Klang Valley typically commanding a 10–20% premium over comparable units further away. The property type — whether it is a high-rise condominium, terrace house, semi-detached home, or bungalow — directly affects the valuation, with landed properties in established neighbourhoods like Petaling Jaya Section 7 or Subang Jaya SS2 generally appreciating more steadily than non-landed units. The property's size, age, and physical condition are carefully assessed, including renovations, fittings, and structural integrity. Proximity to amenities such as top-tier schools (e.g., Sri KDU, Taylor's International School), hospitals (e.g., Sunway Medical Centre), and shopping malls also boosts value significantly. A critical distinction is made between freehold and leasehold titles, with leasehold properties in Selangor typically valued 15–25% lower than equivalent freehold properties, and the remaining lease term — especially when below 60 years — can dramatically reduce the assessed market value.",
                },
              },
              {
                '@type': 'Question',
                name: 'Can I dispute a property valuation?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes, you can dispute a property valuation in Malaysia, though the process requires patience and proper documentation. If you believe the valuer has undervalued your property, the first step is to request a detailed copy of the valuation report from your bank and review the comparables (recent transacted prices of similar properties) used by the valuer. You can then engage an independent registered valuer to provide a second opinion, which typically costs between RM1,500 and RM3,000 for a standard residential property in the Klang Valley. Submit both reports to your bank's valuation department along with supporting evidence such as recent sale and purchase agreements of neighbouring units, renovation cost receipts, and updated property market data from NAPIC (National Property Information Centre). Common reasons for undervaluation in Malaysia include valuers using outdated comparables from 6–12 months prior, failing to account for major renovations, or overlooking leasehold upgrades to freehold in selected developments. Banks may accept the appeal and approve a higher margin of financing, or in rare cases, order a third-party review valuer to settle the discrepancy.",
                },
              },
              {
                '@type': 'Question',
                name: 'What types of properties require professional valuation?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Professional property valuation is required for virtually all property types in Malaysia, though the complexity and cost vary significantly. Residential properties including terrace houses, semi-detached units, bungalows, condominiums, and serviced apartments are the most commonly valued, with standard fees applying to these straightforward assessments. Commercial properties such as shop lots in areas like SS2 Petaling Jaya, office towers in Kuala Lumpur's Golden Triangle, and retail spaces in malls require more specialised valuation methods including income capitalisation and discounted cash flow analysis. Industrial properties — factories in Shah Alam or logistics hubs in Port Klang — demand valuers with expertise in the industrial sector to assess factors like ceiling height, loading capacity, and zoning regulations. Land valuations, whether for agricultural land in Johor or development land in Iskandar Puteri, are among the most complex and expensive to commission, as they require analysis of zoning approvals, density ratios, and infrastructure availability. Specialised properties such as hotels, theme parks, and petrol stations require even more advanced methodologies and typically cost significantly more than standard residential valuations.",
                },
              },
            ],
          }),
        }}
      />
      <ValuationFeeCalculator />
    </SiteShell>
  );
}
