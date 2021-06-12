import { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { COMPANY_LIST_QUERY } from './gql';

// IMPORTANT: This is just a simulation.
// The API does not expose any queries to get the popular companies,
// nor does it expose an argument to decide how many items to get
export function usePopularCompanies() {
  const { data, loading, error } = useQuery(COMPANY_LIST_QUERY, {
    fetchPolicy: 'no-cache',
  });

  const companies = useMemo(() => {
    if (data) {
      return data?.companies?.slice(0, 7) ?? [];
    }
  }, [data]);

  return { companies, loading, error };
}
