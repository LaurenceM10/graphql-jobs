import { useQuery } from '@apollo/client';
import { JOBS_QUERY } from './gql';

// LATEST JOBS should be the firsts seven jobs with company logo url
export function useLatestJobs() {
  const { data, loading, error } = useQuery(JOBS_QUERY);
  const jobs = data?.jobs?.filter(
      (job) => !!job?.company?.logoUrl
  ).slice(0, 7) ?? [];

  return { jobs, loading, error };
}
