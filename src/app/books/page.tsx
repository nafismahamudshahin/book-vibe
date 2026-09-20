import BookCard from '@/components/BookCard';
import { IBook } from '@/types/books.type';
import React from 'react';

const BooksPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
    const books: IBook[] = await res.json();
    return (
        <div>
            <h1 className='text-center text-2xl font-bold underline my-4'>Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    books.map((book, id) => <BookCard key={id} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default BooksPage;