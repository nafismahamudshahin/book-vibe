"use client";
import { booksContext } from '@/context/booksContext';
import React, { useContext } from 'react';

const ListedBooksPage = () => {
    const { readedBooks, setReadedBooks } = useContext(booksContext)
    return (
        <div>
            books {readedBooks.length}
        </div>
    );
};

export default ListedBooksPage;