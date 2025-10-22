import React from 'react'

const Product = async ({ params }) => {
    const { slug } = await params;
    
    if (slug?.length === 2) {
        return (
            <div> Viewing docs for feature of {slug[0]} and showing  {slug[1]}</div>
        )
    }
    else if (slug?.length === 1) {
        return (
            <div> Viewing docs for {slug[0]}</div>
        )
    }
    return (
        <div>Docs Home Page</div>
    )
}

export default Product