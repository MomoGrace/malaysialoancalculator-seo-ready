'use client';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <span>/</span>
          <span className="text-foreground font-medium">About</span>
        </div>
        <h1 className="text-3xl font-bold mb-2">About MalaysiaLoanCalculator</h1>
      </div>

      <div className="prose prose-slate max-w-none space-y-8">
        {/* Introduction */}
        <div className="bg-card border border-border rounded-xl p-6">
          <p className="text-muted-foreground leading-relaxed">
            MalaysiaLoanCalculator is an independent Malaysia-focused loan calculator and personal finance tools website created to help users better understand estimated home loan repayments, debt service ratio, stamp duty, legal fees, valuation fees and property affordability.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Buying a property in Malaysia can be confusing because the total cost is not only the monthly loan repayment. Buyers may also need to consider upfront costs, loan tenure, interest rate changes, DSR limits, legal documentation fees, stamp duty, valuation fees and other personal commitments.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            We created MalaysiaLoanCalculator to make these topics easier to understand through practical calculators, plain-language explanations and Malaysia-specific examples.
          </p>
        </div>

        {/* Who this site is for */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3">Who This Site Is For</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            MalaysiaLoanCalculator is built for:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">&#x2022;</span>
              <span>First-time home buyers estimating monthly repayments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">&#x2022;</span>
              <span>Property buyers comparing different loan amounts and tenures</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">&#x2022;</span>
              <span>Homeowners reviewing refinancing possibilities</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">&#x2022;</span>
              <span>Agents who need a simple reference for client discussions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">&#x2022;</span>
              <span>Individuals learning how DSR and affordability checks work</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">&#x2022;</span>
              <span>Malaysians planning property-related budgets before speaking to a bank</span>
            </li>
          </ul>
        </div>

        {/* What our tools estimate */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3">What Our Tools Estimate</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our calculators and guides may help estimate:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">&#x2022;</span>
              <span>Monthly home loan repayment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">&#x2022;</span>
              <span>Debt service ratio / DSR</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">&#x2022;</span>
              <span>Stamp duty</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">&#x2022;</span>
              <span>Legal fees</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">&#x2022;</span>
              <span>Valuation fees</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">&#x2022;</span>
              <span>Loan affordability</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">&#x2022;</span>
              <span>Total property buying cost considerations</span>
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            The results are intended for planning and education only. They should not be treated as final bank approval, legal advice, valuation advice, tax advice or financial advice.
          </p>
        </div>

        {/* Important disclaimer */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3">Important Disclaimer</h2>
          <p className="text-muted-foreground leading-relaxed">
            MalaysiaLoanCalculator is not a bank, lender, loan broker, financial advisor, law firm, valuation firm, tax advisor or government website.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            We do not provide loans, collect loan applications, approve financing or represent any financial institution.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Calculator results are estimates only and may not reflect the latest bank policies, legal fee scales, stamp duty exemptions, valuation practices, promotional rates, government rules or individual circumstances.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Before making property, loan or legal decisions, users should always verify details with banks, licensed financial professionals, lawyers, licensed valuers, official sources or other qualified professionals.
          </p>
        </div>

        {/* Our goal */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3">Our Goal</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our goal is to make Malaysia property financing easier to understand, especially for users who want a simple starting point before discussing details with a bank, lawyer, agent or adviser.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            We continue to improve MalaysiaLoanCalculator with more calculators, practical guides and educational resources for Malaysia property buyers.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3">Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you notice an error, want to suggest an improvement, or need to contact us, please use the Contact page or email us at:
          </p>
          <p className="text-primary font-medium mt-2">
            malaysialoancalculator@proton.me
          </p>
        </div>
      </div>
    </div>
  );
}
