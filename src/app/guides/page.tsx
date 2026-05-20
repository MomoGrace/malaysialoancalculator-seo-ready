import type { Metadata } from 'next';
import SiteShell from '@/components/website/SiteShell';
import GuidesPage from '@/components/website/GuidesPage';

export const metadata: Metadata = {
  title: 'Malaysia Loan Guides & Articles | LoanCalc Malaysia',
  description: 'Read practical Malaysia loan guides covering car loans, home loans, personal loans, DSR, legal fees, interest rates and repayment planning.',
  alternates: { canonical: '/guides' },
  openGraph: {
    title: 'Malaysia Loan Guides & Articles | LoanCalc Malaysia',
    description: 'Read practical Malaysia loan guides covering car loans, home loans, personal loans, DSR, legal fees, interest rates and repayment planning.',
    url: '/guides',
  },
};

export default function Page() {
  return (
    <SiteShell>
      <GuidesPage />
    </SiteShell>
  );
}
