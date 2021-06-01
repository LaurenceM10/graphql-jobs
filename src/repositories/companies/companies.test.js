import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { renderHook } from '@testing-library/react-hooks';
import { usePopularCompanies } from './index';
import { COMPANY_LIST_QUERY } from './gql';

const QueryResponse = {
  data: {
    companies: [
      {
        id: 'cjtu8etmr001n0824o1v2qvgr',
        name: 'Apollo',
        slug: 'apollo',
        logoUrl: 'https://cdn.filestackcontent.com/uRGQ5QfTT8mforGeyUS5',
      },
      {
        id: 'cjuv4wxdc00dl0735ts4ukqs7',
        name: 'Prisma',
        slug: 'prisma',
        logoUrl: 'https://cdn.filestackcontent.com/dZHmLkPRTFObRrqHsD7A',
      },
      {
        id: 'cjuvawyjc015m07351qg6jo23',
        name: 'Mixcloud',
        slug: 'mixcloud',
        logoUrl: 'https://cdn.filestackcontent.com/XeZED8N9QAG5BBxdyyL1',
      },
    ],
  },
};

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
