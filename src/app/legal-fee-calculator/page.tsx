import type { Metadata } from 'next';
import SiteShell from '@/components/website/SiteShell';
import LegalFeeCalculator from '@/components/website/calculators/LegalFeeCalculator';

export const metadata: Metadata = {
  title: 'Legal Fee & Stamp Duty Calculator Malaysia | LoanCalc Malaysia',
  description: 'Estimate legal fees and stamp duty for Malaysian property purchase and loan agreement planning.',
};

export default function Page() {
  return (
    <SiteShell>
      <LegalFeeCalculator />
    </SiteShell>
  );
}
