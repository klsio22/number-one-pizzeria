import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

function Loyout({ children }) {
  return (
    <div>
      <>
        <NavBar />

        {children}

        <Footer />
      </>
    </div>
  );
}

export default Loyout;
