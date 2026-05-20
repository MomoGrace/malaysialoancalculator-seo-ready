import type { Metadata } from 'next';
import SiteShell from '@/components/website/SiteShell';
import Privacy from '@/components/website/policies/Privacy';

export const metadata: Metadata = {
  title: 'Privacy Policy | LoanCalc Malaysia',
  description: 'Read the privacy policy for LoanCalc Malaysia.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy | LoanCalc Malaysia',
    description: 'Read the privacy policy for LoanCalc Malaysia.',
    url: '/privacy',
  },
};

export default function Page() {
  return (
    <SiteShell>
      <Privacy />
    </SiteShell>
  );
}
