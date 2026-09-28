import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../logo.png';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5 sm:py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
          <img src={logo} alt="Alpha Inteligence logo" className="h-10 w-10 rounded-xl object-contain" />
          <span className="max-w-[11rem] truncate text-base font-bold tracking-tight text-slate-900 sm:max-w-none sm:text-xl">Alpha Inteligence</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navigationLinks.map((link) => (
            link.name === 'About' ? (
              <Link key={link.name} to={link.path} className="text-sm font-medium text-slate-600 transition hover:text-blue-600">{link.name}</Link>
            ) : (
              <NavLink key={link.name} to={link.path} className={({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>{link.name}</NavLink>
            )
          ))}
          <Link to="/signin" className="text-sm font-semibold text-blue-600 transition hover:text-blue-800">Sign in</Link>
          <Link to="/contact" className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">Get Started</Link>
        </div>

        <button className="rounded-lg p-2 text-slate-700 md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle navigation menu" aria-expanded={isMobileMenuOpen}>
          <span className="text-2xl">{isMobileMenuOpen ? '×' : '☰'}</span>
        </button>
      </nav>

      {isMobileMenuOpen && <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
        <div className="flex flex-col gap-4">
          {navigationLinks.map((link) => <Link key={link.name} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-slate-700 hover:text-blue-600">{link.name}</Link>)}
          <Link to="/signin" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-blue-600 hover:text-blue-800">Sign in</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="rounded-lg bg-blue-600 px-4 py-2.5 text-center font-semibold text-white">Get Started</Link>
        </div>
      </div>}
    </header>
  );
}

export default Navbar;
