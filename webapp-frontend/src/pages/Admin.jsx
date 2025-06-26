
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/auth/admin', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setMessage(res.data.message);
      } catch (err) {
        setMessage('Access denied');
      }
    };

    fetchAdminData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md space-y-4 text-center">
        <h2 className="text-2xl font-bold text-blue-600">Admin Dashboard</h2>
        <p className="text-gray-700 text-lg">{message}</p>

        <div className="pt-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => {
              localStorage.removeItem('token');
              navigate('/login');
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
