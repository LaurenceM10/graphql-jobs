import { useEffect, useState, useCallback } from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { JOBS_QUERY, SEARCH_JOB } from './gql';

// LATEST JOBS should be the firsts seven jobs with company logo url
export function useLatestJobs() {
  const { data, loading, error } = useQuery(JOBS_QUERY);
  const jobs =
    data?.jobs?.filter(job => !!job?.company?.logoUrl).slice(0, 7) ?? [];

  return { jobs, loading, error };
}

export function useJobSearch() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [fetchJobs, { data, loading, error }] = useLazyQuery(SEARCH_JOB);

  const search = useCallback(() => {
    fetchJobs({
      variables: {
        where: {
          OR: {
            title_contains: searchTerm,
          },
        },
      },
      fetchPolicy: 'no-cache',
    });
  }, [fetchJobs, searchTerm]);

  useEffect(() => {
    setJobs([]);
    search();
  }, [searchTerm, search]);

  useEffect(() => {
    const fullTimeJobs = data?.commitments[0]?.jobs ?? [];
    const partTimeJobs = data?.commitments[1]?.jobs ?? [];
    const jobList = [...fullTimeJobs, ...partTimeJobs];

    if (jobList) {
      setJobs(prevJobs => [...prevJobs, ...jobList]);
    }
  }, [data]);

  return {
    operations: {
      setSearchTerm,
    },
    state: {
      jobs,
      loading,
      error,
    },
  };
}
