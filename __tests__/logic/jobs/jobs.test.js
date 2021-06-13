import React from 'react';
import { Linking } from 'react-native';
import { MockedProvider } from '@apollo/client/testing';
import { renderHook } from '@testing-library/react-hooks';
import { useApplyToJob, useLatestJobs } from '../../../src/logic/jobs';
import { jobsQueryErrorMock, jobsQueryMock } from './mocks';

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
    afterEach(() => {
      jest.clearAllMocks();
    });

    test('should return initial state', async () => {
      const { result } = renderHook(() => useApplyToJob(''));
      const [apply, { error }] = result.current;

      expect(apply).toBeTruthy();
      expect(error).toBeNull();
    });

    test('should verify if there is a proper app to open url', async () => {
      const canOpenURL = jest
        .spyOn(Linking, 'canOpenURL')
        .mockImplementation(() => Promise.resolve(true));

      const { result } = renderHook(() => useApplyToJob(''));
      const [apply] = result.current;

      // Act
      apply();

      // Assert
      expect(canOpenURL).toHaveBeenCalled();
    });

    test('should open url when there is a proper app the open it', async () => {
      jest
        .spyOn(Linking, 'canOpenURL')
        .mockImplementation(() => Promise.resolve(true));

      const openURL = jest
        .spyOn(Linking, 'openURL')
        .mockImplementation(() => Promise.resolve());

      const { result } = renderHook(() => useApplyToJob(''));
      const [apply] = result.current;

      // Act
      apply();

      // Assert
      expect(result.current[1].error).toBeNull();
      expect(openURL).toHaveBeenCalled();
    });

    test('should return error when there is not app the open url', async () => {
      jest
        .spyOn(Linking, 'canOpenURL')
        .mockImplementation(() => Promise.resolve(false));
      const openURL = jest
        .spyOn(Linking, 'openURL')
        .mockImplementation(() => Promise.resolve());

      const { result, waitForNextUpdate } = renderHook(() => useApplyToJob(''));
      const [apply] = result.current;

      // Act
      apply();
      await waitForNextUpdate();

      // Assert
      expect(result.current[1].error).toBeTruthy();
      expect(openURL).not.toHaveBeenCalled();
    });
  });
});
