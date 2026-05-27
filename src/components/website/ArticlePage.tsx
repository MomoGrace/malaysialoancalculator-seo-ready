'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { ChevronLeft, ChevronRight, Calendar, Clock, Info, BookOpen } from 'lucide-react';
import { articles } from '@/data/articles';

interface ArticlePageProps {
  slug: string;
}

const categoryColors: Record<string, string> = {
  'Car Loan': 'bg-blue-100 text-blue-700',
  'Home Loan': 'bg-emerald-100 text-emerald-700',
  'Personal Loan': 'bg-purple-100 text-purple-700',
  'General Finance': 'bg-orange-100 text-orange-700',
};

export default function ArticlePage({ slug }: ArticlePageProps) {
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center py-20">
        <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-30" />
        <h1 className="text-2xl font-bold mb-2">Article Not Found</h1>
        <p className="text-muted-foreground mb-4">The article you are looking for does not exist.</p>
        <Button asChild variant="outline">
          <a href="/guides">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Guides
          </a>
        </Button>
      </div>
    );
  }

  // Get related articles (same category, excluding current)
  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="flex min-w-0 items-center gap-2 text-sm text-muted-foreground mb-6">
        <a href="/" className="hover:text-primary transition-colors">Home</a>
        <span>/</span>
        <a href="/guides" className="hover:text-primary transition-colors">Guides</a>
        <span>/</span>
        <span className="text-foreground font-medium line-clamp-1">{article.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <article>
            {/* Article Header */}
            <div className="mb-6">
              <Badge variant="secondary" className={`mb-3 ${categoryColors[article.category] || ''}`}>
                {article.category}
              </Badge>
              <h1 className="text-[1.65rem] sm:text-3xl font-bold mb-3 leading-tight break-words">{article.title}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Last updated: {new Date(article.date).toLocaleDateString('en-MY', { month: 'long', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </span>
              </div>
            </div>

            {/* Article Content */}
            <div
              className="prose prose-slate max-w-none text-muted-foreground leading-relaxed
                [&_p]:mb-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-3
                [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-2
                [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-1 [&_ul]:mb-4
                [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:space-y-1 [&_ol]:mb-4
                [&_li]:text-muted-foreground [&_li]:leading-relaxed
                [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline
                [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic
              "
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Disclaimer */}
            <Alert className="mt-8 bg-muted/50">
              <Info className="h-4 w-4" />
              <AlertDescription className="text-xs text-muted-foreground">
                This article is for informational and educational purposes only. It does not constitute financial advice. Always consult a licensed financial adviser before making any financial decisions.
              </AlertDescription>
            </Alert>
          </article>

          {/* FAQ Section */}
          {article.faq && article.faq.length > 0 && (
            <div className="mt-10">
              <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {article.faq.map((item, idx) => (
                  <details key={idx} className="group border rounded-lg">
                    <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">{item.question}</summary>
                    <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
                      <p>{item.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-10 pt-6 border-t">
            <Button variant="outline" size="sm" asChild>
              <a href="/guides">
                <ChevronLeft className="w-4 h-4 mr-1" />
                All Guides
              </a>
            </Button>
          </div>
        </div>

        {/* Sidebar - Table of Contents & Related Articles */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <Card className="shadow-sm">
                <CardContent className="pt-5">
                  <h3 className="font-semibold text-sm mb-3">Related Articles</h3>
                  <div className="space-y-3">
                    {relatedArticles.map((related) => (
                      <a
                        key={related.slug}
                        href={`/guides/${related.slug}`}
                        className="block text-left group"
                      >
                        <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors line-clamp-2 leading-relaxed">
                          {related.title}
                        </p>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Quick Nav */}
            <Card className="shadow-sm">
              <CardContent className="pt-5">
                <h3 className="font-semibold text-sm mb-3">Quick Navigation</h3>
                <div className="space-y-2">
                  <a href="/" className="block text-xs text-muted-foreground hover:text-primary transition-colors">
                    → Home
                  </a>
                  <a href="/guides" className="block text-xs text-muted-foreground hover:text-primary transition-colors">
                    → All Loan Guides
                  </a>
                  <a href="/car-loan-calculator" className="block text-xs text-muted-foreground hover:text-primary transition-colors">
                    → Car Loan Calculator
                  </a>
                  <a href="/home-loan-calculator" className="block text-xs text-muted-foreground hover:text-primary transition-colors">
                    → Home Loan Calculator
                  </a>
                  <a href="/dsr-calculator" className="block text-xs text-muted-foreground hover:text-primary transition-colors">
                    → DSR Calculator
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </aside>
      </div>
    </div>
  );
}
