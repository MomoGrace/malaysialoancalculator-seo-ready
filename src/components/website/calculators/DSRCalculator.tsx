'use client';

import { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calculator, Info, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

function formatCurrency(value: number): string {
  return 'RM ' + value.toLocaleString('en-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function DSRCalculator() {
  const [grossIncome, setGrossIncome] = useState<string>('5000');
  const [carLoan, setCarLoan] = useState<string>('800');
  const [creditCards, setCreditCards] = useState<string>('500');
  const [otherLoans, setOtherLoans] = useState<string>('300');
  const [housing, setHousing] = useState<string>('0');
  const [result, setResult] = useState<{
    dsr: number;
    totalDebt: number;
    maxHousing: number;
  } | null>(null);

  const handleCalculate = useCallback(() => {
    const income = parseFloat(grossIncome) || 0;
    const car = parseFloat(carLoan) || 0;
    const cc = parseFloat(creditCards) || 0;
    const other = parseFloat(otherLoans) || 0;
    const house = parseFloat(housing) || 0;

    if (income <= 0) return;

    const totalDebt = car + cc + other + house;
    const dsr = (totalDebt / income) * 100;
    const maxHousing = income * 0.6 - (car + cc + other);

    setResult({ dsr, totalDebt, maxHousing: Math.max(0, maxHousing) });
  }, [grossIncome, carLoan, creditCards, otherLoans, housing]);


  const getDSRColor = (dsr: number) => {
    if (dsr < 60) return 'text-green-600 bg-green-50 border-green-200';
    if (dsr < 70) return 'text-amber-600 bg-amber-50 border-amber-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getDSRIcon = (dsr: number) => {
    if (dsr < 60) return <TrendingDown className="w-6 h-6 text-green-600" />;
    if (dsr < 70) return <TrendingUp className="w-6 h-6 text-amber-600" />;
    return <AlertTriangle className="w-6 h-6 text-red-600" />;
  };

  const getDSRLabel = (dsr: number) => {
    if (dsr < 60) return 'Healthy - Good loan approval chances';
    if (dsr < 70) return 'Moderate - May face stricter assessment';
    return 'High - Loan approval may be difficult';
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <span>/</span>
          <span className="text-foreground font-medium">DSR Calculator</span>
        </div>
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <Calculator className="w-8 h-8 text-primary" />
          DSR Calculator Malaysia
        </h1>
        <p className="text-muted-foreground">
          Calculate your Debt Service Ratio (DSR) to understand your loan eligibility. Banks use DSR to assess your ability to repay loans.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calculator className="w-5 h-5 text-primary" />
              DSR Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="income">Monthly Gross Income (RM)</Label>
              <Input id="income" type="number" value={grossIncome} onChange={(e) => setGrossIncome(e.target.value)} placeholder="e.g. 5000" min="0" />
              <p className="text-xs text-muted-foreground">Your total monthly income before deductions</p>
            </div>

            <div className="border-t pt-4">
              <p className="text-sm font-medium mb-3">Monthly Debt Commitments</p>
              <div className="space-y-3">
                <div className="space-y-1.5">
                  <Label htmlFor="car">Car Loan (RM)</Label>
                  <Input id="car" type="number" value={carLoan} onChange={(e) => setCarLoan(e.target.value)} placeholder="0" min="0" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="cc">Credit Card Minimum Payment (RM)</Label>
                  <Input id="cc" type="number" value={creditCards} onChange={(e) => setCreditCards(e.target.value)} placeholder="0" min="0" />
                  <p className="text-xs text-muted-foreground">Usually 5% of outstanding balance or minimum RM50</p>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="other">Other Loans (RM)</Label>
                  <Input id="other" type="number" value={otherLoans} onChange={(e) => setOtherLoans(e.target.value)} placeholder="0" min="0" />
                  <p className="text-xs text-muted-foreground">Personal loans, study loans, etc.</p>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="house">Existing Housing Loan (RM)</Label>
                  <Input id="house" type="number" value={housing} onChange={(e) => setHousing(e.target.value)} placeholder="0" min="0" />
                </div>
              </div>
            </div>

            <Button onClick={handleCalculate} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Calculator className="w-4 h-4 mr-2" />
              Calculate DSR
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {result ? (
            <>
              <Card className={`shadow-sm border-2 ${getDSRColor(result.dsr)}`}>
                <CardContent className="pt-6 text-center space-y-2">
                  <div className="flex justify-center mb-2">{getDSRIcon(result.dsr)}</div>
                  <p className="text-sm opacity-80">Your Debt Service Ratio</p>
                  <p className="text-5xl font-bold">{result.dsr.toFixed(1)}%</p>
                  <p className="text-sm font-medium">{getDSRLabel(result.dsr)}</p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-3">
                <Card className="shadow-sm">
                  <CardContent className="pt-4 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Total Monthly Debt</p>
                    <p className="text-lg font-bold">{formatCurrency(result.totalDebt)}</p>
                  </CardContent>
                </Card>
                <Card className="shadow-sm">
                  <CardContent className="pt-4 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Max Housing Instalment</p>
                    <p className="text-lg font-bold text-primary">{formatCurrency(result.maxHousing)}</p>
                    <p className="text-xs text-muted-foreground">At 60% DSR threshold</p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-medium text-sm mb-2">DSR Thresholds in Malaysia</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full" />
                    <span>&lt; 60%: Healthy - Most banks will approve</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-amber-500 rounded-full" />
                    <span>60-70%: Moderate - Some banks may approve with conditions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full" />
                    <span>&gt; 70%: High - Loan approval is unlikely</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Card className="shadow-sm">
              <CardContent className="flex items-center justify-center h-64 text-muted-foreground">
                <div className="text-center">
                  <Calculator className="w-12 h-12 mx-auto mb-2 opacity-30" />
                  <p className="text-sm">Enter your income and debts to calculate DSR</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="q1">
            <AccordionTrigger>What is DSR (Debt Service Ratio) and why does it matter?</AccordionTrigger>
            <AccordionContent>
              DSR (Debt Service Ratio) is a key financial metric used by Malaysian banks to measure the percentage of your monthly income that goes towards servicing existing debt obligations. Bank Negara Malaysia (BNM) guidelines require all financial institutions to assess a borrower's DSR before approving any new credit facility, ensuring responsible lending practices and protecting consumers from over-indebtedness. Different banks in Malaysia set different DSR thresholds — for example, Maybank and CIMB typically cap housing loan DSR at 60-70%, while Public Bank may be slightly more conservative at around 55-65% depending on the applicant's income bracket. A lower DSR indicates stronger repayment capacity and significantly improves your chances of loan approval, often leading to better interest rate offers as well. If your DSR is too high, banks may reject your application outright or approve a smaller loan amount with higher interest rates, making it crucial to understand and manage your DSR before applying for any financing in Malaysia.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>How is DSR calculated?</AccordionTrigger>
            <AccordionContent>
              DSR is calculated using the formula: DSR = (Total Monthly Debt Commitments ÷ Monthly Net Income) × 100. For example, if your monthly net income is RM5,000 and your total monthly debt commitments (car loan RM800, credit card minimum payment RM500, personal loan RM300, and proposed housing loan RM1,200) add up to RM2,800, your DSR would be 56%. It is important to note that most Malaysian banks use net income (income after EPF, SOCSO, and income tax deductions) rather than gross income, though some may consider gross income for certain loan products. Debt commitments include all existing instalments such as car loans, personal loans, study loans, credit card minimum payments (typically 5% of outstanding balance or RM50, whichever is higher), hire purchase, and any overdraft facilities. Some banks like Maybank also factor in standing commitments such as rental payments, alimony, and even utility bills when assessing your full financial picture.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>How can I improve my DSR?</AccordionTrigger>
            <AccordionContent>
              There are several practical strategies to improve your DSR in the Malaysian context. First, prioritise paying off high-interest debts such as credit card balances — clearing a RM10,000 credit card outstanding balance can reduce your minimum monthly commitment by RM500, instantly lowering your DSR. Second, explore ways to increase your income, such as taking on freelance work, requesting a salary increment, or declaring side income streams like e-commerce sales or rental income from a sublet property (with proper documentation). Third, reduce your number of active credit cards — having 5 credit cards with RM50 minimum payments each adds RM250 to your monthly commitments, so close unused cards before applying for a loan. Fourth, consider consolidating multiple debts into a single lower-interest personal loan, which can reduce your total monthly instalment amount — for instance, merging three personal loans with combined monthly payments of RM1,500 into one consolidation loan at RM1,100 saves you RM400 per month. Fifth, use your EPF Account 2 or Account 3 statements as proof of savings and financial discipline, as some banks like RHB and Hong Leong Bank may offer more favourable DSR assessments for applicants who can demonstrate strong EPF contributions and healthy savings history.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q4">
            <AccordionTrigger>Does DSR affect all types of loan applications?</AccordionTrigger>
            <AccordionContent>
              Yes, DSR impacts virtually every type of loan application in Malaysia, but the strictness of assessment varies significantly across loan products. Housing loans are the most strictly assessed, with banks typically requiring a DSR below 60-70% because of the large loan amounts and long repayment periods involved — for instance, a RM500,000 home loan over 30 years represents a significant long-term commitment. Car loans generally have slightly more relaxed DSR thresholds, with some banks accepting DSRs up to 70-75% since the loan tenure is shorter (typically 5-9 years) and the collateral (the vehicle) provides additional security for the bank. Personal loans and overdraft facilities are assessed on a case-by-case basis, with banks like Alliance Bank and AmBank sometimes approving applicants with DSRs up to 80% but at higher interest rates. Credit card applications use a different but related assessment — banks evaluate your existing credit utilisation and minimum payment burden, and if your total card minimum payments already consume a large portion of your income, new card applications may be declined or approved with very low credit limits (as low as RM2,000 instead of the typical RM5,000-10,000).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q5">
            <AccordionTrigger>What is a healthy DSR for loan approval in Malaysia?</AccordionTrigger>
            <AccordionContent>
              In Malaysia, a DSR of 30-40% is considered ideal and puts you in the strongest position for loan approval with the best interest rates — for example, with a RM6,000 monthly income and total debts of RM1,800, you sit at a comfortable 30% DSR. A DSR between 40-60% is still widely acceptable for most banks and loan types, though some premium banks like OCBC and Standard Chartered may offer slightly less competitive rates compared to applicants in the ideal range. Once your DSR crosses 60%, approvals become more challenging — banks like Maybank and CIMB may still approve your application but often impose stricter conditions such as requiring a guarantor, requesting additional collateral, or offering the loan at a higher interest rate (BLR + 1.5% instead of BLR + 0.8%). A DSR above 70% is considered high-risk by virtually all Malaysian banks, and your application is likely to be rejected unless you have exceptional circumstances such as a very high net worth, substantial fixed deposits with the bank, or a strong existing banking relationship. As a general rule, keeping your DSR below 50% gives you the most flexibility and negotiating power when applying for financing in Malaysia.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q6">
            <AccordionTrigger>How does CCRIS and CTOS affect my DSR and loan application?</AccordionTrigger>
            <AccordionContent>
              CCRIS (Central Credit Reference Information System) and CTOS are the two main credit reporting systems used by Malaysian banks when evaluating your loan application, and both have a direct impact on how your DSR is perceived. CCRIS is maintained by Bank Negara Malaysia and provides a comprehensive record of all your credit facilities, outstanding balances, and monthly payment behaviour over the past 12 months — banks use this to verify the debt commitments you declare in your DSR calculation, and any discrepancies can cause immediate rejection. CTOS, operated by CTOS Data Systems Sdn Bhd, provides additional information including legal cases, bankruptcy records, and litigation history that may not appear in CCRIS. Negative records that can severely hurt your application include late payments (even 1-2 days late are recorded), dishonoured cheques, default judgments, and being listed under the Bankruptcy Act 1967 — for instance, having 3 or more late payment records in your CCRIS report within the past 12 months will likely result in rejection by major banks. To improve your credit profile before applying, request your free CCRIS report from BNM and your CTOS report from myCTOS.com, then ensure all outstanding debts are brought current, dispute any inaccurate records, and maintain at least 6 months of clean on-time payment history before submitting a new loan application.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
