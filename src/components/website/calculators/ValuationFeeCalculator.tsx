'use client';

import { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useCalculatorAction } from '@/hooks/use-calculator-action';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calculator, Info, Building } from 'lucide-react';

function formatCurrency(value: number): string {
  return 'RM ' + value.toLocaleString('en-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function ValuationFeeCalculator() {
  const [propertyValue, setPropertyValue] = useState<string>('500000');
  const [result, setResult] = useState<{
    fee: number;
    breakdown: { range: string; rate: string; amount: number }[];
  } | null>(null);

  const { resultRef, justCalculated, runCalculation } = useCalculatorAction();

  const handleCalculate = useCallback(() => {
    runCalculation(() => {
    const value = parseFloat(propertyValue) || 0;
    if (value <= 0) return false;

    const breakdown: { range: string; rate: string; amount: number }[] = [];

    if (value <= 100000) {
      const fee = Math.max(value * 0.0025, 200);
      breakdown.push({ range: 'First RM100,000', rate: '0.25%', amount: fee });
    } else {
      const first = 100000 * 0.0025;
      breakdown.push({ range: 'First RM100,000', rate: '0.25%', amount: first });

      if (value <= 600000) {
        const second = (value - 100000) * 0.002;
        breakdown.push({ range: `Next RM${(value - 100000).toLocaleString()}`, rate: '0.20%', amount: second });
      } else {
        const second = 500000 * 0.002;
        breakdown.push({ range: 'Next RM500,000', rate: '0.20%', amount: second });

        if (value <= 2600000) {
          const third = (value - 600000) * 0.00167;
          breakdown.push({ range: `Next RM${(value - 600000).toLocaleString()}`, rate: '0.167%', amount: third });
        } else {
          const third = 2000000 * 0.00167;
          breakdown.push({ range: 'Next RM2,000,000', rate: '0.167%', amount: third });

          const fourth = (value - 2600000) * 0.0015;
          breakdown.push({ range: `Above RM2,600,000`, rate: '0.15%', amount: fourth });
        }
      }
    }

    const totalFee = Math.max(breakdown.reduce((sum, b) => sum + b.amount, 0), 200);

    setResult({ fee: totalFee, breakdown });

      return true;
    });
  }, [propertyValue, runCalculation]);


  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-0">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <span>/</span>
          <span className="text-foreground font-medium">Valuation Fee Calculator</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex items-start sm:items-center gap-3 leading-tight">
          <Building className="w-7 h-7 sm:w-8 sm:h-8 text-primary shrink-0" />
          Valuation Fee Calculator Malaysia
        </h1>
        <p className="text-muted-foreground">
          Calculate the property valuation fee based on the Malaysian valuation fee scale. Understand the costs of property valuation for loan applications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calculator className="w-5 h-5 text-primary" />
              Valuation Fee Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="val-value">Property Value (RM)</Label>
              <Input
                id="val-value"
                type="number"
                value={propertyValue}
                onChange={(e) => setPropertyValue(e.target.value)}
                placeholder="e.g. 500000"
                min="0"
              />
            </div>

            <Button onClick={handleCalculate} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Calculator className="w-4 h-4 mr-2" />
              {justCalculated ? 'Updated' : 'Calculate Valuation Fee'}
            </Button>

            <div className="bg-muted/50 rounded-lg p-3 text-xs text-muted-foreground">
              <p><strong>Malaysian Valuation Fee Scale:</strong></p>
              <ul className="mt-1 space-y-0.5 list-disc list-inside">
                <li>First RM100,000: 0.25%</li>
                <li>Next RM500,000: 0.20%</li>
                <li>Next RM2,000,000: 0.167%</li>
                <li>Above RM2,600,000: 0.15%</li>
                <li>Minimum fee: RM200</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div ref={resultRef} className="space-y-4 scroll-mt-20">
          {result ? (
            <Card className="shadow-sm">
              <CardContent className="pt-6 space-y-4">
                <div className="bg-primary/5 rounded-lg p-4 text-center">
                  <p className="text-sm text-muted-foreground mb-1">Estimated Valuation Fee</p>
                  <p className="text-3xl font-bold text-primary">{formatCurrency(result.fee)}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Fee Breakdown</h4>
                  {result.breakdown.map((item) => (
                    <div key={item.range} className="flex justify-between items-center py-2 border-b last:border-0">
                      <div>
                        <span className="text-sm">{item.range}</span>
                        <span className="text-xs text-muted-foreground ml-2">({item.rate})</span>
                      </div>
                      <span className="text-sm font-semibold">{formatCurrency(item.amount)}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-sm">
              <CardContent className="flex items-center justify-center h-64 text-muted-foreground">
                <div className="text-center">
                  <Building className="w-12 h-12 mx-auto mb-2 opacity-30" />
                  <p className="text-sm">Enter property value and click Calculate</p>
                </div>
              </CardContent>
            </Card>
          )}

          <Alert className="bg-muted/50">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-xs text-muted-foreground">
              Valuation fees are typically required for property loan applications. The actual fee may vary slightly depending on the valuer. This calculator provides an estimate based on standard scales.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">
          <details className="group border rounded-lg">
            <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">When is a property valuation required?</summary>
            <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
              <p>A property valuation is mandatory in Malaysia when applying for a mortgage or refinancing an existing home loan, as banks need an independent assessment of the property&apos;s market value before approving financing. It is also required when buying or selling property to ensure a fair transaction price, especially in hot areas like KLCC, Mont&apos;Kiara, or Bangsar where prices can fluctuate rapidly. For Real Property Gains Tax (RPGT) purposes, LHDN requires a professional valuation to determine the capital gains on disposal of any property held for more than 3 years. Valuations are also necessary during probate proceedings to assess estate value for inheritance distribution, in divorce settlements where matrimonial assets must be divided, and in corporate acquisitions involving property transfers. Additionally, Syariah-compliant financing products such as Murabahah and Musyarakah Mutanaqisah typically require a fresh valuation at each financing stage.</p>
            </div>
          </details>
          <details className="group border rounded-lg">
            <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">Who pays for the property valuation fee?</summary>
            <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
              <p>In Malaysia, the borrower or home buyer typically bears the cost of the property valuation fee when applying for a housing loan. The bank will appoint a valuer from their approved panel list, which includes registered firms regulated by the Board of Valuers, Appraisers, Estate Agents and Property Managers (BOVAEP) under the Valuers, Appraisers and Estate Agents Act 1981. Payment can be made directly to the valuer upon submission of the valuation request, or in some cases, the bank collects the fee upfront and remits it to the valuer on your behalf. For example, Maybank and CIMB typically require the valuation fee to be paid at their branch counter before the inspection is scheduled. Yes, you can also engage a registered valuer independently for personal purposes such as negotiation, litigation, or tax planning, though banks will not accept an externally commissioned report for loan approval and will still require their own panel valuer&apos;s assessment.</p>
            </div>
          </details>
          <details className="group border rounded-lg">
            <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">How long is a property valuation valid?</summary>
            <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
              <p>A property valuation report in Malaysia is generally valid for 3 to 6 months from the date of the physical inspection by the registered valuer. Most major banks including Public Bank, Hong Leong Bank, and RHB Bank follow a 3-month validity window for residential properties, while some may extend this to 6 months for commercial or industrial properties in stable market conditions. If the report expires before your loan is fully disbursed or the sale completes, the bank will require a fresh valuation at your additional cost. Market volatility plays a significant role here — during periods of rapid price appreciation such as the property boom in Greater Kuala Lumpur between 2020 and 2022, banks were stricter and sometimes insisted on revaluations within just 2 months. Properties with unique characteristics, such as leasehold land with fewer than 30 remaining years or heritage buildings in George Town, Penang, may also face shorter validity periods due to greater valuation uncertainty.</p>
            </div>
          </details>
          <details className="group border rounded-lg">
            <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">What factors affect property valuation in Malaysia?</summary>
            <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
              <p>Location is the single most influential factor in Malaysian property valuation, with properties within 1 km of an MRT or LRT station in the Klang Valley typically commanding a 10–20% premium over comparable units further away. The property type — whether it is a high-rise condominium, terrace house, semi-detached home, or bungalow — directly affects the valuation, with landed properties in established neighbourhoods like Petaling Jaya Section 7 or Subang Jaya SS2 generally appreciating more steadily than non-landed units. The property&apos;s size, age, and physical condition are carefully assessed, including renovations, fittings, and structural integrity. Proximity to amenities such as top-tier schools (e.g., Sri KDU, Taylor&apos;s International School), hospitals (e.g., Sunway Medical Centre), and shopping malls also boosts value significantly. A critical distinction is made between freehold and leasehold titles, with leasehold properties in Selangor typically valued 15–25% lower than equivalent freehold properties, and the remaining lease term — especially when below 60 years — can dramatically reduce the assessed market value.</p>
            </div>
          </details>
          <details className="group border rounded-lg">
            <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">Can I dispute a property valuation?</summary>
            <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
              <p>Yes, you can dispute a property valuation in Malaysia, though the process requires patience and proper documentation. If you believe the valuer has undervalued your property, the first step is to request a detailed copy of the valuation report from your bank and review the comparables (recent transacted prices of similar properties) used by the valuer. You can then engage an independent registered valuer to provide a second opinion, which typically costs between RM1,500 and RM3,000 for a standard residential property in the Klang Valley. Submit both reports to your bank&apos;s valuation department along with supporting evidence such as recent sale and purchase agreements of neighbouring units, renovation cost receipts, and updated property market data from NAPIC (National Property Information Centre). Common reasons for undervaluation in Malaysia include valuers using outdated comparables from 6–12 months prior, failing to account for major renovations, or overlooking leasehold upgrades to freehold in selected developments. Banks may accept the appeal and approve a higher margin of financing, or in rare cases, order a third-party review valuer to settle the discrepancy.</p>
            </div>
          </details>
          <details className="group border rounded-lg">
            <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">What types of properties require professional valuation?</summary>
            <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
              <p>Professional property valuation is required for virtually all property types in Malaysia, though the complexity and cost vary significantly. Residential properties including terrace houses, semi-detached units, bungalows, condominiums, and serviced apartments are the most commonly valued, with standard fees applying to these straightforward assessments. Commercial properties such as shop lots in areas like SS2 Petaling Jaya, office towers in Kuala Lumpur&apos;s Golden Triangle, and retail spaces in malls require more specialised valuation methods including income capitalisation and discounted cash flow analysis. Industrial properties — factories in Shah Alam or logistics hubs in Port Klang — demand valuers with expertise in the industrial sector to assess factors like ceiling height, loading capacity, and zoning regulations. Land valuations, whether for agricultural land in Johor or development land in Iskandar Puteri, are among the most complex and expensive to commission, as they require analysis of zoning approvals, density ratios, and infrastructure availability. Specialised properties such as hotels, theme parks, and petrol stations require even more advanced methodologies and typically cost significantly more than standard residential valuations.</p>
            </div>
          </details>
        </div>
      </div>
      <div className="mt-10 space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-3">How This Calculator Works</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            This valuation fee calculator estimates the property valuation fee based on commonly referenced fee scales used in Malaysian property transactions. Property valuation fees are typically charged by licensed valuers and are usually required when obtaining a housing loan, refinancing, or transferring property ownership. The fee is calculated on a sliding scale based on the property market value, with higher-value properties attracting a lower percentage fee. This calculator provides approximate figures to help you budget for valuation costs before approaching a bank or valuer.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3">How to Use This Calculator</h2>
          <p className="text-muted-foreground leading-relaxed">
            Enter the property market value or purchase price in Ringgit Malaysia (RM). The calculator will estimate the valuation fee based on the commonly referenced sliding scale. Note that for loan applications, banks will typically appoint their own panel valuer, and the fee will be charged to you. For refinancing, a new valuation is almost always required. Click Calculate to see the estimated valuation fee.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3">Common Mistakes When Estimating Valuation Fees</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
            <li>Confusing valuation fee with legal fees — these are separate charges by different professionals (valuer vs lawyer).</li>
            <li>Using the wrong property value — the fee is based on market value, which may differ from the purchase price.</li>
            <li>Not budgeting for valuation when refinancing — a new valuation is almost always required, adding RM 1,500 to RM 3,000 in costs.</li>
            <li>Assuming all valuers charge the same rate — fees can vary between valuers, and banks may only accept valuations from their panel valuers.</li>
            <li>Forgetting that valuation fees are non-refundable even if the loan application is rejected.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3">Important Limitations</h2>
          <p className="text-muted-foreground leading-relaxed">
            This calculator provides rough estimates only based on commonly referenced fee scales. Actual valuation fees charged by licensed valuers may differ depending on the valuer, property type, location, and complexity of the valuation. This tool does not account for any additional charges for special reports, strata valuations, or urgent valuation requests. Always obtain a formal fee quotation from a licensed valuer before engaging their services. For bank loan purposes, the bank will typically arrange the valuation through their panel valuer and inform you of the exact fee.
          </p>
        </div>
      </div>
    </div>
  );
}
