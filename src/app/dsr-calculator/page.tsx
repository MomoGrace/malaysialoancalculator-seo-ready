import type { Metadata } from 'next';
import SiteShell from '@/components/website/SiteShell';
import DSRCalculator from '@/components/website/calculators/DSRCalculator';

export const metadata: Metadata = {
  title: 'DSR Calculator Malaysia | Debt Service Ratio | LoanCalc Malaysia',
  description: 'Check your estimated debt service ratio for Malaysian loan planning before comparing bank offers.',
};

export default function Page() {
  return (
    <SiteShell>
      <DSRCalculator />
    </SiteShell>
  );
}
