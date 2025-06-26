// Admin.test.jsx
import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import axios from 'axios';
import Admin from './Admin';
import "@testing-library/jest-dom";
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

jest.mock('axios');

describe('Admin Component', () => {
  beforeEach(() => {
    axios.get.mockResolvedValueOnce({ data: { message: 'Welcome Admin!' } });
    localStorage.setItem('token', 'fake-token');
    mockNavigate.mockClear();
  });

  test('renders admin message after fetch', async () => {
    render(<Admin />);

    expect(screen.getByText(/admin dashboard/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/welcome admin/i)).toBeInTheDocument();
    });
  });

  test('logs out and navigates to /login', async () => {
    render(<Admin />);

    const logoutButton = screen.getByRole('button', { name: /logout/i });

    fireEvent.click(logoutButton);

    await waitFor(() => {
      expect(localStorage.getItem('token')).toBeNull();
      expect(mockNavigate).toHaveBeenCalledWith('/login');
    });
  });
});
