import React from "react";
import { PhotoCard } from "../components/PhotoCard";
import { gql, useQuery } from "@apollo/client";
import { Skeleton } from "@mui/material";
import { useParams } from "react-router-dom";

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`;

const PhotoCardWithQuery = () => {
  const params = useParams();
  const id = params.detailId;
  const { loading, error, data } = useQuery(
    GET_SINGLE_PHOTO,
    {
      variables: { id: id },
    }
  );

  if (loading) {
    return (
      <>
        <Skeleton variant="rectangular" width="100%" height="100px" />
        <Skeleton width="10%" height="40px" />
        <Skeleton width="15%" height="40px" />
      </>
    );
  }

  if (error) {
    return <p>Internal Server Error</p>;
  }

  const { photo = {} } = data;
  return <PhotoCard {...photo} />

}

export { PhotoCardWithQuery };