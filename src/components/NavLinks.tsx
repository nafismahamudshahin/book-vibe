"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = () => {
    const path = usePathname();
    return (
        <>
            <li>
                <Link href="/" className={`${path == '/' ? "text-primary" : ""} font-medium transition-colors hover:text-primary`}>
                    Home
                </Link>
            </li>

            <li>
                <Link href="/books" className={`${path == '/books' ? "text-primary" : ""} font-medium transition-colors hover:text-primary`}>
                    Books
                </Link>
            </li>
            <li>
                <Link href="/listed-books" className={`${path == '/listed-books' ? "text-primary" : ""} font-medium transition-colors hover:text-primary`}>
                    Listed Books
                </Link>
            </li>
            <li>
                <Link href="/read-books" className={`${path == '/read-books' ? "text-primary" : ""} font-medium transition-colors hover:text-primary`} >
                    Read Books
                </Link>
            </li>
        </>
    );
};

export default NavLinks;