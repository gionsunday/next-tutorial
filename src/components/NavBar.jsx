"use client"

import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import "../app/globals.css"

const NavBar = () => {

    const navLinks = [
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
        { href: "/products", label: "Products" },
        { href: "/blog", label: "Blog" },
    ]

    const pathname = usePathname();
 
    return (
        <div className="flex gap-4 w-full justify-between flex-row sm:justify-start">
            {
                navLinks.map((link) => {
                    const isActive =   pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                    
                    return (
                        <div key={link.href} className="flex">
                            <Link href={link.href} className={ isActive ? `text-red-700 hover:underline gap-2 text-2xl` : `text-blue-600 hover:underline gap-2`}>
                                {link.label}
                            </Link>
                        </div>
                    )

                })
            }
        </div>

    )
}

export default NavBar