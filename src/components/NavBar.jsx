"use client"

import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import "../app/globals.css"

const NavBar = () => {

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
        { href: "/products", label: "Products" },
        { href: "/blog", label: "Blog" },
    ]

    const pathname = usePathname();

    return (
        <div className="flex gap-8 p-4 justify-center text-xl border-b-2 border-gray-300 mb-8 bg-white w-full">
            {
                navLinks.map((link) => {
                    const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

                    return (
                        <div key={link.href} className="flex">
                            <Link href={link.href} className={isActive ? `text-red-700 hover:underline gap-2 text-2xl` : `text-blue-600 hover:underline gap-2`}>
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