import { gql } from '@apollo/client';

export const JOBS_QUERY = gql`
  query jobs {
    jobs {
      id
      title
      postedAt
      commitment {
        title
      }
      company {
        id
        name
        logoUrl
        slug
      }
      remotes {
        name
      }
      locationNames
      tags {
        name
      }
    }
  }
`;
