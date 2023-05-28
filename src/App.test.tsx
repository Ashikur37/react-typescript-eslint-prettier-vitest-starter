/* eslint-disable import/no-extraneous-dependencies */
import { describe, it, test } from 'vitest';
import { render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { WrappedApp } from './App';
import { words } from './utils/static';

beforeEach(() => {
  console.log('befor');
  render(<WrappedApp />);
});

describe('App', () => {
  test('should render input', () => {
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
  test('Input should initially empty', () => {
    const input: HTMLInputElement = screen.getByRole('textbox');
    expect(input.value).toBe('');
  });
  test('Should be able to type an email', async () => {
    const emailInput: HTMLInputElement = screen.getByRole('textbox', {
      name: /email/i,
    });
    await userEvent.type(emailInput, 'piash3700@gmail.com');
    expect(emailInput.value).toBe('piash3700@gmail.com');
  });
  test('Should be able to type password', async () => {
    const password: HTMLInputElement = screen.getByLabelText(/Your Password/i);
    await userEvent.type(password, 'piash3700@gmail.com');
    expect(password.value).toBe('piash3700@gmail.com');
  });
  test('Should be able to type confirm password', async () => {
    const password: HTMLInputElement =
      screen.getByLabelText(/Confirm Password/i);
    await userEvent.type(password, 'piash3700@gmail.com');
    expect(password.value).toBe('piash3700@gmail.com');
  });
});

test('Should show email error', async () => {
  const emailErrorElement1 = screen.queryByText(words.emailErrorMessage);
  expect(emailErrorElement1).not.toBeInTheDocument();
  const emailInput: HTMLInputElement = screen.getByRole('textbox', {
    name: /email/i,
  });
  await userEvent.type(emailInput, 'piash3700@');
  const submitButton = screen.getByRole('button', {
    name: /Submit/i,
  });
  await userEvent.click(submitButton);
  const emailErrorElement = screen.queryByText(words.emailErrorMessage);
  expect(emailErrorElement).toBeInTheDocument();
});
