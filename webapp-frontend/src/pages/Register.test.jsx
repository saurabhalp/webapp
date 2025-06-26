import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Register from './Register';
import '@testing-library/jest-dom';

// Mock axios
jest.mock('axios', () => ({
  post: jest.fn(() => Promise.resolve({ data: 'OK' })),
}));

describe('Register Component', () => {
  test('renders all form fields and button', () => {
    render(<Register />);
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/role/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument();
  });

  test('updates username and password fields on input', () => {
    render(<Register />);
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(usernameInput, { target: { value: 'saurabh' } });
    fireEvent.change(passwordInput, { target: { value: 'pass123' } });

    expect(usernameInput.value).toBe('saurabh');
    expect(passwordInput.value).toBe('pass123');
  });

  test('submits form and shows alert', async () => {
    global.alert = jest.fn(); // mock alert

    render(<Register />);
    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'testpass' } });

    fireEvent.click(screen.getByRole('button', { name: /register/i }));

    // wait for alert
    await screen.findByRole('button'); // just to wait for async code
    expect(global.alert).toHaveBeenCalledWith('Registered successfully!');
  });
});
