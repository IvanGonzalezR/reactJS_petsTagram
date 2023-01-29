import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { useParams } from 'react-router-dom'

export const HomePage = () => {
  const params = useParams();
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={params.id} />
    </>
  )
}
