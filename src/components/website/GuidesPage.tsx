'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ChevronRight } from 'lucide-react';
import { articles } from '@/data/articles';

const categoryColors: Record<string, string> = {
  'Car Loan': 'bg-blue-100 text-blue-700',
  'Home Loan': 'bg-emerald-100 text-emerald-700',
  'Personal Loan': 'bg-purple-100 text-purple-700',
  'General Finance': 'bg-orange-100 text-orange-700',
};

const categories = ['All', 'Car Loan', 'Home Loan', 'Personal Loan', 'General Finance'];

export default function GuidesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <span>/</span>
          <span className="text-foreground font-medium">Loan Guides</span>
        </div>
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-primary" />
          Malaysia Loan Guides
        </h1>
        <p className="text-muted-foreground">
          Comprehensive guides and articles to help you make informed financial decisions about loans in Malaysia.
        </p>
      </div>

      {/* Category badges */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <Badge key={cat} variant="secondary" className="px-3 py-1.5 text-sm cursor-default">
            {cat}
          </Badge>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <a
            key={article.slug}
            href={`/guides/${article.slug}`}
            className="calc-card-hover block text-left bg-card border border-border rounded-xl p-5 hover:border-primary/30"
          >
            <Badge variant="secondary" className={`text-xs mb-2 ${categoryColors[article.category] || ''}`}>
              {article.category}
            </Badge>
            <h2 className="font-semibold text-sm mb-2 line-clamp-2">{article.title}</h2>
            <p className="text-xs text-muted-foreground line-clamp-3 mb-3">{article.description}</p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{article.readTime}</span>
              <span>Updated {new Date(article.date).toLocaleDateString('en-MY', { month: 'short', year: 'numeric' })}</span>
            </div>
            <span className="inline-flex items-center text-xs text-primary font-medium mt-3">
              Read Article <ChevronRight className="w-3 h-3 ml-0.5" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
