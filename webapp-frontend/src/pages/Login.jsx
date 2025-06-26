import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://3.110.143.154:5000/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      alert('Login successful!');
      navigate('/admin');
    } catch (err) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-blue-600 text-center">Login</h2>

        <div className="space-y-4">
          <div className="flex flex-col">
            <label  htmlFor="username" className="text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              id="username"
              type="text"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              id = "password"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>

        <p className="text-sm text-center text-gray-500">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-600 hover:underline">Register</a>
        </p>
      </form>
    </div>
  );
}
