import { gql } from '@apollo/client';

export const COMPANY_LIST_QUERY = gql`
  query companies {
    companies {
      id
      name
      slug
      logoUrl
    }
  }
`;
