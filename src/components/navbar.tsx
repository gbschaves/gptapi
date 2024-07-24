// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';


const Navbar: React.FC = () => {
  return (
    <nav className="flex space-x-4">
      <Link href="/" className="text-white hover:text-customOrange">
        Home
      </Link>
      <Link href='/about' className="text-white hover:text-customOrange">
        Sobre
      </Link>
      <Link href='/contact' className="text-white hover:text-customOrange">
        Contato
      </Link>
    </nav>
  );
};

export default Navbar;
