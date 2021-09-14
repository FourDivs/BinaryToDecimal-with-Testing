import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders Binary to Decimal Converter', () => {
  render(<App />);
  const linkElement = screen.getByText(/Binary to Decimal Converter/i);
  expect(linkElement).toBeInTheDocument();
});

test('decimal input Check', () => {
  render(<App />);
  const linkElement = screen.getByTestId('deci-input');
  expect(linkElement).toBeInTheDocument();
});

test('binary input Check', () => {
  render(<App />);
  const linkElement = screen.getByTestId('binary-input');
  expect(linkElement).toBeInTheDocument();
});

test('binary to decimal Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(BinaryElement, "101");
  expect(DeciElement.value).toBe("5");
});

test('decimal to binary Check', () => {
  render(<App />);
  const BinaryElement = screen.getByTestId('binary-input');
  const DeciElement = screen.getByTestId('deci-input');

  userEvent.type(DeciElement, "13");
  expect(BinaryElement.value).toBe("1101");
});

