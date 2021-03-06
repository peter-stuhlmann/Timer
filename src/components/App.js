import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
import HeaderComponent from './Header';
import MainNavigation from './HeaderNavigation/MainNavigation';
import FooterComponent from './Footer';
import ContextProvider from '../Context';
import Router from './Router';
import ScrollToTop from './ScrollToTop';
import CookieConsentBanner from './CookieConsent';

export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <GlobalStyles />
        <CookieConsentBanner />
        <ScrollToTop />
        <HeaderComponent />
        <MainNavigation />
        <Router />
        <FooterComponent />
      </BrowserRouter>
    </ContextProvider>
  );
}
