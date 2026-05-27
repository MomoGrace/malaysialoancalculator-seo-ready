'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import {
  Calculator, Car, Home, CreditCard, FileText, Info, Building, TrendingDown,
  ChevronRight, Shield, Clock, BarChart3
} from 'lucide-react';
import GeneralLoanCalculator from './calculators/GeneralLoanCalculator';
import { articles } from '@/data/articles';

const calculatorCards = [
  { label: 'Car Loan Calculator', href: '/car-loan-calculator', icon: Car, desc: 'Calculate monthly car instalment', color: 'bg-blue-50 text-blue-600' },
  { label: 'Home Loan Calculator', href: '/home-loan-calculator', icon: Home, desc: 'Estimate housing loan repayment', color: 'bg-emerald-50 text-emerald-600' },
  { label: 'Personal Loan Calculator', href: '/personal-loan-calculator', icon: CreditCard, desc: 'Calculate personal loan costs', color: 'bg-purple-50 text-purple-600' },
  { label: 'DSR Calculator', href: '/dsr-calculator', icon: BarChart3, desc: 'Check your debt service ratio', color: 'bg-orange-50 text-orange-600' },
  { label: 'Legal Fee Calculator', href: '/legal-fee-calculator', icon: FileText, desc: 'Estimate legal fees & stamp duty', color: 'bg-rose-50 text-rose-600' },
  { label: 'Early Settlement Calculator', href: '/early-settlement-calculator', icon: TrendingDown, desc: 'Calculate early settlement savings', color: 'bg-teal-50 text-teal-600' },
  { label: 'Valuation Fee Calculator', href: '/valuation-fee-calculator', icon: Building, desc: 'Estimate property valuation fees', color: 'bg-indigo-50 text-indigo-600' },
];

const featuredArticles = articles.slice(0, 6);

const categoryColors: Record<string, string> = {
  'Car Loan': 'bg-blue-100 text-blue-700',
  'Home Loan': 'bg-emerald-100 text-emerald-700',
  'Personal Loan': 'bg-purple-100 text-purple-700',
  'General Finance': 'bg-orange-100 text-orange-700',
};

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white pt-6 pb-8 sm:pt-8 sm:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-2 leading-tight">
            Free Malaysia Loan Calculator
          </h1>
          <p className="text-base sm:text-lg opacity-90 max-w-2xl mx-auto mb-5">
            Calculate your monthly loan repayment, total interest, and plan your finances with our easy-to-use loan calculators for Malaysia.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => {
                document.getElementById('calculator-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Try Calculator Now
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white bg-white/10 hover:bg-white/20"
            >
              <a href="/guides">
                Read Loan Guides
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-5 mt-6 text-sm opacity-80">
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4" /> Free to Use</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> Instant Results</span>
            <span className="flex items-center gap-1.5"><Info className="w-4 h-4" /> Educational Purpose</span>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator-section" className="py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GeneralLoanCalculator />
        </div>
      </section>

      {/* Popular Calculators Grid */}
      <section className="py-4 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-xl sm:text-2xl font-bold mb-1">Popular Malaysia Loan Calculators</h2>
            <p className="text-sm text-muted-foreground">Choose a calculator to estimate your loan costs</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {calculatorCards.map((calc) => (
              <a
                key={calc.href}
                href={calc.href}
                className="calc-card-hover block text-left bg-card border border-border rounded-lg p-3 hover:border-primary/30"
              >
                <div className={`w-8 h-8 rounded-md flex items-center justify-center mb-2 ${calc.color}`}>
                  <calc.icon className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-xs mb-0.5">{calc.label}</h3>
                <p className="text-[11px] text-muted-foreground leading-snug">{calc.desc}</p>
                <span className="inline-flex items-center text-[11px] text-primary font-medium mt-1">
                  Use Calculator <ChevronRight className="w-3 h-3 ml-0.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-0.5">Malaysia Loan Guides</h2>
              <p className="text-sm text-muted-foreground">Expert guides to help you make informed financial decisions</p>
            </div>
            <Button variant="outline" asChild className="hidden sm:flex">
              <a href="/guides">View All <ChevronRight className="w-4 h-4 ml-1" /></a>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {featuredArticles.map((article) => (
              <a
                key={article.slug}
                href={`/guides/${article.slug}`}
                className="calc-card-hover block text-left bg-card border border-border rounded-lg p-3.5 hover:border-primary/30"
              >
                <Badge variant="secondary" className={`text-xs mb-1.5 ${categoryColors[article.category] || ''}`}>
                  {article.category}
                </Badge>
                <h3 className="font-semibold text-sm mb-1.5 line-clamp-2">{article.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{article.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{article.readTime}</span>
                  <span>Updated {new Date(article.date).toLocaleDateString('en-MY', { month: 'short', year: 'numeric' })}</span>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-3 sm:hidden">
            <Button variant="outline" asChild>
              <a href="/guides">View All Guides <ChevronRight className="w-4 h-4 ml-1" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* How to Calculate Section */}
      <section className="py-4 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-center">
            How to Calculate Monthly Loan Repayment
          </h2>
          <div className="bg-card rounded-lg border border-border p-4 sm:p-5 space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              Calculating your monthly loan repayment in Malaysia depends on the type of loan and interest calculation method used by the bank. The two main methods are <strong>Reducing Balance</strong> and <strong>Flat Rate</strong>.
            </p>

            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">Reducing Balance Method</h3>
            <p>
              This is the most common method for home loans in Malaysia. The interest is calculated based on the remaining loan balance each month, meaning you pay less interest over time.
            </p>
            <div className="bg-muted rounded-md p-3 font-mono text-xs sm:text-sm text-center">
              M = P × [r(1+r)^n] / [(1+r)^n - 1]
            </div>
            <p>
              Where: <strong>P</strong> = Loan amount, <strong>r</strong> = Monthly interest rate (annual rate / 12), <strong>n</strong> = Total number of months
            </p>

            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">Flat Rate Method</h3>
            <p>
              This method is commonly used for car loans (hire purchase) in Malaysia. The interest is calculated on the original principal amount throughout the entire loan tenure.
            </p>
            <div className="bg-muted rounded-md p-3 font-mono text-xs sm:text-sm text-center">
              Monthly Payment = (P + P × R × Y) / (Y × 12)
            </div>
            <p>
              Where: <strong>P</strong> = Loan amount, <strong>R</strong> = Annual interest rate, <strong>Y</strong> = Loan tenure in years
            </p>

            <div className="mt-3 p-3 bg-primary/5 rounded-md">
              <p className="text-xs">
                <strong>Important:</strong> The effective interest rate for flat rate loans is approximately 1.8 to 2 times the stated flat rate. Always compare the effective rate when evaluating loan offers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            <details className="group border rounded-lg">
              <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">Are these loan calculators accurate?</summary>
              <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed"><p>Yes, our calculators use the same standard mathematical formulas that Malaysian banks use to compute loan repayments. The reducing balance formula (M = P × [r(1+r)^n] / [(1+r)^n - 1]) is the industry standard for home loans and personal loans, while the flat rate method is used for car loans under the Hire Purchase Act 1967. However, actual loan terms may vary based on the specific bank, loan product type, your credit profile, and any promotional rates being offered. The results should be used as close estimates for financial planning purposes. We recommend using the calculator results as a baseline and then verifying the exact figures with your preferred bank during the loan application process.</p></div>
            </details>
            <details className="group border rounded-lg">
              <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">How much does a typical Malaysian family spend on loan repayments?</summary>
              <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed"><p>According to Bank Negara Malaysia and the Department of Statistics Malaysia, the average Malaysian household debt stands at approximately 85-90% of GDP, making Malaysia one of the countries with the highest household debt in Asia. On average, Malaysian households allocate 35-45% of their monthly gross income towards debt servicing, including home loans, car loans, personal loans, credit cards, and hire purchase commitments. For middle-income families earning between RM 5,000 to RM 10,000 per month, the biggest expense categories are typically housing loans (RM 1,500-RM 3,000 per month) and car instalments (RM 500-RM 1,200 per month). This is precisely why tools like our loan calculators and DSR checker are essential — they help you understand your financial commitments before taking on additional debt. Financial planners recommend keeping total debt commitments below 40% of gross income, with housing costs alone not exceeding 30% of take-home pay to maintain a healthy financial buffer for savings and emergencies.</p></div>
            </details>
            <details className="group border rounded-lg">
              <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">What is a good DSR ratio for loan approval?</summary>
              <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed"><p>Your Debt Service Ratio (DSR) is one of the most important factors that Malaysian banks evaluate when reviewing your loan application. A DSR below 50% is considered excellent and gives you the highest chance of approval at the best interest rates. Most banks in Malaysia consider a DSR between 50-60% as acceptable for standard loan approval. If your DSR exceeds 60%, you may still be approved but could face higher interest rates or be asked to reduce your existing debts first. A DSR above 70% makes loan approval very difficult at most major banks, though some smaller institutions may still consider your application. To calculate your DSR, divide your total monthly debt commitments (including the proposed new loan) by your gross monthly income and multiply by 100. You can use our free DSR Calculator on this website to check your ratio instantly.</p></div>
            </details>
            <details className="group border rounded-lg">
              <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">What is the difference between flat rate and reducing balance?</summary>
              <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed"><p>These are the two main interest calculation methods used for loans in Malaysia, and understanding the difference is crucial before committing to any loan. Under the flat rate method (commonly used for car loans), interest is calculated on the original loan amount for the entire tenure, regardless of how much you have already repaid. This means a RM 70,000 loan at 3.5% flat rate over 7 years charges interest on RM 70,000 every year, even in year 7 when you have already repaid most of the principal. The effective interest rate is approximately 1.8 to 2 times the stated flat rate. Under the reducing balance method (used for home loans and most personal loans), interest is recalculated each month based on the remaining outstanding balance. As you repay the principal over time, the interest portion decreases, meaning you pay less total interest overall. For the same loan amount and tenure, a reducing balance loan will always result in lower total interest compared to a flat rate loan.</p></div>
            </details>
            <details className="group border rounded-lg">
              <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">What should I prepare before applying for a loan in Malaysia?</summary>
              <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed"><p>Preparation is key to a smooth loan application process in Malaysia. Regardless of the loan type, you should prepare the following documents and information at least 2-3 months before applying. First, ensure your CCRIS and CTOS reports are clean by checking them through Bank Negara Malaysia's portal and myCTOS.com respectively — settle any outstanding defaults or late payments immediately. Second, gather 3 months of latest payslips, 6 months of bank statements showing salary credits, your latest EPF statement (via KWSP i-Akaun), and your income tax BE form or B/BE form for the most recent assessment year. For self-employed individuals, additional documents such as business registration (SSM), 2 years of audited financial statements or profit and loss accounts, and commission statements may be required. Third, avoid applying for new credit cards or loans in the 6 months preceding your application, as each application creates a credit inquiry record that may raise concerns. Finally, reduce your credit card utilisation to below 50% of the total limit, as this positively impacts your credit profile and improves your DSR ratio.</p></div>
            </details>
            <details className="group border rounded-lg">
              <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">What are the hidden costs of taking a loan in Malaysia?</summary>
              <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed"><p>Many borrowers focus only on the monthly instalment amount but overlook the various additional costs associated with taking a loan in Malaysia. For home loans, these hidden costs include stamp duty on the loan agreement (approximately 0.5% of the loan amount), legal fees for the Sale and Purchase Agreement (following the Bar Council prescribed scale), valuation fees (RM 1,000-RM 5,000 depending on property value), MRTA or MLTA mortgage insurance (RM 200-RM 800 per year), and fire insurance premiums. For car loans, additional costs include road tax and insurance premiums (which are often bundled into the financing), processing fees (RM 200-RM 500), and late payment penalties (typically 1% per month on overdue amounts). Personal loans may come with processing fees (1-3% of the loan amount), annual fees, and early settlement charges. It is important to factor in all these costs when budgeting for a loan, not just the monthly instalment. Our calculators on this website help you estimate the core repayment amounts, and we recommend using our Legal Fee Calculator and Stamp Duty Calculator to get a complete picture of all upfront costs before committing to any loan.</p></div>
            </details>
            <details className="group border rounded-lg">
              <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">How do I compare loan offers from different banks in Malaysia?</summary>
              <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed"><p>Comparing loan offers properly requires looking beyond just the advertised interest rate. Here is a systematic approach to evaluating loan offers from Malaysian banks. First, compare the effective interest rate rather than the flat rate, especially for car loans where the difference can be significant (a 3% flat rate is actually about 5.5% effective). Second, check the lock-in period — most home loans have a 3-5 year lock-in during which early settlement incurs a penalty of 2-3% of the outstanding amount. Third, compare the total repayment amount over the full tenure, not just the monthly instalment, as a lower monthly payment spread over a longer tenure often means you pay much more in total interest. Fourth, look at the flexibility features such as the ability to make additional principal payments, offset accounts, and the option to switch between fixed and floating rates. Fifth, consider the bank's customer service quality, online banking platform, and branch network, as you will be dealing with this institution for many years. Finally, negotiate — banks in Malaysia are often willing to match or beat a competitor's offer, especially if you have a strong credit profile and stable income. Always get written offers from at least 3 banks before making your final decision.</p></div>
            </details>
            <details className="group border rounded-lg">
              <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium hover:underline">What types of loans are available in Malaysia?</summary>
              <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed"><p>Malaysia offers a wide variety of loan products to suit different financial needs. The most common types include home loans (mortgages) for purchasing residential or commercial properties, car loans (hire purchase) for buying new or used vehicles, and personal loans for personal expenses such as renovation, education, or emergency needs. Home loans typically offer the lowest interest rates (4.0-4.8%) with tenures up to 35 years, while car loans use flat rate interest (2.5-4.0%) with maximum tenures of 9 years. Personal loans generally have higher interest rates (6-18% per annum) and shorter tenures of 1-7 years. Additionally, there are specialised loan products such as ASB financing (for EPF members to invest in Amanah Saham Bumiputera), business loans for SMEs, education loans, and Islamic financing products that comply with Shariah principles. Government employees also have access to cooperative loans and pension-based financing through schemes like LPPSA. Each loan type has its own eligibility criteria, interest calculation method, and repayment terms, which is why we provide dedicated calculators for each category to help you make informed decisions.</p></div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
