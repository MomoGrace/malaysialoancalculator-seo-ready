import type { Metadata } from 'next';
import SiteShell from '@/components/website/SiteShell';
import Contact from '@/components/website/policies/Contact';

export const metadata: Metadata = {
  title: 'Contact Us | LoanCalc Malaysia',
  description: 'Contact LoanCalc Malaysia for website feedback, calculator suggestions or general enquiries.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us | LoanCalc Malaysia',
    description: 'Contact LoanCalc Malaysia for website feedback, calculator suggestions or general enquiries.',
    url: '/contact',
  },
};

export default function Page() {
  return (
    <SiteShell>
      <Contact />
    </SiteShell>
  );
}
