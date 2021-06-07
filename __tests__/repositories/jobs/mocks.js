import { JOBS_QUERY } from '../../../src/repositories/jobs/gql';
import { JobsQueryResult } from '../data/responses';

export const jobsQueryMock = {
  request: {
    query: JOBS_QUERY,
  },
  result: JobsQueryResult,
};

export const jobsQueryErrorMock = {
  request: {
    query: JOBS_QUERY,
  },
  error: new Error('There was an error'),
};
