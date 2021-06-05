import { useEffect, useMemo, useState } from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { JOB_DESCRIPTION_QUERY, JOBS_QUERY, SEARCH_JOB } from './gql';

// LATEST JOBS should be the firsts seven jobs with company logo url
export function useLatestJobs() {
  const { data, loading, error } = useQuery(JOBS_QUERY);

  const jobs = useMemo(() => {
    if (data) {
      return (
        data?.jobs?.filter(job => !!job?.company?.logoUrl).slice(0, 7) ?? []
      );
    }
  }, [data]);

  return { jobs, loading, error };
}

export function useJobsSearch() {
  const [jobs, setJobs] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [fetchJobs, { data, loading, error }] = useLazyQuery(SEARCH_JOB);

  const search = () => {
    setSearching(true);

    fetchJobs({
      variables: {
        where: {
          OR: {
            title_contains: searchTerm,
          },
        },
        page: 0,
        perPage: 7,
      },
      fetchPolicy: 'no-cache',
    });
  };

  useEffect(() => {
    if (!searchTerm) {
      setJobs([]);
      return;
    }

    search();
  }, [searchTerm]);

  useEffect(() => {
    const fullTimeJobs = data?.commitments[0]?.jobs ?? [];
    const partTimeJobs = data?.commitments[1]?.jobs ?? [];
    const jobList = [...fullTimeJobs, ...partTimeJobs];

    if (jobList) {
      setJobs(prevJobs => jobList);
    }

    setSearching(false);
  }, [data]);

  return {
    operations: {
      setSearchTerm,
    },
    state: {
      jobs: !jobs.length && !searchTerm ? null : jobs,
      loading: loading || searching,
      error,
    },
  };
}

export function useJobDetail({ jobSlug, companySlug }) {
  const { data, loading, error } = useQuery(JOB_DESCRIPTION_QUERY, {
    variables: {
      input: {
        jobSlug,
        companySlug,
      },
    },
  });

  return {
    state: {
      detail: data?.job,
      loading,
      error,
    },
  };
}
