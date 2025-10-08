import React from 'react'
import { notFound } from 'next/navigation'

const Review = async ({params}) => {
    const {productId, reviewId} = await params;

    if (parseInt(reviewId) >= 100){
        return notFound();
    }
  return (
    <div>Review {reviewId} for product {productId}</div>
  )
}

export default Review