"use client";
import ListedBooksCard from '@/components/BooksDetails/ListedBooksCard';
import { booksContext } from '@/context/booksContext';
import Image from 'next/image';
import React, { useContext } from 'react';

const ListedBooksPage = () => {
    const { readedBooks, wishList } = useContext(booksContext)
    return (
        <div>
            <h1 className='text-center text-3xl font-bold py-3'> books</h1>
            <div>
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-box">
                    <input type="radio" name="my_tabs_6" className="tab" aria-label="Readed Books" />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        <div className='grid grid-cols-1 gap-5'>

                            {
                                readedBooks.map(book => <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>)
                            }
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_6" className="tab" aria-label="WishList" defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6 ">
                        <div className='grid grid-cols-1 gap-5'>

                            {
                                wishList.map(book => <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooksPage;