import React from 'react';
import { Linking } from 'react-native';
import { MockedProvider } from '@apollo/client/testing';
import { renderHook, act } from '@testing-library/react-hooks';
import { useApplyToJob, useLatestJobs } from '../../../src/logic/jobs';
import {
  jobsQueryMock,
  jobsQueryErrorMock,
} from '../../../fixtures/logic/jobs/mocks';
import {waitFor} from "@testing-library/react-native";

afterEach(() => {
  jest.clearAllMocks();
  jest.resetModules();
});

describe('jobs', () => {
  function getHookWrapper(mocks = []) {
    const wrapper = ({ children }) => (
      <MockedProvider mocks={mocks} addTypename={false}>
        {children}
      </MockedProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useLatestJobs(), {
      wrapper,
    });

    expect(result.current.loading).toBeTruthy();
    expect(result.current.error).toBeUndefined();
    expect(result.current.jobs).toBeUndefined();
    return { result, waitForNextUpdate };
  }

  function mockSuccessLinking() {
    const canOpenURL = jest
      .spyOn(Linking, 'canOpenURL')
      .mockImplementation(() => Promise.resolve(true));
    const openURL = jest
      .spyOn(Linking, 'openURL')
      .mockImplementation(() => Promise.resolve(true));

    return { canOpenURL, openURL };
  }

  function mockFailureLinking() {
    const canOpenURL = jest
      .spyOn(Linking, 'canOpenURL')
      .mockImplementation(() => Promise.resolve(false));
    const openURL = jest.spyOn(Linking, 'openURL');

    return { canOpenURL, openURL };
  }

  describe('useLatestJobs custom hook', () => {
    test('should return a list of jobs when query response is successful', async () => {
      const { result, waitForNextUpdate } = getHookWrapper([jobsQueryMock]);

      await waitForNextUpdate();

      expect(result.current.loading).toBeFalsy();
      expect(result.current.error).toBeUndefined();
      expect(result.current.jobs).toBeTruthy();
    });

    test('should return error when query fails', async () => {
      const { result, waitForNextUpdate } = getHookWrapper([
        jobsQueryErrorMock,
      ]);

      await waitForNextUpdate();

      expect(result.current.loading).toBeFalsy();
      expect(result.current.error).toBeTruthy();
      expect(result.current.jobs).toBeUndefined();
    });
  });

  describe('useApplyToJob custom hook', () => {
    test('should return initial state', () => {
      const { result } = renderHook(() => useApplyToJob(''));

      expect(result.current[0]).toBeTruthy();
      expect(result.current[1].error).toBeNull();
    });

    test('should verify if there is a proper app to open url', () => {
      const { canOpenURL } = mockSuccessLinking();

      const { result } = renderHook(() => useApplyToJob(''));

      // Act
      act(() => {
        result.current[0]();
      });

      // Assert
      expect(canOpenURL).toHaveBeenCalled();
    });

    test('should open url when there is a proper app the open it', async () => {
      const { canOpenURL, openURL } = mockSuccessLinking();
      const { result } = renderHook(() =>
        useApplyToJob('https://www.google.com/'),
      );

      // Act
      act(() => {
        result.current[0]();
      });

      // Assert
      expect(result.current[1].error).toBeNull();
      expect(canOpenURL).toHaveBeenCalled();
      await waitFor(() => {
        expect(openURL).toHaveBeenCalled();
      });
    });

    test('should return error when there is not app the open url', async () => {
      const { canOpenURL, openURL } = mockFailureLinking();

      const { result, waitForNextUpdate } = renderHook(() => useApplyToJob(''));

      // Act
      act(() => {
        result.current[0]();
      });
      await waitForNextUpdate();

      // Assert
      expect(result.current[1].error).toBeTruthy();
      expect(canOpenURL).toHaveBeenCalled();
      expect(openURL).not.toHaveBeenCalled();
    });
  });
});
