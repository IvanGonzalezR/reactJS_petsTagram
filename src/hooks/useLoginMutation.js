import { useMutation, gql } from "@apollo/client";

const LOGIN = gql`
  mutation signup($input: UserCredentials!) {
    login(input: $input)
  }
`;

export const useLoginMutation = () => {
  const [
    login,
    { data, loading, error } ]
    = useMutation(LOGIN);
  return {
    login,
    data,
    loading,
    error,
  };
};