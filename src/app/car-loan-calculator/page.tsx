import type { Metadata } from 'next';
import SiteShell from '@/components/website/SiteShell';
import CarLoanCalculator from '@/components/website/calculators/CarLoanCalculator';

export const metadata: Metadata = {
  title: 'Car Loan Calculator Malaysia | LoanCalc Malaysia',
  description: 'Calculate Malaysian car loan instalment, total interest and total repayment using flat rate hire purchase examples.',
};

export default function Page() {
  return (
    <SiteShell>
      <CarLoanCalculator />
    </SiteShell>
  );
}
