import React from 'react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { title } from 'process';

export const generateMetadata = async ({ params }) => {
    const productId = params.productId;
    return {   
        title: `Product ${productId} Page`
    }
}   
     

const Product = async ({ params }) => {
    console.log(params)
    const productId = (await params).productId;

    if (parseInt(productId) >= 1000) {
        return notFound();
    }

    const productsArray = [
        {
            id: "1",
            name: "Iphone"
        },
        {
            id: "2",
            name: "Laptop"
        },
        {
            id: "10",
            name: "Touch"
        },
        {
            id: "20",
            name: "Andriod"
        },
        {
            id: "1000",
            name: "Oraimo"
        },
    ]

    console.log(productsArray)
    const filteredProduct = productsArray.filter((product) => product.id === productId)
    console.log(filteredProduct)

    return (
        <>
            <div>Product name {productId} </div>
            <div>Product ID </div>
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
