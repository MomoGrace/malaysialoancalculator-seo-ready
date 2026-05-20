import type { Metadata } from 'next';
import SiteShell from '@/components/website/SiteShell';
import Terms from '@/components/website/policies/Terms';

export const metadata: Metadata = {
  title: 'Terms of Use | LoanCalc Malaysia',
  description: 'Read the terms of use for LoanCalc Malaysia.',
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms of Use | LoanCalc Malaysia',
    description: 'Read the terms of use for LoanCalc Malaysia.',
    url: '/terms',
  },
};

export default function Page() {
  return (
    <SiteShell>
      <Terms />
    </SiteShell>
  );
}
