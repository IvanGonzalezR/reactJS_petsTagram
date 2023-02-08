import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout';

const HomePage = () => {
  const params = useParams();
  return (
    <Layout
      title={`Home`}
      subtitle={`Find the cuttiest pets on Petgram`}
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={params.petId} />
    </Layout>
  )
};

export { HomePage };
