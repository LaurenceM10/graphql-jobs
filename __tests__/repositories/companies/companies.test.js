import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { renderHook } from '@testing-library/react-hooks';
import { usePopularCompanies } from '../../../src/repositories/companies';
import { COMPANY_LIST_QUERY } from '../../../src/repositories/companies/gql';
import { QueryResponse } from '../data/responses';

describe('companies', () => {
  describe('usePopularCompanies custom hook', () => {
    const companiesQueryMock = {
      request: {
        query: COMPANY_LIST_QUERY,
      },
      result: QueryResponse,
    };

    const companiesQueryErrorMock = {
      request: {
        query: COMPANY_LIST_QUERY,
      },
      error: new Error('There was an error'),
    };

    function getHookWrapper(mocks = []) {
      const wrapper = ({ children }) => (
        <MockedProvider mocks={mocks} addTypename={false}>
          {children}
        </MockedProvider>
      );
      const { result, waitForNextUpdate } = renderHook(
        () => usePopularCompanies(),
        {
          wrapper,
        },
      );

      expect(result.current.loading).toBeTruthy();
      expect(result.current.error).toBeUndefined();
      expect(result.current.companies).toBeUndefined();
      return { result, waitForNextUpdate };
    }

    test('should return a list of companies when query response is successful', async () => {
      const { result, waitForNextUpdate } = getHookWrapper([
        companiesQueryMock,
      ]);

      await waitForNextUpdate();

      expect(result.current.loading).toBeFalsy();
      expect(result.current.error).toBeUndefined();
      expect(result.current.companies).toBeTruthy();
    });

    test('should return error when query fails', async () => {
      const { result, waitForNextUpdate } = getHookWrapper([
        companiesQueryErrorMock,
      ]);

      await waitForNextUpdate();

      expect(result.current.loading).toBeFalsy();
      expect(result.current.error).toBeTruthy();
      expect(result.current.companies).toBeUndefined();
    });
  });
});
