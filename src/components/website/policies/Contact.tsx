'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FormEvent, useState } from 'react';
import { MapPin, Clock, Send, Info, ShieldAlert, AlertTriangle } from 'lucide-react';

export default function Contact() {
  const [showSubmitNotice, setShowSubmitNotice] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowSubmitNotice(true);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <span>/</span>
          <span className="text-foreground font-medium">Contact Us</span>
        </div>
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-muted-foreground">
          Have a question or feedback? We would love to hear from you.
        </p>
      </div>

      {/* Privacy Warning */}
      <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200">
        <div className="flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-red-700 mb-1">Do Not Send Sensitive Information</p>
            <p className="text-xs text-red-700/80 leading-relaxed">
              Please do not send sensitive personal information, bank account details, identity documents, loan application documents, credit reports or confidential financial data through email or this contact form.
            </p>
          </div>
        </div>
      </div>

      {/* Important Note */}
      <div className="mb-6 p-4 rounded-lg bg-amber-50 border border-amber-200">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-amber-700 mb-1">Important Note</p>
            <p className="text-xs text-amber-700/80 leading-relaxed">
              MalaysiaLoanCalculator.com is an independent informational website. We are not a bank, lender, broker, credit reporting agency or financial adviser. We cannot approve loans, provide official interest rates, access your credit report or make financial decisions on your behalf.
            </p>
            <p className="text-xs text-amber-700/80 leading-relaxed mt-2">
              All calculator results are estimates for general planning purposes only. Please confirm final figures with your bank, lawyer, licensed financial adviser or relevant professional before making any financial decision.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your full name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What is this about?" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." rows={5} required />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
              {showSubmitNotice && (
                <p className="text-sm text-foreground">
                  Thank you. For actual inquiries, please email us directly at malaysialoancalculator@proton.me.
                </p>
              )}
              <Alert className="bg-muted/50">
                <Info className="h-4 w-4" />
                <AlertDescription className="text-xs text-muted-foreground">
                  This is a demonstration contact form. For actual inquiries, please reach out to us via email at the address provided.
                </AlertDescription>
              </Alert>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <Card className="shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <p className="font-medium text-sm">Email</p>
                  <a href="mailto:malaysialoancalculator@proton.me" className="text-sm text-muted-foreground hover:text-primary transition-colors">malaysialoancalculator@proton.me</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Location</p>
                  <p className="text-sm text-muted-foreground">Kuala Lumpur, Malaysia</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Response Time</p>
                  <p className="text-sm text-muted-foreground">Within 1-2 business days</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-sm mb-2">Quick Help</h3>
              <p className="text-xs text-muted-foreground mb-3">
                Before contacting us, you may find your answer in our comprehensive guides or FAQ sections.
              </p>
              <div className="space-y-2">
                <a href="/guides" className="block text-xs text-primary hover:underline">
                  → Browse Loan Guides
                </a>
                <a href="/about" className="block text-xs text-primary hover:underline">
                  → About LoanCalc Malaysia
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ about contacting */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Common Questions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="shadow-sm">
            <CardContent className="pt-5">
              <h3 className="font-semibold text-sm mb-2">How accurate are the calculators?</h3>
              <p className="text-xs text-muted-foreground">
                Our calculators use standard formulas aligned with Malaysian banking practices. Results are estimates and should be verified with your bank.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardContent className="pt-5">
              <h3 className="font-semibold text-sm mb-2">Do you provide financial advice?</h3>
              <p className="text-xs text-muted-foreground">
                No, we are an educational resource. For personalised financial advice, please consult a licensed financial advisor.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardContent className="pt-5">
              <h3 className="font-semibold text-sm mb-2">Can you help me apply for a loan?</h3>
              <p className="text-xs text-muted-foreground">
                We do not process loan applications. Please contact your preferred bank or financial institution directly.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardContent className="pt-5">
              <h3 className="font-semibold text-sm mb-2">How do I report a calculator error?</h3>
              <p className="text-xs text-muted-foreground">
                Please use the contact form above or email us directly. We appreciate your feedback and will investigate promptly.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
