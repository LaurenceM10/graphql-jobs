import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { renderHook } from '@testing-library/react-hooks';
import { usePopularCompanies } from '../../../src/logic/companies';
import { companiesQueryErrorMock, companiesQueryMock } from '../../../fixtures/logic/companies/mocks';

describe('companies', () => {
  describe('usePopularCompanies custom hook', () => {
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
