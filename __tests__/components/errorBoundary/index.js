import React from 'react';
import {
  render,
  waitFor,
  fireEvent,
} from '@testing-library/react-native';
import ErrorBoundary from '../../../src/components/errorBoundary';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

const Bomb = ({ shouldThrow }) => {
  if (shouldThrow) {
    throw new Error('Bomb');
  }

  return null;
};

describe('<ErrorBoundary />', () => {
  it('should render the children component correctly', () => {
    render(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>,
    );
  });

  it('should render the error boundary container when there is an error', async () => {
    const { getByTestId, rerender } = await render(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>,
    );

    rerender(
      <ErrorBoundary>
        <Bomb shouldThrow />
      </ErrorBoundary>,
    );

    await waitFor(() => getByTestId('ErrorBoundaryContainer'));
    expect(getByTestId('ErrorBoundaryContainer')).toBeTruthy();
  });

  it('should recover the app from errors', async () => {
    const { getByTestId, rerender, queryByTestId, debug } = await render(
      <ErrorBoundary>
        <Bomb shouldThrow />
      </ErrorBoundary>,
    );

    rerender(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>,
    );

    fireEvent.press(getByTestId('RestoreApp'));

    expect(queryByTestId('ErrorBoundaryContainer')).toBeNull();
    expect(queryByTestId('RestoreApp')).toBeNull();
  });
});
