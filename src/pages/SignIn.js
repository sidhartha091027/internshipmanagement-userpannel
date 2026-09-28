import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function SignIn() {
  const { signIn, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  async function handleSubmit(event) { event.preventDefault(); setError(''); const form = new FormData(event.currentTarget); try { await signIn(form.get('email'), form.get('password')); navigate('/dashboard'); } catch (err) { setError(err.message); } }
  async function handleGoogle() { try { await signInWithGoogle(); navigate('/dashboard'); } catch (err) { setError(err.message); } }

  return (
    <section className="min-h-[calc(100vh-160px)] bg-slate-50 px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-md">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Welcome back</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Sign in to InternPath</h1>
            <p className="mt-3 text-slate-600">Continue managing your internship journey.</p>
          </div>
          {error && <p role="alert" className="mt-4 rounded-lg bg-rose-50 p-3 text-sm text-rose-700">{error}</p>}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <label className="block text-sm font-semibold text-slate-800">
              Email address
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                placeholder="you@example.com"
              />
            </label>

            <label className="block text-sm font-semibold text-slate-800">
              Password
              <input
                required
                type="password"
                name="password"
                autoComplete="current-password"
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                placeholder="Enter your password"
              />
            </label>

            <button type="submit" className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700">
              Sign in
            </button>
          </form>
          <button type="button" onClick={handleGoogle} className="mt-4 w-full rounded-lg border border-slate-300 px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50">Continue with Google</button>

          <p className="mt-6 text-center text-sm text-slate-600">
            <Link to="/forgot-password" className="font-semibold text-blue-600 hover:text-blue-800">Forgot password?</Link><br />
            New to InternPath? <Link to="/signup" className="font-semibold text-blue-600 hover:text-blue-800">Create an account</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignIn;