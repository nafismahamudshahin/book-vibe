"use client";
import { booksContext } from '@/context/booksContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
interface WishlistBtnProps {
    book: IBook
}
const WishlistBtn = ({ book }: WishlistBtnProps) => {
    const { wishList, setWishList } = useContext(booksContext);

    const isExit = wishList.find(b => b.bookId === book.bookId)
    const handleAddToWishList = (): void => {
        if (!isExit) {
            setWishList([...wishList, book]);
            toast.success(`${book.bookName} successfully added to wishList.`);
        } else {
            toast.error("This book already added.")
        }
    }
    return (
        <button onClick={() => handleAddToWishList()} className="btn rounded-xl border-gray-300 bg-white px-7">
            {isExit ? "Added in wishlist." : `Wishlist`}
        </button>
    );
};

export default WishlistBtn;