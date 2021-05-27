import { gql } from '@apollo/client';

export const JOB = gql`
  fragment JobFields on Job {
    id
    title
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
  }
`;

export const JOBS_QUERY = gql`
  ${JOB}
  query jobs {
    jobs {
      ...JobFields
    }
  }
`;

export const SEARCH_JOB = gql`
  ${JOB}
  query jobs($where: JobWhereInput) {
    commitments {
      jobs(where: $where) {
        ...JobFields
      }
    }
  }
`;
