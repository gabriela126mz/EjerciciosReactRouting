import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const Layout = ({children}) => {
  return (
    <>
      <div className="layout">
        <NavigationBar />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
