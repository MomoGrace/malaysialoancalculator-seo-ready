'use client';

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <span>/</span>
          <span className="text-foreground font-medium">Terms of Use</span>
        </div>
        <h1 className="text-3xl font-bold mb-2">Terms of Use</h1>
        <p className="text-muted-foreground">Last updated: January 2025</p>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 sm:p-8 space-y-8 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing and using LoanCalc Malaysia (the &quot;Website&quot;), you agree to be bound by these Terms of Use (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Website. We reserve the right to modify these Terms at any time, and your continued use of the Website constitutes acceptance of any modifications.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">2. Description of Service</h2>
          <p>
            LoanCalc Malaysia provides free online financial calculators and educational content related to loans in Malaysia. Our calculators are designed to help users estimate monthly repayments, total interest, and other loan-related costs for educational and planning purposes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">3. No Financial Advice</h2>
          <p>
            The information, calculators, and content provided on this Website are for general informational and educational purposes only. They do not constitute financial advice, investment advice, loan recommendations, or professional consultation. You should not rely on any information on this Website as a substitute for professional financial advice from a licensed financial advisor.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">4. Accuracy of Information</h2>
          <p>
            While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, calculators, or related graphics contained on the Website. Calculator results are estimates and may differ from actual loan terms offered by financial institutions.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">5. Use of Calculators</h2>
          <p className="mb-2">When using our calculators, you agree to:</p>
          <ul className="space-y-1.5 list-disc list-inside ml-2">
            <li>Use the calculators for personal, non-commercial purposes only</li>
            <li>Not rely solely on calculator results for financial decisions</li>
            <li>Verify all results with your bank or financial institution</li>
            <li>Understand that results are estimates based on the information you provide</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">6. Intellectual Property</h2>
          <p>
            All content on this Website, including text, graphics, logos, calculators, and software, is the property of LoanCalc Malaysia and is protected by intellectual property laws. You may not reproduce, distribute, modify, create derivative works from, or commercially exploit any content from this Website without our prior written consent.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">7. Third-Party Links</h2>
          <p>
            This Website may contain links to third-party websites or services. These links are provided for your convenience only. We do not endorse or assume responsibility for the content, privacy policies, or practices of any third-party websites.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, LoanCalc Malaysia shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from or in connection with your use of the Website, including but not limited to any financial losses resulting from reliance on calculator results or website content.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">9. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless LoanCalc Malaysia, its owners, operators, and contributors from any claims, damages, losses, or expenses arising from your use of the Website or violation of these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">10. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of Malaysia. Any disputes arising from these Terms or your use of the Website shall be subject to the exclusive jurisdiction of the courts of Malaysia.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">11. Contact</h2>
          <p>
            If you have any questions about these Terms of Use, please contact us through our <a href="/contact" className="text-primary underline">Contact page</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
