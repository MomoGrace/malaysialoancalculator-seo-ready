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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calculator, CreditCard, Info } from 'lucide-react';

function formatCurrency(value: number): string {
  return 'RM ' + value.toLocaleString('en-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function PersonalLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState<string>('30000');
  const [interestRate, setInterestRate] = useState<string>('8.0');
  const [tenure, setTenure] = useState<string>('5');
  const [calcType, setCalcType] = useState<'reducing' | 'flat'>('reducing');
  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalInterest: number;
    totalRepayment: number;
  } | null>(null);

  const { resultRef, justCalculated, runCalculation } = useCalculatorAction();

  const handleCalculate = useCallback(() => {
    runCalculation(() => {
    const principal = parseFloat(loanAmount) || 0;
    const rate = parseFloat(interestRate) || 0;
    const years = parseFloat(tenure) || 0;
    if (principal <= 0 || rate <= 0 || years <= 0) return false;

    if (calcType === 'reducing') {
      const r = rate / 100 / 12;
      const n = years * 12;
      const monthly = principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalRepayment = monthly * n;
      setResult({ monthlyPayment: monthly, totalInterest: totalRepayment - principal, totalRepayment });
    } else {
      const totalInterest = principal * (rate / 100) * years;
      const totalRepayment = principal + totalInterest;
      setResult({ monthlyPayment: totalRepayment / (years * 12), totalInterest, totalRepayment });
    }

      return true;
    });
  }, [loanAmount, interestRate, tenure, calcType, runCalculation]);


  const principal = parseFloat(loanAmount) || 0;
  const principalPercent = result ? (principal / result.totalRepayment) * 100 : 50;
  const interestPercent = result ? (result.totalInterest / result.totalRepayment) * 100 : 50;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-0">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <span>/</span>
          <span className="text-foreground font-medium">Personal Loan Calculator</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex items-start sm:items-center gap-3 leading-tight">
          <CreditCard className="w-7 h-7 sm:w-8 sm:h-8 text-primary shrink-0" />
          Personal Loan Calculator Malaysia
        </h1>
        <p className="text-muted-foreground">
          Calculate your personal loan monthly repayment, total interest, and total cost. Compare reducing balance and flat rate options.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calculator className="w-5 h-5 text-primary" />
              Personal Loan Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="pl-amount">Loan Amount (RM)</Label>
              <Input id="pl-amount" type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} placeholder="e.g. 30000" min="0" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pl-rate">Annual Interest Rate (%)</Label>
              <Input id="pl-rate" type="number" step="0.01" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} placeholder="e.g. 8.0" min="0" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pl-tenure">Loan Tenure (Years, 1-10)</Label>
              <Input id="pl-tenure" type="number" value={tenure} onChange={(e) => setTenure(e.target.value)} placeholder="e.g. 5" min="1" max="10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pl-type">Calculation Type</Label>
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
              {justCalculated ? 'Updated' : 'Calculate Personal Loan'}
            </Button>
          </CardContent>
        </Card>

        <div ref={resultRef} className="space-y-4 scroll-mt-20">
          {result ? (
            <Card className="shadow-sm">
              <CardContent className="pt-6 space-y-4">
                <div className="bg-primary/5 rounded-lg p-4 text-center">
                  <p className="text-sm text-muted-foreground mb-1">Monthly Repayment</p>
                  <p className="text-3xl font-bold text-primary">{formatCurrency(result.monthlyPayment)}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
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
                    <div className="bg-primary h-full transition-all duration-500" style={{ width: `${principalPercent}%` }} />
                    <div className="bg-amber-400 h-full transition-all duration-500" style={{ width: `${interestPercent}%` }} />
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
                  <CreditCard className="w-12 h-12 mx-auto mb-2 opacity-30" />
                  <p className="text-sm">Enter loan details and click Calculate</p>
                </div>
              </CardContent>
            </Card>
          )}
          <Alert className="bg-muted/50">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-xs text-muted-foreground">
              Personal loan interest rates in Malaysia typically range from 3.99% to 18% per annum. Actual rates depend on your credit profile, income, and the bank. This calculator provides estimates only.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="q1">
            <AccordionTrigger>What is the maximum personal loan amount in Malaysia?</AccordionTrigger>
            <AccordionContent>
              In Malaysia, the maximum personal loan amount most commercial banks offer is RM 250,000 for conventional financing. Banks typically cap the loan at 8 to 10 times your monthly gross salary, so a person earning RM 5,000 a month may qualify for up to RM 50,000. Government servants and civil servants can often access higher amounts through cooperative loans such as those offered by Koperasi Angkatan Tentera (KAT) or Koperasi Serbaguna Malaysia (KSM), which can extend up to 15 times their monthly salary. Additionally, government employees may opt for Amanah Saham Bumiputera (ASB) financing, which can offer up to RM 300,000 or more depending on their ASB balance and eligibility. It is important to compare multiple banks like Maybank, CIMB, Public Bank, and RHB to find the best loan limit and interest rate for your income bracket.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>Do I need collateral for a personal loan?</AccordionTrigger>
            <AccordionContent>
              Most personal loans in Malaysia are unsecured, meaning you do not need to pledge any assets to obtain them. Banks rely primarily on your credit score, income level, and employment stability to determine your eligibility. However, secured personal loans are also available and typically offer significantly lower interest rates, sometimes as low as 3.5% per annum compared to 6-18% for unsecured loans. Common forms of collateral include fixed deposits placed with the same bank, unit trust investments, or even EPF Account 2 balances under certain schemes. If you have a substantial fixed deposit with Maybank or CIMB, for example, you can pledge it as security for a collateralised loan at a rate close to the deposit rate plus a small margin. Secured loans are a good option if you want to minimise interest costs and have assets you are comfortable pledging to the bank.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>How long does personal loan approval take?</AccordionTrigger>
            <AccordionContent>
              For salaried employees working at established companies, personal loan approval in Malaysia typically takes 3 to 5 working days from the date of full document submission. Self-employed individuals, freelancers, and business owners may wait up to 10 to 14 working days as banks require additional verification of income, including business registration documents and audited financial statements. Major banks like Hong Leong Bank and Standard Chartered offer online pre-approval tools that can give you an indicative decision within minutes, though the final approval still requires document verification. To speed up your application, ensure you prepare all required documents beforehand: your MyKad (IC), 3 months of latest payslips, 6 months of bank statements, and your EPF statement. Applying through your existing bank where your salary is credited can also speed up the process since they already have your financial track record on file.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q4">
            <AccordionTrigger>Can I settle my personal loan early?</AccordionTrigger>
            <AccordionContent>
              Yes, all licensed banks in Malaysia allow early settlement of personal loans, but the financial implications vary depending on your loan agreement. Under Bank Negara Malaysia guidelines, banks are permitted to charge an early settlement penalty, which is typically calculated as 1% to 3% of the outstanding loan balance. Many banks impose a lock-in period of 6 to 12 months during which early settlement fees are higher, so it is worth checking your letter of offer carefully. For reducing balance loans, early settlement can yield meaningful interest savings because interest is calculated on the remaining principal. For example, settling a RM 50,000 reducing balance loan at 8% p.a. after 2 years of a 5-year tenure could save you several thousand ringgit in remaining interest. Some banks like Alliance Bank and Affin Bank waive the early settlement fee entirely after the lock-in period, so always clarify this with your loan officer before making a lump-sum payment.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q5">
            <AccordionTrigger>What affects my personal loan interest rate?</AccordionTrigger>
            <AccordionContent>
              Your personal loan interest rate in Malaysia is influenced by several key factors, with your income level and employment type being the most significant. Employees of government-linked companies (GLCs) and multinational corporations often receive preferential rates as low as 3.99% because of their perceived job stability. Your credit history plays an equally important role — a clean Central Credit Reference Information System (CCRIS) record and no adverse listings on CTOS will help you secure the lowest rates available. Banks also evaluate your Debt Service Ratio (DSR), which measures how much of your monthly income goes towards existing debt commitments; a DSR below 60% is generally preferred, with some banks accepting up to 70% for high-income earners. The loan amount and tenure also matter — larger loan amounts and shorter tenures often qualify for better rates because the bank earns more in absolute interest over a shorter period. Maintaining a good credit score, minimising outstanding debts, and applying during promotional periods can help you secure the most competitive rate.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q6">
            <AccordionTrigger>What documents are needed for personal loan application in Malaysia?</AccordionTrigger>
            <AccordionContent>
              The standard documents required for a personal loan application in Malaysia include your MyKad (identity card) or passport for non-citizens as the primary identification document. Salaried employees need to provide 3 months of latest payslips, 6 months of bank statements showing salary credits, and an EPF contribution statement which can be downloaded from the KWSP i-Akaun portal. Some banks may also request your latest LHDN BE (income tax) form or EA form as additional proof of income. For self-employed individuals and business owners, the requirements are more extensive and typically include your Business Registration Certificate (SSM), 6 to 12 months of business bank statements, the latest 2 years of audited profit and loss statements, and a copy of your LHDN BE or B form. Commission-based earners such as real estate agents and insurance agents should also prepare their commission statements and EPF contributions for at least the past 6 months. Having all documents ready in PDF format before applying online or visiting a branch can significantly reduce your approval waiting time.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
