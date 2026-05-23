'use client';

import { useEffect, useMemo, useState } from 'react';

type ConsentState = {
  essential: true;
  analytics: boolean;
  advertising: boolean;
  choice: 'accept_all' | 'reject_non_essential' | 'custom';
  updatedAt: string;
};

const STORAGE_KEY = 'malaysialoancalculator_cookie_consent_v1';
const OPEN_EVENT = 'mlc-open-cookie-preferences';

function applyConsentMode(analytics: boolean, advertising: boolean) {
  if (typeof window === 'undefined' || typeof (window as any).gtag !== 'function') return;

  (window as any).gtag('consent', 'update', {
    ad_storage: advertising ? 'granted' : 'denied',
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_user_data: advertising ? 'granted' : 'denied',
    ad_personalization: advertising ? 'granted' : 'denied',
  });
}

function setDefaultConsentMode() {
  if (typeof window === 'undefined' || typeof (window as any).gtag !== 'function') return;

  (window as any).gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
}

export default function CookieConsent() {
  const [initialState] = useState(() => {
    if (typeof window === 'undefined') {
      return { isVisible: false, analytics: false, advertising: false };
    }
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return { isVisible: true, analytics: false, advertising: false };
      const parsed = JSON.parse(raw) as Partial<ConsentState>;
      return {
        isVisible: false,
        analytics: !!parsed.analytics,
        advertising: !!parsed.advertising,
      };
    } catch {
      return { isVisible: true, analytics: false, advertising: false };
    }
  });

  const [isVisible, setIsVisible] = useState(initialState.isVisible);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(initialState.analytics);
  const [advertisingEnabled, setAdvertisingEnabled] = useState(initialState.advertising);

  useEffect(() => {
    setDefaultConsentMode();
    if (!isVisible) {
      applyConsentMode(analyticsEnabled, advertisingEnabled);
    }
  }, []);

  useEffect(() => {
    const handler = () => {
      setIsVisible(true);
      setIsPreferencesOpen(true);
    };

    window.addEventListener(OPEN_EVENT, handler);
    return () => window.removeEventListener(OPEN_EVENT, handler);
  }, []);

  const legalLinks = useMemo(
    () => (
      <p className="text-xs text-gray-600 leading-relaxed">
        Read our <a className="underline hover:no-underline" href="/privacy">Privacy Policy</a> and{' '}
        <a className="underline hover:no-underline" href="/terms">Terms</a>.
      </p>
    ),
    []
  );

  const persistConsent = (choice: ConsentState['choice'], analytics: boolean, advertising: boolean) => {
    const payload: ConsentState = {
      essential: true,
      analytics,
      advertising,
      choice,
      updatedAt: new Date().toISOString(),
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    applyConsentMode(analytics, advertising);
    setIsVisible(false);
    setIsPreferencesOpen(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-3 sm:bottom-4 z-[1200] w-[calc(100%-24px)] max-w-[860px] rounded-xl border border-gray-200 bg-white shadow-lg">
      <div className="p-4 sm:p-5">
        <p className="text-sm text-gray-800 leading-relaxed">
          We use cookies to improve your browsing experience, understand site usage, and support ads. You can accept all cookies, reject non-essential cookies, or manage your preferences.
        </p>
        <div className="mt-2">{legalLinks}</div>
        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" className="px-3 py-2 rounded-md text-sm font-medium bg-gray-900 text-white hover:bg-black" onClick={() => persistConsent('accept_all', true, true)}>Accept All</button>
          <button type="button" className="px-3 py-2 rounded-md text-sm font-medium border border-gray-300 text-gray-800 hover:bg-gray-100" onClick={() => persistConsent('reject_non_essential', false, false)}>Reject Non-Essential</button>
          <button type="button" className="px-3 py-2 rounded-md text-sm font-medium border border-gray-300 text-gray-800 hover:bg-gray-100" onClick={() => setIsPreferencesOpen((v) => !v)} aria-expanded={isPreferencesOpen}>Manage Preferences</button>
        </div>

        {isPreferencesOpen && (
          <div className="mt-4 border-t border-gray-200 pt-4 space-y-3">
            <label className="flex items-center justify-between gap-3 text-sm">
              <span className="text-gray-800">Essential Cookies (Always Active)</span>
              <input type="checkbox" checked disabled aria-label="Essential Cookies always enabled" />
            </label>
            <label className="flex items-center justify-between gap-3 text-sm">
              <span className="text-gray-800">Analytics Cookies</span>
              <input type="checkbox" checked={analyticsEnabled} onChange={(e) => setAnalyticsEnabled(e.target.checked)} aria-label="Analytics Cookies" />
            </label>
            <label className="flex items-center justify-between gap-3 text-sm">
              <span className="text-gray-800">Advertising Cookies</span>
              <input type="checkbox" checked={advertisingEnabled} onChange={(e) => setAdvertisingEnabled(e.target.checked)} aria-label="Advertising Cookies" />
            </label>

            <div className="pt-1">
              <button type="button" className="px-3 py-2 rounded-md text-sm font-medium bg-gray-900 text-white hover:bg-black" onClick={() => persistConsent('custom', analyticsEnabled, advertisingEnabled)}>Save Preferences</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
