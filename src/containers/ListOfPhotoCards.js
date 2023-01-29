import { useQuery } from "@apollo/client";
import { GET_PHOTOS } from "../hooks/queries/useGetPhotos";

export function ListOfPhotoCardsComponent(categoryId) {
  const { loading, error, data } = useQuery(
    GET_PHOTOS,
    {
      variables: {
        categoryId: categoryId
      }
    }
  );

  return { loading, error, data };
};