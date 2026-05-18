'use client';

import { AlertTriangle } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <span>/</span>
          <span className="text-foreground font-medium">Disclaimer</span>
        </div>
        <h1 className="text-3xl font-bold mb-2">Disclaimer</h1>
        <p className="text-muted-foreground">Last updated: January 2025</p>
      </div>

      <div className="space-y-6">
        {/* Main Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 sm:p-8">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 mt-0.5 flex-shrink-0" />
            <h2 className="text-lg font-bold text-amber-800">Important Financial Disclaimer</h2>
          </div>
          <p className="text-sm text-amber-900 leading-relaxed mb-3">
            The information provided on LoanCalc Malaysia is for general informational and educational purposes only. It is not intended to be and should not be construed as financial advice, investment advice, tax advice, or professional consultation of any kind.
          </p>
          <p className="text-sm text-amber-900 leading-relaxed">
            You should always seek the advice of a qualified, licensed financial professional before making any financial decisions. The calculators on this website provide estimates only and should not be relied upon as the sole basis for any financial decision.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 sm:p-8 space-y-6 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">General Disclaimer</h2>
            <p>
              LoanCalc Malaysia is an independent, educational website that provides free financial calculators and informational content about loans in Malaysia. We are not a licensed financial institution, bank, credit provider, or insurance company. We do not offer loans, provide financial advice, or act as an intermediary between borrowers and lenders.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">Calculator Results</h2>
            <p>
              All calculator results generated on this website are estimates based on the information you provide and standard mathematical formulas. Actual loan terms, interest rates, monthly payments, and total costs may vary depending on:
            </p>
            <ul className="space-y-1.5 list-disc list-inside ml-2 mt-2">
              <li>The specific financial institution or bank</li>
              <li>The type of loan product selected</li>
              <li>Your individual credit profile and financial circumstances</li>
              <li>Current market conditions and regulatory requirements</li>
              <li>Additional fees, charges, or insurance requirements</li>
              <li>Promotional or special offers from financial institutions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">Accuracy of Information</h2>
            <p>
              While we make every effort to ensure the accuracy of our calculators and the information on this website, we cannot guarantee that all information is complete, current, or free from errors. Interest rates, government policies, and banking practices may change without notice. Users are encouraged to verify all information with the relevant financial institutions before making any decisions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">No Endorsement</h2>
            <p>
              Reference to any specific bank, financial institution, product, or service on this website does not constitute or imply any endorsement, recommendation, or favouring by LoanCalc Malaysia. We are not affiliated with, endorsed by, or connected to any bank or financial institution unless explicitly stated.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">External Links</h2>
            <p>
              This website may contain links to external websites. These links are provided for convenience and informational purposes only. We have no control over the content, accuracy, or availability of external sites. The inclusion of any link does not imply endorsement by LoanCalc Malaysia.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">Limitation of Liability</h2>
            <p>
              In no event shall LoanCalc Malaysia, its owners, contributors, or affiliates be liable for any loss or damage, including without limitation, direct, indirect, incidental, special, or consequential damages, arising from the use of this website or reliance on any information or calculator results provided herein.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3"> Malaysian Law</h2>
            <p>
              This website is designed for use in Malaysia and provides information relevant to Malaysian loan products and practices. Users from other countries should be aware that the information may not be applicable to their jurisdiction and should seek local professional advice.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
