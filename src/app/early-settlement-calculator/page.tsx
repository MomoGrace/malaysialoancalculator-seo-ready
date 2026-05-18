import type { Metadata } from 'next';
import SiteShell from '@/components/website/SiteShell';
import EarlySettlementCalculator from '@/components/website/calculators/EarlySettlementCalculator';

export const metadata: Metadata = {
  title: 'Early Loan Settlement Calculator Malaysia | LoanCalc Malaysia',
  description: 'Estimate early loan settlement balance, interest savings and possible rebate for Malaysian loan planning.',
};

export default function Page() {
  return (
    <SiteShell>
      <EarlySettlementCalculator />
    </SiteShell>
  );
}
