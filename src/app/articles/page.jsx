
import React from 'react'
import Link from 'next/link'

const AriclePage = () => {
    const articlesArray = [
        {
            title: "Article 1",
            href: "/articles/1?category=developement"

        },
        {
            title: "Article 2",
            href: "/articles/2?category=developement"

        },
    ]
    return (

        <div className='w-full h-full'>
            <ul>
                {
                    articlesArray.map((article, index) => {
                        return (
                            <li key={index}>
                                <Link key={index} href={article.href}>{article.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default AriclePage