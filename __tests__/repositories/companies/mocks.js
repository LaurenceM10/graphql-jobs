import { COMPANY_LIST_QUERY } from '../../../src/repositories/companies/gql';
import { CompanyQueryResult } from '../data/responses';

export const companiesQueryMock = {
  request: {
    query: COMPANY_LIST_QUERY,
  },
  result: CompanyQueryResult,
};

export const companiesQueryErrorMock = {
  request: {
    query: COMPANY_LIST_QUERY,
  },
  error: new Error('There was an error'),
};
