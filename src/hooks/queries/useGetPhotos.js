import { gql, useQuery } from '@apollo/client'

// function useGetPhotos(categoryId) {

//   const withPhotos = gql`
//       query getPhotos($categoryId: ID) {
//         photos(categoryId: $categoryId) {
//           id
//           categoryId
//           src
//           likes
//           userId
//           liked
//         }
//       }
//   `;

//   return withPhotos

// };

const withPhotos = gql`
      query getPhotos($categoryId: ID) {
        photos(categoryId: $categoryId) {
          id
          categoryId
          src
          likes
          userId
          liked
        }
      }
  `;

export { withPhotos };