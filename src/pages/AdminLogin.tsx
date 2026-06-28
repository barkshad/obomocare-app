import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import * as ReactRouterDOM from 'react-router-dom';
import { Lock } from 'lucide-react';
import { BRAND } from '../config/brand';

export const AdminLogin: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = ReactRouterDOM.useNavigate();
  const [showReset, setShowReset] = useState(false);

  const handleReset = () => {
    localStorage.removeItem('obomo_admin_password');
    localStorage.removeItem('obomo_admin_auth');
    setShowReset(true);
    setError('');
    setPassword('');
    setTimeout(() => setShowReset(false), 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const success = await login(password);
      if (success) {
        navigate('/admin');
      } else {
        setError('Incorrect Access Key');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: `linear-gradient(135deg, ${BRAND.navy} 0%, ${BRAND.navyMid} 100%)`
      }}
    >
      <div
        className="w-full max-w-sm p-8 rounded-2xl shadow-2xl"
        style={{
          background: BRAND.navyMid,
          border: `1px solid rgba(255,255,255,0.08)`
        }}
      >
        <div className="text-center mb-8">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ backgroundColor: BRAND.orangeLight, color: BRAND.orange }}
          >
            <Lock size={32} />
          </div>
          <h1 className="text-2xl font-bold text-white">
            Admin Access
          </h1>
          <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Restricted area for OBOMOCARE staff.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              className="block text-xs font-bold uppercase tracking-wider mb-2"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              Access Key
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-xl text-center text-lg tracking-widest outline-none transition-all"
              style={{
                background: BRAND.navyLight,
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#fff',
              }}
              placeholder="•••••"
              required
            />
          </div>

          {error && (
            <div
              className="text-sm text-center p-3 rounded-lg"
              style={{ background: 'rgba(239,68,68,0.12)', color: '#fca5a5' }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 text-white rounded-xl font-bold transition-all shadow-lg"
            style={{
              backgroundColor: BRAND.orange,
            }}
          >
            {isLoading ? 'Verifying...' : 'Enter Dashboard'}
          </button>

          {showReset && (
            <div
              className="text-sm text-center p-3 rounded-lg"
              style={{ background: 'rgba(34,197,94,0.12)', color: '#86efac' }}
            >
              Password reset to <strong>12345678</strong>. Enter it above.
            </div>
          )}

          <div className="text-center">
            <button
              type="button"
              onClick={handleReset}
              className="text-sm underline underline-offset-2 transition-colors"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              Forgot password? Reset to default
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-sm transition-colors"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            &larr; Return to Website
          </button>
        </div>
      </div>
    </div>
  );
};

