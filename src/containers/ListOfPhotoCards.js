import { useQuery } from "@apollo/client";
import { withPhotos } from "../hooks/queries/useGetPhotos";

export function ListOfPhotoCardsComponent(categoryId) {
  const { loading, error, data } = useQuery(
    withPhotos,
    {
      variables: {
        categoryId: categoryId
      }
    }
  );

  return { loading, error, data };
};