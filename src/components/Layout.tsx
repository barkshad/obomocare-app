import React, { useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useContent } from '../contexts/ContentContext';
import { Loading } from './Loading';
import { PageTransition } from './PageTransition';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = ReactRouterDOM.useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const { loading } = useContent();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (loading && !isAdmin) {
    return <Loading />;
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      {!isAdmin && <Navbar />}
      <main id="main">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      {!isAdmin && <Footer />}
    </>
  );
};

