import { Link } from 'react-router-dom';

function Footer() {
  return <footer className="bg-slate-950 text-slate-300">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-3 lg:px-8">
      <div><p className="text-xl font-bold text-white">Alpha Inteligence</p><p className="mt-4 max-w-sm text-sm leading-6">Helping students move confidently from learning to meaningful professional experience.</p></div>
      <div><p className="font-semibold text-white">Explore</p><div className="mt-4 flex flex-col gap-3 text-sm"><Link to="/" className="hover:text-white">Home</Link><Link to="/services" className="hover:text-white">Services</Link><Link to="/contact" className="hover:text-white">Contact</Link></div></div>
      <div><p className="font-semibold text-white">Contact</p><p className="mt-4 text-sm">Alpha@intelligence.com</p><p className="mt-2 text-sm">+91 XXXXXXXXXX</p></div>
    </div>
    <div className="border-t border-slate-800 py-5 text-center text-sm text-slate-500">&copy; 2026 Alpha Inteligence. Built for future professionals.</div>
  </footer>;
}

export default Footer;
