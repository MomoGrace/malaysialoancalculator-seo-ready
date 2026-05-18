import type { Metadata } from 'next';
import SiteShell from '@/components/website/SiteShell';
import ValuationFeeCalculator from '@/components/website/calculators/ValuationFeeCalculator';

export const metadata: Metadata = {
  title: 'Valuation Fee Calculator Malaysia | LoanCalc Malaysia',
  description: 'Estimate Malaysian property valuation fees based on common fee scale examples for planning purposes.',
};

export default function Page() {
  return (
    <SiteShell>
      <ValuationFeeCalculator />
    </SiteShell>
  );
}
