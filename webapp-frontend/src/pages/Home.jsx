// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center space-y-6 max-w-xl">
        <h1 className="text-4xl font-bold text-blue-700">Welcome to My WebApp</h1>
        <p className="text-gray-700">
          This application was developed by <strong>Saurabh Kumar</strong> as part of his internship assignment.
          It includes secure login, user roles, testing, and automated AWS deployment.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/login" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Login
          </Link>
          <Link to="/register" className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
