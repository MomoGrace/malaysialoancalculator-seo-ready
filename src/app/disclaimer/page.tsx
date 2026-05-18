import type { Metadata } from 'next';
import SiteShell from '@/components/website/SiteShell';
import Disclaimer from '@/components/website/policies/Disclaimer';

export const metadata: Metadata = {
  title: 'Disclaimer | LoanCalc Malaysia',
  description: 'Read the educational-use and financial disclaimer for LoanCalc Malaysia calculators and guides.',
};

export default function Page() {
  return (
    <SiteShell>
      <Disclaimer />
    </SiteShell>
  );
}
