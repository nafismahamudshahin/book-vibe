"use client";
import ListedBooksCard from '@/components/BooksDetails/ListedBooksCard';
import { booksContext } from '@/context/booksContext';
import { IBook } from '@/types/books.type';
import React, { useContext, useState } from 'react';

const ListedBooksPage = () => {

    const { readedBooks, wishList } = useContext(booksContext)
    const [selectSort, setSelectSort] = useState("");
    const booksSorted = (books: IBook[]): IBook[] => {
        const booksForSort = [...books];
        if (selectSort === "rating") {
            return booksForSort.sort((a, b) => b.rating - a.rating);
        } else if (selectSort === "year") {
            return booksForSort.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }
        return booksForSort.sort((a, b) => b.totalPages - a.totalPages);
    }
    const sorteRededBooks = booksSorted(readedBooks);
    const sorteWishListBooks = booksSorted(wishList);
    return (
        <div>
            <h1 className='text-center text-3xl font-bold py-3'> books</h1>
            <div>
                {/* sort */}
                <select onChange={(e) => setSelectSort(e.target.value)} defaultValue="Pick a language" className="select select-secondary">
                    <option disabled={true}>Pick a language</option>
                    <option value="rating">by rating </option>
                    <option value="year">by year</option>
                    <option value="pages">by pages</option>
                </select>
            </div>
            <div>
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-box">
                    <input type="radio" name="my_tabs_6" className="tab" aria-label="Readed Books" />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        <div className='grid grid-cols-1 gap-5'>

                            {
                                sorteRededBooks.map(book => <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>)
                            }
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_6" className="tab" aria-label="WishList" defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6 ">
                        <div className='grid grid-cols-1 gap-5'>

                            {
                                sorteWishListBooks.map(book => <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooksPage;