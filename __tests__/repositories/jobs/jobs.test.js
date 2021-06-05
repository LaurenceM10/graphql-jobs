import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { renderHook } from '@testing-library/react-hooks';
import { useLatestJobs } from '../../../src/repositories/jobs';
import { JOBS_QUERY } from '../../../src/repositories/jobs/gql';
import { JobsQueryResult } from '../data/responses';

describe('jobs', () => {
  describe('usePopularCompanies custom hook', () => {
    const jobsQueryMock = {
      request: {
        query: JOBS_QUERY,
      },
      result: JobsQueryResult,
    };

    const jobsQueryErrorMock = {
      request: {
        query: JOBS_QUERY,
      },
      error: new Error('There was an error'),
    };

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
});
