'use client';

import { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useCalculatorAction } from '@/hooks/use-calculator-action';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calculator, Info, TrendingDown } from 'lucide-react';

function formatCurrency(value: number): string {
  return 'RM ' + value.toLocaleString('en-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function EarlySettlementCalculator() {
  const [loanAmount, setLoanAmount] = useState<string>('100000');
  const [interestRate, setInterestRate] = useState<string>('4.5');
  const [tenure, setTenure] = useState<string>('7');
  const [monthsPaid, setMonthsPaid] = useState<string>('36');
  const [calcType, setCalcType] = useState<'reducing' | 'flat'>('reducing');
  const [result, setResult] = useState<{
    remainingBalance: number;
    totalPaid: number;
    totalInterestPaid: number;
    totalInterestSaved: number;
    interestRemaining: number;
    originalTotalInterest: number;
  } | null>(null);

  const { resultRef, justCalculated, runCalculation } = useCalculatorAction();

  const handleCalculate = useCallback(() => {
    runCalculation(() => {
    const principal = parseFloat(loanAmount) || 0;
    const rate = parseFloat(interestRate) || 0;
    const years = parseFloat(tenure) || 0;
    const paid = parseInt(monthsPaid) || 0;

    if (principal <= 0 || rate <= 0 || years <= 0 || paid <= 0) return false;

    const totalMonths = years * 12;

    if (calcType === 'reducing') {
      const r = rate / 100 / 12;
      const monthly = principal * (r * Math.pow(1 + r, totalMonths)) / (Math.pow(1 + r, totalMonths) - 1);
      const originalTotalInterest = monthly * totalMonths - principal;

      // Calculate remaining balance after `paid` months
      let remaining = principal;
      let totalInterestSoFar = 0;
      const actualPaid = Math.min(paid, totalMonths);

      for (let i = 0; i < actualPaid; i++) {
        const interestForMonth = remaining * r;
        totalInterestSoFar += interestForMonth;
        const principalForMonth = monthly - interestForMonth;
        remaining -= principalForMonth;
      }

      if (remaining < 0) remaining = 0;

      setResult({
        remainingBalance: remaining,
        totalPaid: monthly * actualPaid,
        totalInterestPaid: totalInterestSoFar,
        totalInterestSaved: originalTotalInterest - totalInterestSoFar,
        interestRemaining: originalTotalInterest - totalInterestSoFar,
        originalTotalInterest,
      });
    } else {
      // Flat rate
      const totalInterest = principal * (rate / 100) * years;
      const totalRepayment = principal + totalInterest;
      const monthly = totalRepayment / totalMonths;
      const originalTotalInterest = totalInterest;

      const totalPaid = monthly * paid;
      const totalInterestPaid = (totalInterest / totalMonths) * paid;
      const remaining = totalRepayment - totalPaid;

      if (remaining < 0) return false;

      setResult({
        remainingBalance: remaining,
        totalPaid,
        totalInterestPaid,
        totalInterestSaved: totalInterest - totalInterestPaid,
        interestRemaining: totalInterest - totalInterestPaid,
        originalTotalInterest,
      });
    }

      return true;
    });
  }, [loanAmount, interestRate, tenure, monthsPaid, calcType, runCalculation]);


  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-0">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <span>/</span>
          <span className="text-foreground font-medium">Early Settlement Calculator</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex items-start sm:items-center gap-3 leading-tight">
          <TrendingDown className="w-7 h-7 sm:w-8 sm:h-8 text-primary shrink-0" />
          Early Loan Settlement Calculator Malaysia
        </h1>
        <p className="text-muted-foreground">
          Calculate how much you can save by settling your loan early. See your remaining balance and potential interest savings.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calculator className="w-5 h-5 text-primary" />
              Early Settlement Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="es-amount">Original Loan Amount (RM)</Label>
              <Input id="es-amount" type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} placeholder="e.g. 100000" min="0" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="es-rate">Annual Interest Rate (%)</Label>
              <Input id="es-rate" type="number" step="0.01" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} placeholder="e.g. 4.5" min="0" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="es-tenure">Original Tenure (Years)</Label>
              <Input id="es-tenure" type="number" value={tenure} onChange={(e) => setTenure(e.target.value)} placeholder="e.g. 7" min="1" max="35" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="es-paid">Months Already Paid</Label>
              <Input id="es-paid" type="number" value={monthsPaid} onChange={(e) => setMonthsPaid(e.target.value)} placeholder="e.g. 36" min="1" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="es-type">Calculation Type</Label>
              <Select value={calcType} onValueChange={(v) => setCalcType(v as 'reducing' | 'flat')}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="reducing">Reducing Balance</SelectItem>
                  <SelectItem value="flat">Flat Rate</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleCalculate} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Calculator className="w-4 h-4 mr-2" />
              {justCalculated ? 'Updated' : 'Calculate Early Settlement'}
            </Button>
          </CardContent>
        </Card>

        <div ref={resultRef} className="space-y-4 scroll-mt-20">
          {result ? (
            <>
              <Card className="shadow-sm">
                <CardContent className="pt-6 space-y-4">
                  <div className="bg-primary/5 rounded-lg p-4 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Remaining Balance</p>
                    <p className="text-3xl font-bold text-primary">{formatCurrency(result.remainingBalance)}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-muted rounded-lg p-3 text-center">
                      <p className="text-xs text-muted-foreground mb-1">Total Paid So Far</p>
                      <p className="text-sm font-semibold">{formatCurrency(result.totalPaid)}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 text-center">
                      <p className="text-xs text-muted-foreground mb-1">Interest Saved</p>
                      <p className="text-sm font-semibold text-green-600">{formatCurrency(result.totalInterestSaved)}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-muted rounded-lg p-3 text-center">
                      <p className="text-xs text-muted-foreground mb-1">Interest Paid</p>
                      <p className="text-sm font-semibold text-amber-600">{formatCurrency(result.totalInterestPaid)}</p>
                    </div>
                    <div className="bg-muted rounded-lg p-3 text-center">
                      <p className="text-xs text-muted-foreground mb-1">Original Total Interest</p>
                      <p className="text-sm font-semibold">{formatCurrency(result.originalTotalInterest)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Alert className="bg-green-50 border-green-200">
                <TrendingDown className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-xs text-green-700">
                  By settling early, you could save up to <strong>{formatCurrency(result.totalInterestSaved)}</strong> in interest charges. Note: Some banks may charge an early settlement penalty.
                </AlertDescription>
              </Alert>
            </>
          ) : (
            <Card className="shadow-sm">
              <CardContent className="flex items-center justify-center h-64 text-muted-foreground">
                <div className="text-center">
                  <TrendingDown className="w-12 h-12 mx-auto mb-2 opacity-30" />
                  <p className="text-sm">Enter loan details and click Calculate</p>
                </div>
              </CardContent>
            </Card>
          )}

          <Alert className="bg-muted/50">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-xs text-muted-foreground">
              Early settlement penalties may apply depending on your loan agreement. Check with your bank for specific terms and any applicable fees.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">
          <details className="group border rounded-lg">
            <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">Is there a penalty for early loan settlement?</summary>
            <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
              <p>Yes, most loan agreements in Malaysia include an early settlement penalty, though the specifics vary by loan type and bank. For home loans (mortgages), banks typically impose a lock-in period of 3 to 5 years during which an early settlement penalty of 2% to 3% of the outstanding loan amount applies. For example, if you have RM 400,000 remaining on your Maybank housing loan and settle within the 3-year lock-in, you could face a penalty of RM 8,000 to RM 12,000. Car loans governed by the Hire Purchase Act 1967 use the Rule of 78 formula to calculate a rebate on unearned interest, but banks may also impose an additional penalty fee of up to 20% of that rebate. Personal loans from banks like CIMB or RHB often carry a penalty of 1% to 3% of the outstanding balance if settled before the agreed tenure. Always check your loan agreement or request a settlement letter from your bank to confirm the exact penalty before making any early payment.</p>
            </div>
          </details>
          <details className="group border rounded-lg">
            <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">How is the early settlement rebate calculated for car loans?</summary>
            <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
              <p>Under the Malaysian Hire Purchase Act 1967, car loan rebates are calculated using the Rule of 78 formula, which front-loads interest payments in the earlier months of your loan. The formula works by assigning descending weight to each month — the first month gets the highest weight (equal to the total number of months), and the last month gets a weight of 1. For example, if you take a RM 80,000 car loan at 3.5% flat rate over 7 years (84 months), the total interest is RM 19,600, giving a total repayment of RM 99,600. If you settle after 3 years (36 months), the bank calculates how much of the total interest has already been "earned" using the weighted Rule of 78 proportions, then provides a rebate on the remaining unearned interest. The settlement figure you pay is the outstanding principal minus this rebate. It is important to note that because interest is front-loaded, you will have paid a disproportionate amount of interest in the first few years, meaning the rebate you receive may be smaller than you expect compared to a simple pro-rata calculation.</p>
            </div>
          </details>
          <details className="group border rounded-lg">
            <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">Is early settlement always worth it financially?</summary>
            <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
              <p>Not necessarily — whether early settlement makes financial sense depends on several key factors including the penalty amount, remaining interest savings, and your opportunity cost. As a practical example, suppose you have RM 50,000 remaining on a 5-year personal loan at 6% reducing balance with 2 years left; if the bank charges a 2% early settlement penalty (RM 1,000), but you would save RM 3,200 in remaining interest, you still net a saving of RM 2,200. However, if that same RM 50,000 could earn you 4.5% annually in a Malaysian Fixed Deposit or ASB (Amanah Saham Bumiputera), you should compare the guaranteed interest earnings against the loan interest savings. You should also consider whether draining your savings for early settlement leaves you without an adequate emergency fund — financial advisors in Malaysia generally recommend keeping at least 3 to 6 months of expenses (roughly RM 15,000 to RM 30,000 for most households) in liquid savings. Always run the numbers specific to your loan using this calculator, and consult a licensed financial planner if you are unsure about the best course of action for your situation.</p>
            </div>
          </details>
          <details className="group border rounded-lg">
            <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">How do I request for early loan settlement?</summary>
            <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
              <p>To initiate an early loan settlement in Malaysia, you should first contact your bank's loan servicing department — either by visiting the nearest branch, calling their hotline, or submitting a request through the bank's online portal or mobile app. Request an official early settlement letter that includes the exact settlement amount valid for a specific period, usually 7 to 14 days from the date of issuance. For major banks like Public Bank, Hong Leong, and AmBank, this letter will itemise the outstanding principal, the early settlement rebate (for hire purchase loans), any applicable penalty fees, and the total amount payable. You will typically need to provide your identification documents (NRIC or passport), the original loan agreement, and your vehicle registration card if it is a car loan. Once you receive the settlement letter, arrange payment via bank transfer, cashier's order, or cheque at the specified branch, and always obtain an official receipt and a final settlement confirmation letter from the bank for your records. Processing time for the release of your vehicle grant or property title deed after full payment usually takes an additional 2 to 4 weeks depending on the bank and whether there are any third-party charges registered on the asset.</p>
            </div>
          </details>
          <details className="group border rounded-lg">
            <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">Can I use EPF to settle my housing loan early?</summary>
            <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
              <p>Yes, Malaysian Employees Provident Fund (EPF) members can withdraw from Account 2 to partially or fully settle their housing loan under the EPF Members' Housing Withdrawal scheme. As of 2024, you are allowed to withdraw up to a maximum of 30% of the total balance in Account 2, or the remaining outstanding housing loan amount — whichever is lower. To apply, log in to your i-Akaun account on the KWSP website or mobile app, navigate to the "Withdrawal" section, select "Housing Withdrawal," and submit your application along with the latest loan statement from your bank. The processing time is typically 5 to 7 working days, and the funds will be disbursed directly to your bank account or to the lending institution depending on the withdrawal type. It is worth noting that using EPF savings for loan settlement reduces your retirement fund, so you should weigh the interest savings on your mortgage (currently around 4.0% to 4.5% for most Malaysian home loans) against the potential long-term returns of your EPF savings (which have historically averaged 5% to 6% annual dividend). If you are unsure, consider making a partial settlement to reduce your loan tenure or monthly instalment while preserving some EPF savings for retirement.</p>
            </div>
          </details>
          <details className="group border rounded-lg">
            <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">What happens after I fully settle my loan?</summary>
            <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
              <p>After you complete your early settlement payment, the bank will issue an official final settlement letter confirming that your loan has been fully discharged with zero outstanding balance. For car loans, the bank will release your vehicle registration card (geran kereta) and the original HP agreement to you, typically within 2 to 4 weeks after settlement — you must then bring these documents to Jabatan Pengangkutan Jalan (JPJ) to register the ownership transfer and have your name entered as the full owner. For housing loans, the bank's lawyer will prepare a Discharge of Charge document to remove the bank's legal claim on your property, and this must be stamped and registered with the Land Office (Pejabat Tanah) in your state; the full process can take 3 to 6 months and may involve legal fees of RM 1,500 to RM 3,000. Your loan account status will be updated in the Central Credit Reference Information System (CCRIS) maintained by Bank Negara Malaysia, which will reflect a fully settled loan — this positive record strengthens your credit profile for future loan applications. Most importantly, keep the settlement letter and all related documents in a safe place permanently, as you may need them as proof of ownership or for future financial transactions such as refinancing or selling the asset.</p>
            </div>
          </details>
        </div>
      </div>
      <div className="mt-10 space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-3">How This Calculator Works</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            This early settlement calculator estimates the outstanding balance and potential interest savings if you pay off your loan before the end of its tenure. It uses the Rule of 78 (also known as the Sum of Digits method) for flat rate loans, which is the standard method used by Malaysian banks for hire purchase early settlement calculations. For reducing balance loans, the outstanding balance is simply the remaining principal. The calculator helps you understand whether early settlement makes financial sense after accounting for any early settlement penalties charged by your bank.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3">How to Use This Calculator</h2>
          <p className="text-muted-foreground leading-relaxed">
            Enter your original loan amount, the annual interest rate, the original loan tenure in years, and the number of months you have already been paying. The calculator will estimate the outstanding balance, the interest you have already paid, the remaining interest, and the potential savings from settling early. Compare the savings against any early settlement penalty (typically 1-3% of the outstanding balance) to determine if early settlement is worthwhile.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3">Common Mistakes When Considering Early Settlement</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
            <li>Forgetting to account for early settlement penalties — most Malaysian banks charge 1-3% of the outstanding balance.</li>
            <li>Not considering opportunity cost — the lump sum used for early settlement could potentially earn returns if invested elsewhere.</li>
            <li>Assuming all banks use the same early settlement formula — different banks may apply different methods and penalty rates.</li>
            <li>Settling too early on a flat rate loan — the Rule of 78 means more interest is front-loaded, so early settlement saves proportionally more interest in the first half of the tenure.</li>
            <li>Not getting a formal settlement quote from your bank — the actual settlement figure may differ from estimates due to rounding, fees, and administrative charges.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3">Important Limitations</h2>
          <p className="text-muted-foreground leading-relaxed">
            This calculator provides estimates only and does not reflect the exact settlement figure that your bank will quote. Actual early settlement amounts may include additional fees, rounding adjustments, and administrative charges not accounted for here. The Rule of 78 calculation is an approximation and banks may use slightly different methods. Always request a formal early settlement letter from your bank before making any prepayment decision.
          </p>
        </div>
      </div>
    </div>
  );
}
