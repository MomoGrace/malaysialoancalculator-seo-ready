'use client';

import { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useCalculatorAction } from '@/hooks/use-calculator-action';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calculator, Car, Info } from 'lucide-react';

function formatCurrency(value: number): string {
  return 'RM ' + value.toLocaleString('en-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function CarLoanCalculator() {
  const [carPrice, setCarPrice] = useState<string>('80000');
  const [downPayment, setDownPayment] = useState<string>('10000');
  const [interestRate, setInterestRate] = useState<string>('3.5');
  const [tenure, setTenure] = useState<string>('7');
  const [result, setResult] = useState<{
    loanAmount: number;
    monthlyPayment: number;
    totalInterest: number;
    totalRepayment: number;
  } | null>(null);

  const { resultRef, justCalculated, runCalculation } = useCalculatorAction();

  const handleCalculate = useCallback(() => {
    runCalculation(() => {
    const price = parseFloat(carPrice) || 0;
    const dp = parseFloat(downPayment) || 0;
    const rate = parseFloat(interestRate) || 0;
    const years = parseFloat(tenure) || 0;

    const loanAmt = price - dp;
    if (loanAmt <= 0 || rate <= 0 || years <= 0) return false;

    const totalInterest = loanAmt * (rate / 100) * years;
    const totalRepayment = loanAmt + totalInterest;
    const monthly = totalRepayment / (years * 12);

    setResult({
      loanAmount: loanAmt,
      monthlyPayment: monthly,
      totalInterest,
      totalRepayment,
    });

      return true;
    });
  }, [carPrice, downPayment, interestRate, tenure, runCalculation]);


  const principalPercent = result ? (result.loanAmount / result.totalRepayment) * 100 : 50;
  const interestPercent = result ? (result.totalInterest / result.totalRepayment) * 100 : 50;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-0">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <span>/</span>
          <span className="text-foreground font-medium">Car Loan Calculator</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex items-start sm:items-center gap-3 leading-tight">
          <Car className="w-7 h-7 sm:w-8 sm:h-8 text-primary shrink-0" />
          Car Loan Calculator Malaysia
        </h1>
        <p className="text-muted-foreground">
          Calculate your monthly car loan instalment, total interest, and total repayment using the flat rate method commonly used in Malaysia.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Calculator */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calculator className="w-5 h-5 text-primary" />
              Car Loan Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="car-price">Car Price (RM)</Label>
              <Input
                id="car-price"
                type="number"
                value={carPrice}
                onChange={(e) => setCarPrice(e.target.value)}
                placeholder="e.g. 80000"
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="down-payment">Down Payment (RM)</Label>
              <Input
                id="down-payment"
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
                placeholder="e.g. 10000"
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="car-rate">Flat Interest Rate (% per annum)</Label>
              <Input
                id="car-rate"
                type="number"
                step="0.01"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                placeholder="e.g. 3.5"
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="car-tenure">Loan Tenure (Years, 1-9)</Label>
              <Input
                id="car-tenure"
                type="number"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
                placeholder="e.g. 7"
                min="1"
                max="9"
              />
            </div>

            <Button onClick={handleCalculate} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Calculator className="w-4 h-4 mr-2" />
              {justCalculated ? 'Updated' : 'Calculate Car Loan'}
            </Button>
          </CardContent>
        </Card>

        {/* Results */}
        <div ref={resultRef} className="space-y-4 scroll-mt-20">
          {result ? (
            <Card className="shadow-sm">
              <CardContent className="pt-6 space-y-4">
                <div className="bg-primary/5 rounded-lg p-4 text-center">
                  <p className="text-sm text-muted-foreground mb-1">Monthly Instalment</p>
                  <p className="text-3xl font-bold text-primary">{formatCurrency(result.monthlyPayment)}</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Loan Amount</p>
                    <p className="text-sm font-semibold">{formatCurrency(result.loanAmount)}</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Total Interest</p>
                    <p className="text-sm font-semibold text-amber-600">{formatCurrency(result.totalInterest)}</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Total Repayment</p>
                    <p className="text-sm font-semibold">{formatCurrency(result.totalRepayment)}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Principal vs Interest</p>
                  <div className="h-6 bg-muted rounded-full overflow-hidden flex">
                    <div
                      className="bg-primary h-full transition-all duration-500"
                      style={{ width: `${principalPercent}%` }}
                    />
                    <div
                      className="bg-amber-400 h-full transition-all duration-500"
                      style={{ width: `${interestPercent}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 bg-primary rounded-sm inline-block" />
                      Principal {principalPercent.toFixed(1)}%
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 bg-amber-400 rounded-sm inline-block" />
                      Interest {interestPercent.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-sm">
              <CardContent className="flex items-center justify-center h-64 text-muted-foreground">
                <div className="text-center">
                  <Car className="w-12 h-12 mx-auto mb-2 opacity-30" />
                  <p className="text-sm">Enter car details and click Calculate</p>
                </div>
              </CardContent>
            </Card>
          )}

          <Alert className="bg-muted/50">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-xs text-muted-foreground">
              Car loans in Malaysia typically use the flat rate method. The effective interest rate is approximately 1.8-2x the flat rate. This calculator is for estimation purposes only.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">
          <details className="group border rounded-lg">
            <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">How is car loan interest calculated in Malaysia?</summary>
            <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
              <p>Most car loans in Malaysia use the flat rate method under the Hire Purchase Act 1967. The total interest is calculated as: Loan Amount × Annual Interest Rate × Loan Tenure (years). Unlike reducing balance loans, the interest is charged on the original principal throughout the entire loan period, regardless of how much you have already repaid. For example, a RM 70,000 loan at 3.5% flat rate for 7 years would have total interest of RM 17,150, resulting in a monthly payment of approximately RM 1,035.12. The effective interest rate (internal rate of return) is approximately 1.8 to 2 times the stated flat rate, so a 3.5% flat rate is equivalent to roughly 6.3-7.0% effective rate. It is important to understand this difference when comparing car loan offers from different banks in Malaysia.</p>
            </div>
          </details>
          <details className="group border rounded-lg">
            <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">What is a good down payment for a car in Malaysia?</summary>
            <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
              <p>The minimum down payment required for new cars in Malaysia is 10% of the on-the-road (OTR) price, as regulated by Bank Negara Malaysia. For used cars, the minimum is typically 20%. However, financial experts strongly recommend putting down at least 20-30% for new cars to reduce your monthly instalment burden and total interest cost. For instance, on a RM 100,000 car, a 10% down payment (RM 10,000) results in a RM 90,000 loan, while a 30% down payment (RM 30,000) reduces the loan to RM 70,000 — saving you thousands in interest over the loan period. A higher down payment also reduces the risk of negative equity, which is a common problem in Malaysia where car depreciation outpaces loan repayment, especially during the first 3-5 years of ownership.</p>
            </div>
          </details>
          <details className="group border rounded-lg">
            <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">What is the maximum car loan tenure in Malaysia?</summary>
            <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
              <p>The maximum car loan tenure in Malaysia is 9 years (108 months), which is the maximum allowed under the Hire Purchase Act 1967. However, most financial advisors and Bank Negara Malaysia recommend keeping the tenure between 5 to 7 years. While a longer tenure of 8-9 years means lower monthly payments, it results in significantly higher total interest paid over the loan period. For example, a RM 80,000 loan at 3.5% flat rate over 5 years costs RM 14,000 in interest, while the same loan over 9 years costs RM 25,200 — an extra RM 11,200 just in interest. Additionally, cars in Malaysia typically lose 40-60% of their value within the first 5 years, so a 9-year loan often means you will still be paying off a car that has depreciated well below its outstanding loan balance.</p>
            </div>
          </details>
          <details className="group border rounded-lg">
            <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">Can I get a car loan with bad credit in Malaysia?</summary>
            <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
              <p>It is possible to get a car loan with a less-than-ideal credit history, but it will be more challenging and expensive. Banks in Malaysia check your CCRIS (Central Credit Reference Information System) and CTOS reports before approving any loan application. If your record shows late payments, defaults, or high existing debt, banks may reject your application or offer a higher interest rate (typically 4-5% flat rate instead of the standard 2.5-3.5%). Some banks may also require a larger down payment of 30-40% to offset the perceived risk. Licensed money lenders and alternative financing companies may be more flexible with credit requirements, but they often charge significantly higher rates of 8-15% per annum. To improve your chances, settle any outstanding debts, ensure all existing loan payments are up to date for at least 6-12 months before applying, and consider getting a co-borrower or guarantor with a strong credit profile.</p>
            </div>
          </details>
          <details className="group border rounded-lg">
            <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">What is the difference between fixed rate and variable rate car loans?</summary>
            <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
              <p>In Malaysia, the vast majority of car loans use the flat rate method, where the interest is fixed throughout the loan tenure and calculated on the original loan amount. This means your monthly instalment remains the same from the first month to the last, making it easy to budget and plan your finances. Variable rate car loans are extremely rare in Malaysia and are more commonly associated with home loans. Under a variable rate structure, the interest rate fluctuates based on the Base Rate (BR) set by Bank Negara Malaysia, meaning your monthly payment could increase or decrease over time. For car financing, the flat rate method provides predictability and simplicity, which is why it remains the standard. When comparing car loans, focus on the flat rate offered and calculate the effective interest rate to get a true picture of the loan cost.</p>
            </div>
          </details>
          <details className="group border rounded-lg">
            <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">Which banks offer the best car loan rates in Malaysia?</summary>
            <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
              <p>Car loan interest rates in Malaysia vary depending on the bank, your credit profile, the car brand, and whether the car is new or used. As of 2025, major banks like Maybank, CIMB, Public Bank, and Hong Leong Bank typically offer flat rates ranging from 2.5% to 3.5% for new national cars (Proton, Perodua) and 2.8% to 4.0% for new non-national cars (Toyota, Honda, etc.). Used car loan rates are generally higher, ranging from 3.5% to 5.0%. Some banks offer promotional rates during festive seasons or year-end sales events that can go as low as 1.9-2.2% for selected models. It is highly recommended to compare offers from at least 3-4 banks before committing. You should also check if your preferred bank has a preferred panel dealer relationship, as this can sometimes unlock better rates. Always calculate the total repayment amount rather than just looking at the monthly instalment to get the best deal.</p>
            </div>
          </details>
        </div>
      </div>

      <div className="mt-10 space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-3">How This Calculator Works</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            This car loan calculator uses the flat rate method, which is the standard calculation method for hire purchase (HP) car loans in Malaysia under the Hire Purchase Act 1967. Under the flat rate method, interest is calculated on the original loan amount throughout the entire tenure, regardless of how much principal has been repaid. The formula is: Total Interest = Loan Amount × Annual Flat Rate × Tenure (years). The monthly instalment is then: (Loan Amount + Total Interest) ÷ (Tenure × 12).
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For example, a RM 70,000 loan at 3.5% flat rate for 7 years produces total interest of RM 17,150. The monthly instalment would be RM (70,000 + 17,150) ÷ 84 = RM 1,035.12. Note that the effective interest rate is approximately 1.8 to 2 times the flat rate, so a 3.5% flat rate is equivalent to roughly 6.3-7.0% effective rate.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">How to Use This Calculator</h2>
          <p className="text-muted-foreground leading-relaxed">
            Enter the on-the-road (OTR) price of the car in Ringgit Malaysia (RM). Then enter your planned down payment — the minimum required by BNM is 10% for new cars and 20% for used cars. Enter the flat interest rate offered by your bank (typically 2.5% to 3.5% for new national cars). Finally, enter the loan tenure in years (maximum 9 years under Malaysian law). Click Calculate to see your estimated monthly instalment, total interest, and total repayment amount.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Common Mistakes When Estimating Car Loans</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
            <li>Not understanding that flat rate and effective rate are different — a 3% flat rate is roughly equivalent to 5.5-6% effective rate, making the actual loan cost higher than it appears.</li>
            <li>Choosing the maximum 9-year tenure to get lower monthly payments — this results in significantly higher total interest and risks negative equity as the car depreciates faster than the loan is repaid.</li>
            <li>Forgetting to factor in insurance, road tax, and maintenance costs which add RM 3,000 to RM 8,000 per year depending on the car.</li>
            <li>Not comparing rates from at least 3 banks — promotional rates during festive seasons can differ by 0.5% to 1% from standard rates.</li>
            <li>Ignoring the effect of a larger down payment — increasing your down payment from 10% to 20% can save thousands in total interest over the loan period.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Important Limitations</h2>
          <p className="text-muted-foreground leading-relaxed">
            This calculator provides estimates only based on the flat rate method. Actual monthly instalments may vary due to bank processing fees, late payment charges, early settlement penalties, and rounding differences applied by individual banks. The calculator does not account for hire purchase insurance, gap insurance, or extended warranty costs that may be bundled with your car loan package. Interest rates and promotions change frequently — always verify current rates directly with your bank or dealer before committing to a car purchase.
          </p>
        </div>
      </div>
    </div>
  );
}
