import type { Metadata } from 'next';
import SiteShell from '@/components/website/SiteShell';
import About from '@/components/website/policies/About';

export const metadata: Metadata = {
  title: 'About Us | LoanCalc Malaysia',
  description: 'Learn about LoanCalc Malaysia and our free educational loan calculators for Malaysian users.',
};

export default function Page() {
  return (
    <SiteShell>
      <About />
    </SiteShell>
  );
}
