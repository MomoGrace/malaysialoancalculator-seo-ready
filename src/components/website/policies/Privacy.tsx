'use client';

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <span>/</span>
          <span className="text-foreground font-medium">Privacy Policy</span>
        </div>
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: January 2025</p>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 sm:p-8 space-y-8 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">1. Introduction</h2>
          <p>
            LoanCalc Malaysia (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at LoanCalc Malaysia (the &quot;Service&quot;).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">2. Information We Collect</h2>
          <p className="mb-2">We may collect the following types of information:</p>
          <ul className="space-y-1.5 list-disc list-inside ml-2">
            <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited, time spent on pages, and navigation patterns.</li>
            <li><strong>Device Information:</strong> Browser type, operating system, device type, screen resolution, and language preferences.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance your browsing experience and analyse website traffic.</li>
            <li><strong>Calculator Inputs:</strong> Data you enter into our calculators is processed locally in your browser and is not stored on our servers.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">3. How We Use Your Information</h2>
          <p className="mb-2">We use the collected information for the following purposes:</p>
          <ul className="space-y-1.5 list-disc list-inside ml-2">
            <li>To provide, maintain, and improve our website and calculators</li>
            <li>To analyse website usage and trends to enhance user experience</li>
            <li>To display relevant advertisements through Google AdSense and other advertising services</li>
            <li>To detect, prevent, and address technical issues</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">4. Cookies and Advertising</h2>
          <p className="mb-2">
            We use Google AdSense to display advertisements on our website. Google AdSense may use cookies and web beacons to serve ads based on your prior visits to our website and other websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.
          </p>
          <p>
            You may opt out of personalised advertising by visiting <a href="https://www.google.com/settings/ads" className="text-primary underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>. You can also opt out of third-party vendor cookies for personalised advertising by visiting <a href="https://www.aboutads.info/choices/" className="text-primary underline" target="_blank" rel="noopener noreferrer">aboutads.info</a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">5. Third-Party Services</h2>
          <p className="mb-2">We may use the following third-party services:</p>
          <ul className="space-y-1.5 list-disc list-inside ml-2">
            <li><strong>Google Analytics:</strong> For website usage analysis</li>
            <li><strong>Google AdSense:</strong> For displaying advertisements</li>
          </ul>
          <p className="mt-2">
            These services may collect information sent by your browser as part of a web page request, such as cookies or your IP address. Please refer to their respective privacy policies for more information.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">6. Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">7. Children&apos;s Privacy</h2>
          <p>
            Our Service is not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">8. Your Rights</h2>
          <p>Depending on your location, you may have the following rights regarding your personal data:</p>
          <ul className="space-y-1.5 list-disc list-inside ml-2 mt-2">
            <li>The right to access your personal data</li>
            <li>The right to rectify inaccurate personal data</li>
            <li>The right to erasure of your personal data</li>
            <li>The right to restrict processing of your personal data</li>
            <li>The right to data portability</li>
            <li>The right to object to processing of your personal data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">9. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="/contact" className="text-primary underline">our Contact page</a> or email us at malaysialoancalculator@proton.me.
          </p>
        </section>
      </div>
    </div>
  );
}
