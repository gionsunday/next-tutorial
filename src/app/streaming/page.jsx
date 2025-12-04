"use client"

import React from 'react'
import { Card } from "../../components/Card"
import { Suspense } from 'react'


export const ProductS = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return (
        <Card className="product-card">
            <div>Product Component</div>
        </Card>
    )
}

export const ReviewS = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return (
        <Card className="review-card">
            <div>Review Component</div>
        </Card>
    )
}



const Streaming = () => {

    return (
        <>
            <div>Streaming Page</div>

            <Suspense fallback={<div>Loading Product...</div>}>
                <ProductS />
            </Suspense>
            
            <Suspense fallback={<div>Loading Review...</div>}>
                <ReviewS />
            </Suspense>
        </>
    )
}

export default Streaming