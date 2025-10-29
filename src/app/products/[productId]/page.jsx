"use client"

import React, { useState, useEffect } from 'react'
import { notFound } from 'next/navigation'
import axios from 'axios';


const Product = ({ params }) => {

    const [product, setProduct] = useState(null);
    const productId = params.productId;


    useEffect(() => {
        const fetchOneProduct = async () => {
            try {
                const response = await fetch(`/api/products/${productId}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchOneProduct();
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <div>Product name {product.name} </div>
            <div>Product ID {product._id} </div>
            <div>Product ID {product.category} </div>
        </>
    )
}

export default Product

// const Product = async ({ params }: { params: Promise<{ productId: string }>})=> {

//     const productId = (await params).productId;
//     return (
//         <div>Product {productId} Page</div>
//     )
// }

// export default Product
