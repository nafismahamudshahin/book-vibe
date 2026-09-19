"use client";

import React, { createContext, ReactNode, useState } from 'react';
export const booksContext = createContext({});
const BooksProvider = ({ children }: { children: ReactNode }) => {
    const [readedBooks, setReadedBooks] = useState([]);
    const [wishList, setWishList] = useState([]);
    const sharedData = {
        readedBooks, setReadedBooks, wishList, setWishList
    }
    return (
        <booksContext.Provider value={sharedData}>
            {children}
        </booksContext.Provider>
    );
};

export default BooksProvider;