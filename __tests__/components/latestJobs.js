import 'react-native';
import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react-native';
import { MockedProvider } from '@apollo/client/testing';
import { jobsQueryMock } from '../../fixtures/logic/jobs/mocks';
import LatestJobs from '../../src/components/latestJobs';

const mocks = [jobsQueryMock];

jest.mock('react-native-shared-element', () => {
  return () => ({});
});

jest.mock('react-navigation-shared-element', () => {
  return () => ({
    createSharedElementStackNavigator: jest.fn(),
  });
});

beforeEach(() => {
  cleanup();
});

describe('<LatestJobs />', () => {
  test('should render [JobLoadingCard] when query is loading', async () => {
    const testID = 'JobLoadingCard';
    const component = await render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <LatestJobs />
      </MockedProvider>,
    );

    const loadingComponent = component.getByTestId(testID);
    expect(loadingComponent).toBeTruthy();
  });
});
