import type { Metadata } from 'next';
import SiteShell from '@/components/website/SiteShell';
import PersonalLoanCalculator from '@/components/website/calculators/PersonalLoanCalculator';

export const metadata: Metadata = {
  title: 'Personal Loan Calculator Malaysia | LoanCalc Malaysia',
  description: 'Calculate Malaysian personal loan monthly repayment, interest cost and total repayment for planning purposes.',
};

export default function Page() {
  return (
    <SiteShell>
      <PersonalLoanCalculator />
    </SiteShell>
  );
}
