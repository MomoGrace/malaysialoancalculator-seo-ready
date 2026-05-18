'use client';

import { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calculator, Info } from 'lucide-react';

function formatCurrency(value: number): string {
  return 'RM ' + value.toLocaleString('en-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

interface LoanResult {
  monthlyPayment: number;
  totalInterest: number;
  totalRepayment: number;
}

function calculateLoan(principal: number, annualRate: number, years: number, type: 'reducing' | 'flat'): LoanResult | null {
  if (principal <= 0 || annualRate <= 0 || years <= 0) return null;

  if (type === 'reducing') {
    const r = annualRate / 100 / 12;
    const n = years * 12;
    const monthly = principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalRepayment = monthly * n;
    return {
      monthlyPayment: monthly,
      totalInterest: totalRepayment - principal,
      totalRepayment,
    };
  } else {
    const totalInterest = principal * (annualRate / 100) * years;
    const totalRepayment = principal + totalInterest;
    const monthly = totalRepayment / (years * 12);
    return {
      monthlyPayment: monthly,
      totalInterest,
      totalRepayment,
    };
  }
}

interface GeneralLoanCalculatorProps {
  compact?: boolean;
}

export default function GeneralLoanCalculator({ compact = false }: GeneralLoanCalculatorProps) {
  const [loanAmount, setLoanAmount] = useState<string>('100000');
  const [interestRate, setInterestRate] = useState<string>('4.5');
  const [tenure, setTenure] = useState<string>('7');
  const [calcType, setCalcType] = useState<'reducing' | 'flat'>('reducing');
  const [result, setResult] = useState<LoanResult | null>(null);

  const handleCalculate = useCallback(() => {
    const p = parseFloat(loanAmount) || 0;
    const r = parseFloat(interestRate) || 0;
    const t = parseFloat(tenure) || 0;
    setResult(calculateLoan(p, r, t, calcType));
  }, [loanAmount, interestRate, tenure, calcType]);


  const principal = parseFloat(loanAmount) || 0;
  const principalPercent = result ? (principal / result.totalRepayment) * 100 : 50;
  const interestPercent = result ? (result.totalInterest / result.totalRepayment) * 100 : 50;

  return (
    <Card className={`border-border ${compact ? '' : 'shadow-sm'}`}>
      {!compact && (
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Calculator className="w-5 h-5 text-primary" />
            Loan Calculator
          </CardTitle>
        </CardHeader>
      )}
      <CardContent>
        <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-4`}>
          {/* Input Section */}
          <div className="space-y-3">
            <div className="space-y-2">
              <Label htmlFor="amount">Loan Amount (RM)</Label>
              <Input
                id="amount"
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                placeholder="e.g. 100000"
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rate">Annual Interest Rate (%)</Label>
              <Input
                id="rate"
                type="number"
                step="0.01"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                placeholder="e.g. 4.5"
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tenure">Loan Tenure (Years)</Label>
              <Input
                id="tenure"
                type="number"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
                placeholder="e.g. 7"
                min="1"
                max="35"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="calcType">Calculation Type</Label>
              <Select value={calcType} onValueChange={(v) => setCalcType(v as 'reducing' | 'flat')}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="reducing">Reducing Balance</SelectItem>
                  <SelectItem value="flat">Flat Rate</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button onClick={handleCalculate} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Calculator className="w-4 h-4 mr-2" />
              Calculate
            </Button>
          </div>

          {/* Results Section */}
          <div className="space-y-3">
            {result ? (
              <>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-primary/5 rounded-lg p-4 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Monthly Payment</p>
                    <p className="text-2xl font-bold text-primary">{formatCurrency(result.monthlyPayment)}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-muted rounded-lg p-3 text-center">
                      <p className="text-xs text-muted-foreground mb-1">Total Interest</p>
                      <p className="text-base font-semibold">{formatCurrency(result.totalInterest)}</p>
                    </div>
                    <div className="bg-muted rounded-lg p-3 text-center">
                      <p className="text-xs text-muted-foreground mb-1">Total Repayment</p>
                      <p className="text-base font-semibold">{formatCurrency(result.totalRepayment)}</p>
                    </div>
                  </div>
                </div>

                {/* Principal vs Interest Bar */}
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
              </>
            ) : (
              <div className="flex items-center justify-center h-48 text-muted-foreground">
                <div className="text-center">
                  <Calculator className="w-10 h-10 mx-auto mb-2 opacity-30" />
                  <p className="text-sm">Enter loan details and click Calculate</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <Alert className="mt-3 bg-muted/50">
          <Info className="h-4 w-4" />
          <AlertDescription className="text-xs text-muted-foreground">
            This calculator provides estimates only. Actual loan terms may vary depending on the bank, loan product, and your credit profile. Consult your bank for accurate figures.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}

export { formatCurrency, calculateLoan };
export type { LoanResult };
