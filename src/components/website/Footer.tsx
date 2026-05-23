'use client';

import { AlertTriangle } from 'lucide-react';

const calculatorLinks = [
  { label: 'Car Loan Calculator', href: '/car-loan-calculator' },
  { label: 'Home Loan Calculator', href: '/home-loan-calculator' },
  { label: 'Personal Loan Calculator', href: '/personal-loan-calculator' },
  { label: 'DSR Calculator', href: '/dsr-calculator' },
  { label: 'Legal Fee Calculator', href: '/legal-fee-calculator' },
  { label: 'Early Settlement Calculator', href: '/early-settlement-calculator' },
  { label: 'Valuation Fee Calculator', href: '/valuation-fee-calculator' },
];

const siteLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Loan Guides', href: '/guides' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' },
  { label: 'Disclaimer', href: '/disclaimer' },
];

export default function Footer() {
  const openCookiePreferences = () => {
    if (typeof window === 'undefined') return;
    window.dispatchEvent(new Event('mlc-open-cookie-preferences'));
  };
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xs">
                LC
              </div>
              <div>
                <div className="font-bold text-base">LoanCalc</div>
                <div className="text-xs opacity-60">Malaysia</div>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed mb-4">
              Free online loan calculators for Malaysians. Estimate your monthly repayments, total interest, and plan your finances better with our easy-to-use tools.
            </p>
          </div>

          {/* Calculators Column */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-80">Calculators</h3>
            <ul className="space-y-2">
              {calculatorLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides Column */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-80">Guides & Articles</h3>
            <ul className="space-y-2">
              <li>
                <a href="/guides" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                  All Loan Guides
                </a>
              </li>
              <li>
                <a href="/guides/how-to-calculate-car-loan-malaysia" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                  Car Loan Guide
                </a>
              </li>
              <li>
                <a href="/guides/home-loan-monthly-repayment-malaysia" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                  Home Loan Guide
                </a>
              </li>
              <li>
                <a href="/guides/personal-loan-calculator-malaysia-guide" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                  Personal Loan Guide
                </a>
              </li>
              <li>
                <a href="/guides/dsr-calculator-malaysia-guide" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                  DSR Guide
                </a>
              </li>
              <li>
                <a href="/guides/legal-fee-stamp-duty-guide-malaysia" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                  Legal Fees Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Site Column */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-80">Site</h3>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-xs opacity-60 flex items-center gap-3">
              <p>&copy; 2026 LoanCalc Malaysia. All rights reserved.</p>
              <button type="button" onClick={openCookiePreferences} className="underline hover:no-underline">Cookie Preferences</button>
            </div>
            <p className="text-xs opacity-90 text-center sm:text-right max-w-lg">
              <AlertTriangle className="w-3 h-3 inline mr-1" />
              Disclaimer: Calculators are for educational and estimation purposes only. Results should not be considered financial advice. Please consult your bank, lawyer, licensed financial adviser, or relevant professional before making any financial decision.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
