"use client";

import { IBook } from '@/types/books.type';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';


interface BooksContextType {
    readedBooks: IBook[];
    setReadedBooks: Dispatch<SetStateAction<IBook[]>>;

    wishList: IBook[];
    setWishList: Dispatch<SetStateAction<IBook[]>>;
}

export const booksContext = createContext<BooksContextType>({
    readedBooks: [],
    setReadedBooks: () => { },

    wishList: [],
    setWishList: () => { },
});

const BooksProvider = ({ children }: { children: ReactNode }) => {
    const [readedBooks, setReadedBooks] = useState<IBook[]>([]);
    const [wishList, setWishList] = useState<IBook[]>([]);

    return (
        <booksContext.Provider value={{ readedBooks, setReadedBooks, wishList, setWishList }}>
            {children}
        </booksContext.Provider>
    );
};

export default BooksProvider;