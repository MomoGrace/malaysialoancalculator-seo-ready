import type { Metadata } from 'next';
import SiteShell from '@/components/website/SiteShell';
import HomeLoanCalculator from '@/components/website/calculators/HomeLoanCalculator';

export const metadata: Metadata = {
  title: 'Home Loan Calculator Malaysia | LoanCalc Malaysia',
  description: 'Estimate Malaysian home loan monthly repayment, total interest and housing loan costs using reducing balance examples.',
};

export default function Page() {
  return (
    <SiteShell>
      <HomeLoanCalculator />
    </SiteShell>
  );
}
