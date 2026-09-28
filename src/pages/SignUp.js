import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function SignUp() {
  const { signUp } = useAuth(); const navigate = useNavigate(); const [error, setError] = useState('');
  async function submit(event) { event.preventDefault(); setError(''); const form = new FormData(event.currentTarget); try { await signUp({ name: form.get('name'), email: form.get('email'), password: form.get('password') }); navigate('/dashboard'); } catch (err) { setError(err.message); } }
  return <AuthForm title="Create your student account" subtitle="Build your profile and discover your next opportunity." onSubmit={submit} error={error} fields={[['name', 'Full name', 'text'], ['email', 'Email address', 'email'], ['password', 'Password', 'password']]} submitLabel="Create account" footer={<>Already have an account? <Link to="/signin" className="font-semibold text-blue-600">Sign in</Link></>} />;
}

export function AuthForm({ title, subtitle, onSubmit, error, fields, submitLabel, footer }) { return <section className="min-h-[calc(100vh-160px)] bg-slate-50 px-5 py-16"><div className="mx-auto max-w-md rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"><div className="text-center"><p className="text-sm font-bold uppercase tracking-widest text-blue-600">InternPath</p><h1 className="mt-3 text-3xl font-bold tracking-tight">{title}</h1><p className="mt-3 text-slate-600">{subtitle}</p></div>{error && <p role="alert" className="mt-6 rounded-lg bg-rose-50 p-3 text-sm text-rose-700">{error}</p>}<form onSubmit={onSubmit} className="mt-8 space-y-5">{fields.map(([name, label, type]) => <label key={name} className="block text-sm font-semibold">{label}<input required name={name} type={type} minLength={type === 'password' ? 6 : undefined} className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" /></label>)}<button className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700">{submitLabel}</button></form><p className="mt-6 text-center text-sm text-slate-600">{footer}</p></div></section>; }

export default SignUp;