import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const links = [
  ['Dashboard', '/dashboard'], ['Internships', '/internships'], ['My Applications', '/applications'],
  ['Progress', '/progress'], ['Stipend', '/stipend'], ['Certificate', '/certificate'],
  ['Notifications', '/notifications'], ['Profile', '/profile'],
];

function DashboardLayout() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  async function handleLogout() { await logout(); navigate('/'); }
  return <div className="min-h-screen bg-slate-100 lg:flex">
    <aside className={`${open ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 z-40 w-[min(18rem,85vw)] overflow-y-auto bg-slate-950 p-5 text-white transition-transform lg:static lg:min-h-screen lg:w-72 lg:p-6 lg:translate-x-0`}>
      <div className="flex items-center justify-between"><div><p className="text-lg font-bold">InternPath</p><p className="text-xs text-slate-400">Student workspace</p></div><button className="text-2xl lg:hidden" onClick={() => setOpen(false)} aria-label="Close navigation">&times;</button></div>
      <nav className="mt-10 flex flex-col gap-1">{links.map(([label, path]) => <NavLink key={path} to={path} onClick={() => setOpen(false)} className={({ isActive }) => `rounded-lg px-3 py-2.5 text-sm ${isActive ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'}`}>{label}</NavLink>)}</nav>
      <button onClick={handleLogout} className="mt-10 w-full rounded-lg border border-slate-700 px-3 py-2.5 text-left text-sm text-slate-300 hover:bg-slate-800">Sign out</button>
    </aside>
    {open && <button className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden" onClick={() => setOpen(false)} aria-label="Close navigation overlay" />}
    <div className="min-w-0 flex-1"><header className="flex min-h-[4.5rem] items-center justify-between border-b border-slate-200 bg-white px-4 py-3 sm:px-5 sm:py-4 lg:px-8"><button className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 lg:hidden" onClick={() => setOpen(true)} aria-label="Open navigation">Menu</button><div className="hidden text-sm text-slate-500 sm:block">Your next opportunity starts here.</div><button onClick={() => navigate('/profile')} className="ml-auto max-w-[12rem] truncate text-right"><p className="truncate text-sm font-semibold text-slate-900">{user?.displayName || user?.email || 'Student'}</p><p className="text-xs text-slate-500">View profile</p></button></header><main className="page-enter p-4 sm:p-5 lg:p-8"><Outlet /></main></div>
  </div>;
}

export default DashboardLayout;