import { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';

const COMPANY_LIST_QUERY = gql`
    query companies {
        companies {
            id
            name
            slug
            logoUrl
        }
    }
`;

// IMPORTANT: This is just a simulation.
// The API does not expose any queries to get the popular companies,
// nor does it expose an argument to decide how many items to get
function usePopularCompanies() {
    const [companies, setCompanies] = useState([]);
    const { data, loading, error } = useQuery(COMPANY_LIST_QUERY, { fetchPolicy: 'no-cache' });

    useEffect(() => {
        if(data) {
            if (data.companies.length > 7) {
                const popularCompanies = data.companies.slice(0, 7);
                setCompanies(popularCompanies);
            } else {
                setCompanies(companies);
            }
        }
    }, [data]);

    return { companies, loading, error };
}

export default usePopularCompanies;