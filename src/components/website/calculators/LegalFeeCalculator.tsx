'use client';

import { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useCalculatorAction } from '@/hooks/use-calculator-action';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calculator, Info, FileText } from 'lucide-react';

function formatCurrency(value: number): string {
  return 'RM ' + value.toLocaleString('en-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function LegalFeeCalculator() {
  const [propertyPrice, setPropertyPrice] = useState<string>('500000');
  const [result, setResult] = useState<{
    motStampDuty: number;
    agreementStampDuty: number;
    spaLegalFees: number;
    loanLegalFees: number;
    disbursement: number;
    total: number;
    breakdown: { label: string; amount: number }[];
  } | null>(null);

  const { resultRef, justCalculated, runCalculation } = useCalculatorAction();

  const handleCalculate = useCallback(() => {
    runCalculation(() => {
    const price = parseFloat(propertyPrice) || 0;
    if (price <= 0) return false;

    // MOT Stamp Duty: 1% for first RM1M, 2% above RM1M
    let motStampDuty: number;
    if (price <= 1000000) {
      motStampDuty = price * 0.01;
    } else {
      motStampDuty = 1000000 * 0.01 + (price - 1000000) * 0.02;
    }

    // Loan amount estimate (90% of property price)
    const loanAmount = price * 0.9;

    // Agreement stamp duty ~0.5% on loan amount
    const agreementStampDuty = loanAmount * 0.005;

    // SPA Legal Fees (scale)
    let spaLegalFees: number;
    if (price <= 150000) {
      spaLegalFees = Math.max(price * 0.01, 200);
    } else if (price <= 850000) {
      spaLegalFees = 1500 + (price - 150000) * 0.007;
    } else if (price <= 2000000) {
      spaLegalFees = 1500 + 700000 * 0.007 + (price - 850000) * 0.006;
    } else {
      spaLegalFees = 1500 + 700000 * 0.007 + 1150000 * 0.006 + (price - 2000000) * 0.005;
    }

    // Loan Agreement Legal Fees
    let loanLegalFees: number;
    if (loanAmount <= 150000) {
      loanLegalFees = Math.max(loanAmount * 0.01, 200);
    } else if (loanAmount <= 850000) {
      loanLegalFees = 1500 + (loanAmount - 150000) * 0.007;
    } else if (loanAmount <= 2000000) {
      loanLegalFees = 1500 + 700000 * 0.007 + (loanAmount - 850000) * 0.006;
    } else {
      loanLegalFees = 1500 + 700000 * 0.007 + 1150000 * 0.006 + (loanAmount - 2000000) * 0.005;
    }

    // Disbursement estimate
    const disbursement = 1500 + price * 0.001;

    const total = motStampDuty + agreementStampDuty + spaLegalFees + loanLegalFees + disbursement;

    setResult({
      motStampDuty,
      agreementStampDuty,
      spaLegalFees,
      loanLegalFees,
      disbursement,
      total,
      breakdown: [
        { label: 'MOT Stamp Duty', amount: motStampDuty },
        { label: 'Agreement Stamp Duty', amount: agreementStampDuty },
        { label: 'SPA Legal Fees', amount: spaLegalFees },
        { label: 'Loan Agreement Legal Fees', amount: loanLegalFees },
        { label: 'Disbursement Estimate', amount: disbursement },
      ],
    });

      return true;
    });
  }, [propertyPrice, runCalculation]);


  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-0">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <span>/</span>
          <span className="text-foreground font-medium">Legal Fee Calculator</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex items-start sm:items-center gap-3 leading-tight">
          <FileText className="w-7 h-7 sm:w-8 sm:h-8 text-primary shrink-0" />
          Legal Fee &amp; Stamp Duty Calculator Malaysia
        </h1>
        <p className="text-muted-foreground">
          Estimate the legal fees and stamp duty costs when buying a property in Malaysia. Plan your budget with a complete breakdown of all costs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calculator className="w-5 h-5 text-primary" />
              Legal Fee Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="prop-price">Property Purchase Price (RM)</Label>
              <Input
                id="prop-price"
                type="number"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(e.target.value)}
                placeholder="e.g. 500000"
                min="0"
              />
            </div>

            <Button onClick={handleCalculate} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Calculator className="w-4 h-4 mr-2" />
              {justCalculated ? 'Updated' : 'Calculate Legal Fees'}
            </Button>

            <div className="bg-muted/50 rounded-lg p-3 text-xs text-muted-foreground space-y-1">
              <p><strong>Note:</strong> Loan amount is estimated at 90% of purchase price.</p>
              <p>Actual fees may vary depending on the lawyer and specific circumstances.</p>
            </div>
          </CardContent>
        </Card>

        <div ref={resultRef} className="space-y-4 scroll-mt-20">
          {result ? (
            <Card className="shadow-sm">
              <CardContent className="pt-6 space-y-4">
                <div className="bg-primary/5 rounded-lg p-4 text-center">
                  <p className="text-sm text-muted-foreground mb-1">Total Estimated Legal Costs</p>
                  <p className="text-3xl font-bold text-primary">{formatCurrency(result.total)}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Cost Breakdown</h4>
                  {result.breakdown.map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-2 border-b last:border-0">
                      <span className="text-sm">{item.label}</span>
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
                  <FileText className="w-12 h-12 mx-auto mb-2 opacity-30" />
                  <p className="text-sm">Enter property price and click Calculate</p>
                </div>
              </CardContent>
            </Card>
          )}

          <Alert className="bg-muted/50">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-xs text-muted-foreground">
              These figures are estimates based on standard Malaysian legal fee scales. Actual costs may vary. Always get a quote from your lawyer before proceeding.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="q1">
            <AccordionTrigger>What is MOT stamp duty and how is it calculated?</AccordionTrigger>
            <AccordionContent>
              MOT (Memorandum of Transfer) stamp duty is a mandatory government tax levied on every property ownership transfer in Malaysia, collected by the Inland Revenue Board (LHDN). The stamp duty follows a tiered rate structure: 1% on the first RM1,000,000 of the property price, and 2% on the remaining amount above RM1,000,000. For example, if you purchase a property at RM1,500,000, you would pay RM10,000 for the first RM1,000,000 (1%) plus RM10,000 for the remaining RM500,000 (2%), totalling RM20,000 in MOT stamp duty. Under the 2024 Budget, first-time home buyers enjoy a full exemption on the 1% MOT stamp duty for properties priced up to RM1,000,000, which can result in savings of up to RM10,000. This exemption applies to Malaysian citizens purchasing their first residential property and is a significant incentive to encourage homeownership. The stamp duty must be paid within 30 days of signing the Sale and Purchase Agreement, or penalties of up to 100% of the duty may be imposed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>How much are legal fees for SPA and loan agreement?</AccordionTrigger>
            <AccordionContent>
              Legal fees in Malaysia are governed by the prescribed scale set by the Malaysian Bar Council, meaning they are standardised across all law firms in the country. For a RM500,000 property, the SPA legal fee is calculated as RM1,500 (for the first RM150,000 at 1%) plus RM2,450 (for the remaining RM350,000 at 0.7%), totalling approximately RM3,950. Additionally, the loan agreement attracts separate legal fees based on the loan amount — for a 90% margin of RM450,000, this would come to approximately RM3,600. In total, for a RM500,000 property with a 90% loan, you should budget around RM7,000 to RM8,000 just for professional legal fees covering both the SPA and the loan agreement. These fees are payable to your appointed solicitor and are typically payable in stages: 50% upon signing the SPA and the remaining 50% upon completion of the transaction. It is advisable to confirm the exact fee schedule with your lawyer before engaging their services.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>What is the difference between legal fees and stamp duty?</AccordionTrigger>
            <AccordionContent>
              Legal fees and stamp duty are two distinct mandatory costs in any Malaysian property transaction, and it is important not to confuse them. Legal fees are the professional charges paid to your lawyer for preparing and processing documents, conducting title searches, liaising with banks, and ensuring the transaction complies with all legal requirements. Stamp duty, on the other hand, is a government tax collected by LHDN that must be stamped on legal instruments such as the Memorandum of Transfer, the Sale and Purchase Agreement, and the loan agreement before they become legally valid. While legal fees go directly to your solicitor's firm, stamp duty is remitted to the government and is non-recoverable. On top of both, you should also budget for disbursement fees — these are out-of-pocket expenses your lawyer incurs on your behalf, including land search fees, registration fees at the Land Office, postage, and courier charges, typically ranging from RM1,500 to RM3,000 depending on the property. All three categories — legal fees, stamp duty, and disbursements — are unavoidable and should be factored into your total property purchase budget.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q4">
            <AccordionTrigger>Who pays for legal fees and stamp duty in property transactions?</AccordionTrigger>
            <AccordionContent>
              In a typical Malaysian property transaction, the buyer bears the majority of the costs, including MOT stamp duty, SPA legal fees, loan agreement legal fees, and most disbursement expenses. The seller, however, is responsible for discharging the existing loan and may need to pay their own lawyer for handling the redemption of the property title and preparing the necessary discharge documents. Additionally, the seller is liable for the Real Property Gains Tax (RPGT) if the property is sold within the holding period — as of 2024, the RPGT rate for individuals is 15% if disposed of within the first 3 years, 10% in the 4th year, 5% in the 5th year, and 0% after the 6th year for Malaysian citizens. For companies, the RPGT rate is 20% for the first 3 years, 15% in the 4th and 5th years, and 10% thereafter. While the default arrangement places most costs on the buyer, the exact allocation can be negotiated between buyer and seller and reflected in the SPA terms. It is recommended to clarify the cost distribution with your lawyer before signing any agreement to avoid unexpected expenses later in the process.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q5">
            <AccordionTrigger>Are there any stamp duty exemptions for first-time home buyers?</AccordionTrigger>
            <AccordionContent>
              Yes, the Malaysian government has introduced several stamp duty exemptions to support first-time home buyers, particularly through the 2024 and 2025 Budget initiatives. For Malaysian citizens purchasing their first residential property, there is a full stamp duty exemption on the instrument of transfer (MOT) for homes priced up to RM500,000, which can save buyers up to RM5,000 in stamp duty costs. For properties priced between RM500,001 and RM1,000,000, a 75% stamp duty exemption on the instrument of transfer applies, offering potential savings of between RM3,750 and RM7,500. The 2024 Budget also extended the full exemption on the loan agreement stamp duty for first homes valued up to RM500,000, meaning buyers can save an additional RM1,250 to RM2,250 depending on their loan margin. These exemptions are available for Sale and Purchase Agreements signed between 1 January 2024 and 31 December 2025, and the property must be for residential use — commercial properties and vacant land do not qualify. To claim these exemptions, ensure your lawyer submits the exemption application to LHDN together with the relevant stamp duty documents within the stipulated timeframe.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q6">
            <AccordionTrigger>Can I negotiate or reduce legal fees when buying property?</AccordionTrigger>
            <AccordionContent>
              Legal fees for property transactions in Malaysia follow the scale prescribed by the Malaysian Bar Council under the Solicitors' Remuneration Order, which means the base professional fees are non-negotiable and standardised across all licensed law firms. For example, whether you engage a firm in Kuala Lumpur or Penang, the SPA legal fee for a RM500,000 property must be calculated using the same scale. However, while the professional fees are fixed, the disbursement component can vary between firms as it covers out-of-pocket expenses such as land office registration fees, courier charges, travel costs, and photocopying fees. It is advisable to request a detailed written quote from at least two or three law firms before making your decision, comparing not just the headline legal fees but also the estimated disbursements and any miscellaneous charges. Some firms may bundle services more competitively or offer more transparent fee structures. Be cautious of any firm offering legal fees significantly below the Bar Council scale, as this may indicate non-compliance or hidden costs. Ultimately, choosing a lawyer with strong experience in property conveyancing can save you time, stress, and potential complications that could cost far more than any minor savings on fees.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
