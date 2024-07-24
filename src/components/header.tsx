// components/Header.tsx
import React from 'react';
import Navbar from '@/components/navbar';
import { Home } from '@mui/icons-material';

const Header: React.FC = () => {
  return (
    <header className="bg-customDarkGrey p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <a className="flex items-center space-x-2" href='/'>
          <img className='h-7 transition-opacity ease-in-out hover:opacity-50' src="https://sgc.descomplique.com.br/img/logo-descom-branco.png"></img>
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
