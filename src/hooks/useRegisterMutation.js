import { useMutation, gql } from "@apollo/client";

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const useRegisterMutation = () => {
  const [
    register,
    { data, loading, error } ]
    = useMutation(REGISTER);
  return {
    register,
    data,
    loading,
    error,
  };
};
