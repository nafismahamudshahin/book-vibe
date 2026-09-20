"use client";
import { booksContext } from '@/context/booksContext';
import React, { useContext } from 'react';

const ListedBooksPage = () => {
    const { readedBooks, wishList } = useContext(booksContext)
    return (
        <div>
            <h1>
                books {readedBooks.length}
            </h1>
            WishList {wishList.length}
        </div>
    );
};

export default ListedBooksPage;