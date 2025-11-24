"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUserPlus } from "react-icons/fa";
import { useAuth } from '../../components/AuthProvider';

const API_BASE_URL = 'http://localhost:5000/api/auth';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.msg || 'Registration failed.');
        return;
      }

      // Only store the user object; no token needed
      login(data.user);
      router.push('/manage-events');

    } catch (err) {
      console.error('Network error:', err);
      setError('A network error occurred. Make sure your backend is running.');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-bold mb-2 text-center text-indigo-700">
          Register Account
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Create your new EventPulse account
        </p>

        {error && (
          <div className="p-3 mb-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
          >
            <FaUserPlus className="mr-2" /> Register Account
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? 
          <a href="/login" className="font-medium text-indigo-600 ml-1 hover:text-indigo-500">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
