import React, { useState } from 'react';
import axios from 'axios';
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

export default function Register() {
  const [form, setForm] = useState({ username: '', password: '', role: 'user' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://3.110.143.154:5000/api/auth/register', form);
      alert('Registered successfully!');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username Field */}
          <div className="flex flex-col">
            <label htmlFor="username" className="text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Role Selection */}
          <div className="flex flex-col">
            <label htmlFor="role" className="text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select
              id="role"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Register
          </button>

          {/* Login Link */}
          <p className="text-sm text-gray-500 text-center">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:underline">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}
