"use client"

import React, { useEffect } from "react"
import axios from "axios"
import Link from "next/link"

const ProductPage = () => {

    const [products, setProducts] = React.useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products')
                setProducts(response.data)
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }
        fetchProducts()
    }, [])

    return products.length == 0 ? (
        <div>Add Product</div>
    ) : (
        <div>
            Product Page
            <ul>
                {products.map((product) => (
                   <Link href={`/products/${product._id}`}> <li key={product._id}>{product.name} - {product.category}</li></Link>
                ))}
            </ul>
        </div>
    )
}

export default ProductPage