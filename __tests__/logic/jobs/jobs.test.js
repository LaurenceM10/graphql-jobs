import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { renderHook } from '@testing-library/react-hooks';
import { useLatestJobs } from '../../../src/logic/jobs';
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

  describe('useLatestJobs custom hook', () => {})
});
