import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query Query {
    countries{
      code
      name
      native
      capital
      emoji
      continent {
        name
      }
      languages {
        name
      }
    }
  }
`;
