import React from 'react'

const  Article = async ({params, searchParams}) => {
  const {articleId} = await params
  const {category} = await searchParams


  return (
    <div>Details of artricle {articleId} Category of Article {category}</div>
  )
}

export default Article