import React from 'react';
import { View } from 'react-native';
import {
  render,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';
import ErrorBoundary from '../../../src/components/errorBoundary';

const MockErrorComponent = () => <View>{null.null}</View>;
const MockSuccessComponent = () => <View testID="MockSuccessComponent" />;

describe('<ErrorBoundary />', () => {
  it('should render the children component correctly', async () => {
    const { getByTestId } = await render(
      <ErrorBoundary>
        <MockSuccessComponent />
      </ErrorBoundary>,
    );

    expect(getByTestId('MockSuccessComponent')).toBeTruthy();
  });

  it('should render the error boundary container when there is an error', async () => {
    const { getByTestId } = await render(
      <ErrorBoundary>
        <MockErrorComponent />
      </ErrorBoundary>,
    );

    await waitFor(() => getByTestId('ErrorBoundaryContainer'));

    expect(getByTestId('ErrorBoundaryContainer')).toBeTruthy();
  });
});
