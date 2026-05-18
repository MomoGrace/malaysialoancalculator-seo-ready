'use client';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <span>/</span>
          <span className="text-foreground font-medium">About Us</span>
        </div>
        <h1 className="text-3xl font-bold mb-2">About LoanCalc Malaysia</h1>
        <p className="text-muted-foreground">
          Empowering Malaysians with free, accurate, and easy-to-use financial calculators.
        </p>
      </div>

      <div className="prose prose-slate max-w-none space-y-8">
        {/* Mission */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            LoanCalc Malaysia was created with a simple mission: to provide every Malaysian with free, reliable, and easy-to-understand financial calculators. We believe that financial literacy is the foundation of sound financial decisions, and our tools are designed to help you plan your loans, compare options, and make informed choices about your financial future.
          </p>
        </div>

        {/* What We Offer */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3">What We Offer</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our website provides a comprehensive suite of financial calculators tailored specifically for the Malaysian market:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>Car Loan Calculator</strong> — Calculate monthly instalments using Malaysia&apos;s flat rate method</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>Home Loan Calculator</strong> — Estimate mortgage repayments using reducing balance method</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>Personal Loan Calculator</strong> — Compare flat rate and reducing balance options</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>DSR Calculator</strong> — Assess your debt service ratio for loan eligibility</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>Legal Fee Calculator</strong> — Estimate stamp duty and legal costs for property purchases</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>Early Settlement Calculator</strong> — Calculate potential savings from early loan repayment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>Valuation Fee Calculator</strong> — Estimate property valuation costs</span>
            </li>
          </ul>
        </div>

        {/* Commitment to Accuracy */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3">Commitment to Accuracy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We take accuracy seriously. Our calculators use standard mathematical formulas and follow Malaysian banking practices. However, we want to emphasise that our calculators provide estimates for educational and planning purposes only. Actual loan terms, interest rates, and costs may vary depending on the financial institution, loan product, and individual circumstances.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            We regularly review and update our calculators to ensure they reflect current market conditions and regulations in Malaysia.
          </p>
        </div>

        {/* Educational Content */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3">Educational Content</h2>
          <p className="text-muted-foreground leading-relaxed">
            Beyond calculators, we provide comprehensive guides and articles covering various aspects of loans and personal finance in Malaysia. Our content is written to help you understand loan concepts, compare options, and navigate the Malaysian financial landscape with confidence.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Topics covered include loan comparison guides, tips for improving loan approval chances, understanding credit reports, and explanations of legal fees and charges.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3">Important Disclaimer</h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            LoanCalc Malaysia is an independent educational website and is not affiliated with any bank, financial institution, or government agency. The information and calculator results provided on this website are for general informational and educational purposes only. They do not constitute financial advice, loan offers, or guarantees of approval. Always consult with a licensed financial advisor or your bank for personalised financial advice.
          </p>
        </div>
      </div>
    </div>
  );
}
