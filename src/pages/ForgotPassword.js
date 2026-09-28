import { Link } from 'react-router-dom';
import { useState } from 'react';
import { resetPassword } from '../services/authService';
import { AuthForm } from './SignUp';

function ForgotPassword() { const [sent, setSent] = useState(false); const [error, setError] = useState(''); async function submit(event) { event.preventDefault(); setError(''); try { await resetPassword(new FormData(event.currentTarget).get('email')); setSent(true); } catch (err) { setError(err.message); } } return <AuthForm title="Reset your password" subtitle={sent ? 'Check your inbox for a password reset link.' : 'We will send instructions to your email address.'} onSubmit={submit} error={error} fields={sent ? [] : [['email', 'Email address', 'email']]} submitLabel="Send reset link" footer={<Link to="/signin" className="font-semibold text-blue-600">Return to sign in</Link>} />; }

export default ForgotPassword;