import 'react-native';
import React from 'react';
import {
  render,
  cleanup,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';
import { MockedProvider } from '@apollo/client/testing';
import { jobsQueryMock } from '../../fixtures/logic/jobs/mocks';
import LatestJobs from '../../src/components/latestJobs';

const mocks = [jobsQueryMock];

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

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
      <MockedProvider mocks={mocks} addTypename={true}>
        <LatestJobs />
      </MockedProvider>,
    );

    const loadingComponent = component.getByTestId(testID);
    expect(loadingComponent).toBeTruthy();
  });

  test.skip('should render [JobsCarousel] when query response is successful', async () => {
    const testID = 'JobsCarousel';
    const component = await render(
      <MockedProvider mocks={mocks} addTypename={true}>
        <LatestJobs />
      </MockedProvider>,
    );

    await waitForElementToBeRemoved(() =>
      component.getByTestId('JobLoadingCard'),
    );
    await new Promise(resolve => setTimeout(resolve, 0));

    const loadingComponent = component.getByTestId(testID);
    expect(loadingComponent).toBeTruthy();
  });
});
