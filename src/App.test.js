import { render, screen } from '@testing-library/react';
import App from './App';
import { AuthProvider } from './context/AuthContext';

function renderApp() {
  return render(<AuthProvider><App /></AuthProvider>);
}

test('renders the InternPath landing page', () => {
  renderApp();
  expect(screen.getByRole('heading', { name: /build your career with the right internship/i })).toBeInTheDocument();
});

test('exposes the sign in route', () => {
  window.history.pushState({}, '', '/signin');
  renderApp();
  expect(screen.getByRole('heading', { name: /sign in to internpath/i })).toBeInTheDocument();
});
