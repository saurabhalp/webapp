import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import '@testing-library/jest-dom';


jest.mock('axios');

const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('Login Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders login form inputs and button', () => {
    renderWithRouter(<Login />);
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('updates username and password fields on input', () => {
    renderWithRouter(<Login />);
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpass' } });

    expect(usernameInput.value).toBe('testuser');
    expect(passwordInput.value).toBe('testpass');
  });

  test('submits form and calls axios.post', async () => {
    const mockResponse = { data: { token: 'mockToken' } };
    axios.post.mockResolvedValueOnce(mockResponse);
    global.alert = jest.fn();

    renderWithRouter(<Login />);

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'testpass' },
    });

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(await axios.post).toHaveBeenCalledWith(
  'http://3.110.143.154:5000/api/auth/login',
  { username: 'testuser', password: 'testpass' }
);
  });
});


