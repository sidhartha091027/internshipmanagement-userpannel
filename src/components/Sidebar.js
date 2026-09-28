import { Link } from 'react-router-dom';

function Sidebar({ open, closeSidebar }) {
  const links = ['Dashboard', 'My Internships', 'Applications', 'Profile'];
  return <aside className={`${open ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 p-6 text-white transition-transform lg:static lg:translate-x-0`}>
    <div className="flex items-center justify-between"><p className="text-lg font-bold">Alpha Inteligence</p><button onClick={closeSidebar} className="text-xl lg:hidden">×</button></div>
    <div className="mt-10 flex flex-col gap-2">{links.map((link) => <Link key={link} to="/" className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white">{link}</Link>)}</div>
  </aside>;
}

export default Sidebar;
