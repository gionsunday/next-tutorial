import React from 'react'
import { notFound } from 'next/navigation'


// function getRandomInt(count) {
//   return Math.floor(Math.random() * count);
// }

const Review = async ({ params }) => {
  const { productId, reviewId } = await params;

  // const random = getRandomInt(2);

  // if (random === 1) {
  //   throw new Error('Failed to loading Review Idhghguduytdtydyd hgdytdyjtdtjdutjdtsgeerreareyhg uydtydytddrea hgcdytdry');
  // }

  if (parseInt(reviewId) >= 100) {
    return notFound();
  }
  return (
    <div>Review {reviewId} for product {productId}</div>
  )
}

export default Review