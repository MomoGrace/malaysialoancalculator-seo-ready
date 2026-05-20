import type { Metadata } from 'next';
import SiteShell from '@/components/website/SiteShell';
import ArticlePage from '@/components/website/ArticlePage';
import { articles } from '@/data/articles';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: 'Loan Guide Not Found | LoanCalc Malaysia',
      description: 'The requested Malaysia loan guide could not be found.',
      alternates: { canonical: '/guides' },
      openGraph: {
        title: 'Loan Guide Not Found | LoanCalc Malaysia',
        description: 'The requested Malaysia loan guide could not be found.',
        url: '/guides',
      },
    };
  }

  return {
    title: `${article.title} | LoanCalc Malaysia`,
    description: article.description,
    alternates: { canonical: `/guides/${article.slug}` },
    openGraph: {
      title: `${article.title} | LoanCalc Malaysia`,
      description: article.description,
      url: `/guides/${article.slug}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  return (
    <SiteShell>
      <ArticlePage slug={slug} />
    </SiteShell>
  );
}
