import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe("App component tests", () => {
    
  it("it should have a button to open Dialog", () => {
    render(<App />);

    const button = screen.getByText(/abrir dialog/i);

    expect(button).toBeInTheDocument();
  });

  it("it should open Dialog when button is clicked", () => {
    render(<App />);

    const button = screen.getByText(/abrir dialog/i);
    fireEvent.click(button);

    const dialog = screen.getByTestId('dialog-element');

    expect(dialog).toBeInTheDocument();
  });

  it("it should close Dialog when close icon is clicked", () => {
    render(<App />);

    const button = screen.getByText(/abrir dialog/i);
    fireEvent.click(button);

    const dialog = screen.getByTestId('dialog-element');

    expect(dialog).toBeInTheDocument();

    const closeIcon = screen.getByTestId('close-icon');
    fireEvent.click(closeIcon);

    expect(dialog).not.toBeInTheDocument();
  });
});
