'use client';

import { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calculator, Home, Info } from 'lucide-react';

function formatCurrency(value: number): string {
  return 'RM ' + value.toLocaleString('en-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function HomeLoanCalculator() {
  const [propertyPrice, setPropertyPrice] = useState<string>('500000');
  const [downPayment, setDownPayment] = useState<string>('50000');
  const [interestRate, setInterestRate] = useState<string>('4.5');
  const [tenure, setTenure] = useState<string>('30');
  const [result, setResult] = useState<{
    loanAmount: number;
    monthlyPayment: number;
    totalInterest: number;
    totalRepayment: number;
  } | null>(null);

  const handleCalculate = useCallback(() => {
    const price = parseFloat(propertyPrice) || 0;
    const dp = parseFloat(downPayment) || 0;
    const rate = parseFloat(interestRate) || 0;
    const years = parseFloat(tenure) || 0;

    const loanAmt = price - dp;
    if (loanAmt <= 0 || rate <= 0 || years <= 0) return;

    // Reducing balance calculation
    const r = rate / 100 / 12;
    const n = years * 12;
    const monthly = loanAmt * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalRepayment = monthly * n;

    setResult({
      loanAmount: loanAmt,
      monthlyPayment: monthly,
      totalInterest: totalRepayment - loanAmt,
      totalRepayment,
    });
  }, [propertyPrice, downPayment, interestRate, tenure]);


  const principalPercent = result ? (result.loanAmount / result.totalRepayment) * 100 : 50;
  const interestPercent = result ? (result.totalInterest / result.totalRepayment) * 100 : 50;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <span>/</span>
          <span className="text-foreground font-medium">Home Loan Calculator</span>
        </div>
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <Home className="w-8 h-8 text-primary" />
          Home Loan Calculator Malaysia
        </h1>
        <p className="text-muted-foreground">
          Estimate your monthly home loan repayment using the reducing balance method. Plan your property purchase with accurate calculations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calculator className="w-5 h-5 text-primary" />
              Home Loan Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="prop-price">Property Price (RM)</Label>
              <Input
                id="prop-price"
                type="number"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(e.target.value)}
                placeholder="e.g. 500000"
                min="0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="home-dp">Down Payment (RM)</Label>
              <Input
                id="home-dp"
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
                placeholder="e.g. 50000"
                min="0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="home-rate">Annual Interest Rate (%)</Label>
              <Input
                id="home-rate"
                type="number"
                step="0.01"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                placeholder="e.g. 4.5"
                min="0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="home-tenure">Loan Tenure (Years, 1-35)</Label>
              <Input
                id="home-tenure"
                type="number"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
                placeholder="e.g. 30"
                min="1"
                max="35"
              />
            </div>
            <Button onClick={handleCalculate} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Calculator className="w-4 h-4 mr-2" />
              Calculate Home Loan
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {result ? (
            <Card className="shadow-sm">
              <CardContent className="pt-6 space-y-4">
                <div className="bg-primary/5 rounded-lg p-4 text-center">
                  <p className="text-sm text-muted-foreground mb-1">Monthly Repayment</p>
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
                  <Home className="w-12 h-12 mx-auto mb-2 opacity-30" />
                  <p className="text-sm">Enter property details and click Calculate</p>
                </div>
              </CardContent>
            </Card>
          )}

          <Alert className="bg-muted/50">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-xs text-muted-foreground">
              Home loans in Malaysia typically use the reducing balance method. Actual rates and terms vary by bank. This calculator provides estimates only.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="q1">
            <AccordionTrigger>How is home loan interest calculated in Malaysia?</AccordionTrigger>
            <AccordionContent>
              Most Malaysian home loans use the reducing balance method, where interest is charged on the remaining principal after each monthly repayment. The standard formula is M = P × [r(1+r)^n] / [(1+r)^n - 1], where P is the loan amount, r is the monthly interest rate (annual rate divided by 12), and n is the total number of monthly instalments. Since 2015, Bank Negara Malaysia (BNM) replaced the Base Lending Rate (BLR) with the Base Rate (BR) system, which gives banks more flexibility in setting their reference rates. For example, if you borrow RM 450,000 at 4.5% over 30 years, your monthly repayment would be approximately RM 2,280, and the total interest paid over the full tenure would be around RM 370,800. As you make more repayments, a larger portion of each instalment goes towards reducing the principal rather than paying interest, making early repayment a powerful strategy to save on overall costs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>What is the current home loan interest rate in Malaysia?</AccordionTrigger>
            <AccordionContent>
              As of 2025, home loan interest rates in Malaysia typically range from 4.0% to 4.8% for conventional term loans, depending on the bank and borrower profile. Major banks like Maybank, CIMB, Public Bank, and Hong Leong Bank offer competitive packages, with some providing promotional fixed rates for the first 3 to 5 years before switching to a variable rate pegged to the bank's Base Rate. Islamic home financing products such as BBA (Bai Bithaman Ajil) and Murabahah offer comparable profit rates, generally between 4.1% and 4.9%, and are increasingly popular due to their Shariah-compliant structure. Fixed-rate packages provide certainty in monthly repayments but usually come at a slight premium compared to variable rates. It is worth comparing at least three banks using the Comparison Rate (which includes processing fees and other charges) rather than just looking at the advertised rate.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>What is the maximum home loan tenure in Malaysia?</AccordionTrigger>
            <AccordionContent>
              The maximum home loan tenure in Malaysia is generally 35 years, or until the borrower reaches age 65 to 70 (whichever comes first), as set by most lending institutions following BNM guidelines. Some banks may cap the age at 60 for self-employed applicants due to less predictable retirement income. Choosing a longer tenure, say 35 years instead of 25 years, can significantly lower your monthly commitment — for example, a RM 500,000 loan at 4.5% drops from approximately RM 2,779 to RM 2,533 per month. However, this also means paying substantially more total interest over the life of the loan, potentially adding over RM 100,000 in extra interest costs. It is also mandatory to have MRTA (Mortgage Reducing Term Assurance) or MRTT (Mortgage Reducing Term Takaful) coverage, which protects your family by settling the outstanding loan if something happens to you. Many banks bundle this insurance into the loan approval process, so be sure to compare premiums across providers to get the best deal.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q4">
            <AccordionTrigger>How much down payment do I need for a house?</AccordionTrigger>
            <AccordionContent>
              Under Bank Negara Malaysia's current guidelines, first-time homebuyers can purchase properties priced up to RM 700,000 with a minimum 10% down payment, while properties above that threshold require at least 20%. For second and subsequent home purchases, banks generally require a minimum down payment of 20% to 30%, reflecting the higher lending risk for investment properties. Government schemes such as PR1MA (Perumahan Rakyat 1Malaysia) and Skim Rumah Pertamaku have in the past offered 100% financing for eligible buyers earning below RM 5,000 per month, though availability varies. Malaysian government servants can benefit from the LPPSA (Lembaga Pembiayaan Perumahan Sektor Awam) housing loan scheme, which offers loans up to RM 600,000 with very favourable rates and can cover up to 100% of the property price. Additionally, you can withdraw from your EPF Account 2 (currently allowing up to 30% of total savings) to supplement your down payment, and EPF Account 3 permits limited withdrawals under specific conditions for housing purposes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q5">
            <AccordionTrigger>What is the difference between conventional and Islamic home loans?</AccordionTrigger>
            <AccordionContent>
              Conventional home loans in Malaysia operate as term loans where you borrow money from the bank and repay it with interest over the tenure, with rates pegged to the bank's Base Rate. Islamic home financing, on the other hand, does not involve interest (riba) and instead uses Shariah-compliant contracts. The most common is the BBA (Bai Bithaman Ajil), where the bank purchases the property and sells it to you at a markup, with you repaying the selling price in instalments — this is conceptually similar to a fixed-rate loan. The Murabahah (Cost-Plus Sale) structure works similarly but is often used for completed properties, while the Diminishing Musyarakah (MMP — Musharakah Mutanaqisah) is a co-ownership model where you and the bank jointly own the property and you gradually buy the bank's share over time. Instead of an "interest rate," Islamic financing uses a "profit rate," which is often competitive with conventional rates — for instance, Maybank's Islamic home financing currently offers rates starting from around 4.2%. Islamic loans also offer the advantage of no late payment compounding interest, and many Malaysian buyers prefer them for both religious and practical reasons.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q6">
            <AccordionTrigger>Can I refinance my home loan in Malaysia?</AccordionTrigger>
            <AccordionContent>
              Yes, refinancing your home loan is a common practice in Malaysia and can be a smart financial move if market rates have dropped significantly since you first took out your loan. Many homeowners refinance from a higher rate of, say, 4.7% to a new rate of 4.2%, which on a RM 400,000 loan over 25 years could save approximately RM 150 per month and over RM 45,000 in total interest. However, you should carefully consider the costs involved, including legal fees (typically RM 2,000 to RM 4,000 depending on loan amount), stamp duty on the new loan agreement (which can be up to 0.5% of the loan amount), valuation fees (around RM 1,500 to RM 3,000), and potential early settlement penalties from your existing bank (usually 1% to 3% of the outstanding amount). You will also need to transfer your MRTA or MRTT insurance to the new bank or purchase a new policy, as these are not portable between institutions. Bank Negara Malaysia requires that the new bank perform a fresh credit assessment via CCRIS and CTOS, so ensure your credit record is clean before applying. A good rule of thumb is that refinancing makes financial sense only if you plan to stay in the property long enough for the monthly savings to outweigh the total refinancing costs, typically within two to three years.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
