import SiteShell from '@/components/website/SiteShell';
import HomePage from '@/components/website/HomePage';

export default function Page() {
  return (
    <SiteShell isHome>
      <HomePage />
    </SiteShell>
  );
}
