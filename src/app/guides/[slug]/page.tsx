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
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <SiteShell>
        <ArticlePage slug={slug} />
      </SiteShell>
    );
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: `https://malaysialoancalculator.com/guides/${article.slug}`,
    datePublished: article.date,
    dateModified: article.date,
    author: { '@type': 'Organization', name: 'LoanCalc Malaysia', url: 'https://malaysialoancalculator.com' },
    publisher: { '@type': 'Organization', name: 'LoanCalc Malaysia', url: 'https://malaysialoancalculator.com' },
  };

  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faq.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://malaysialoancalculator.com/' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://malaysialoancalculator.com/guides' },
      { '@type': 'ListItem', position: 3, name: article.title, item: `https://malaysialoancalculator.com/guides/${article.slug}` },
    ],
  };

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ArticlePage slug={slug} />
    </SiteShell>
  );
}
