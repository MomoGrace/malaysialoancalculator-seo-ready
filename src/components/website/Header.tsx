'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calculator, Menu, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

const navLinks = [
  { label: 'Car Loan', href: '/car-loan-calculator' },
  { label: 'Home Loan', href: '/home-loan-calculator' },
  { label: 'Legal Fees', href: '/legal-fee-calculator' },
  { label: 'Personal Loan', href: '/personal-loan-calculator' },
  { label: 'DSR', href: '/dsr-calculator' },
  { label: 'Settlement', href: '/early-settlement-calculator' },
  { label: 'Valuation', href: '/valuation-fee-calculator' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      {/* Top disclaimer bar */}
      <div className="bg-primary text-primary-foreground text-xs text-center py-1.5 px-4">
        Free Malaysia loan calculators for education and planning. Results are estimates only.
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-sm">
              LC
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-foreground">LoanCalc</span>
              <span className="text-xs text-muted-foreground leading-tight">Malaysia</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-2 py-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-md hover:bg-primary/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/">
                <Calculator className="w-4 h-4 mr-1.5" />
                Calculate Now
              </Link>
            </Button>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex items-center gap-2 p-4 border-b">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xs">
                    LC
                  </div>
                  <span className="font-bold text-lg">LoanCalc Malaysia</span>
                </div>
                <nav className="flex flex-col p-4 gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                    >
                      {link.label}
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </Link>
                  ))}
                  <hr className="my-2" />
                  <Link
                    href="/guides"
                    onClick={closeMenu}
                    className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                  >
                    Loan Guides
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </Link>
                  <Link
                    href="/about"
                    onClick={closeMenu}
                    className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                  >
                    About Us
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </Link>
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                  >
                    Contact
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
