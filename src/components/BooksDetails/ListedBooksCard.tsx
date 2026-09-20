import { IBook } from '@/types/books.type';
import Image from 'next/image';
import React from 'react';

const ListedBooksCard = ({ book }: { book: IBook }) => {
    return (
        <>
            <div className="flex w-full gap-6 rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">

                {/* Book Image */}
                <div className="relative h-56 w-40 shrink-0 overflow-hidden rounded-lg">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Book Information */}
                <div className="flex flex-1 flex-col">
                    <span className="mb-2 w-fit rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                        {book.category}
                    </span>

                    <h2 className="text-2xl font-bold text-gray-900">
                        {book.bookName}
                    </h2>

                    <p className="mt-1 text-gray-600">
                        By <span className="font-medium">{book.author}</span>
                    </p>

                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
                        {book.review}
                    </p>

                    {/* Tags */}
                    <div className="mt-3 flex flex-wrap gap-2">
                        {book.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-600"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Book Details */}
                    <div className="mt-auto grid grid-cols-2 gap-x-6 gap-y-2 pt-4 text-sm">
                        <p>
                            <span className="text-gray-500">Pages:</span>{" "}
                            <span className="font-semibold">{book.totalPages}</span>
                        </p>

                        <p>
                            <span className="text-gray-500">Rating:</span>{" "}
                            <span className="font-semibold">⭐ {book.rating}</span>
                        </p>

                        <p>
                            <span className="text-gray-500">Publisher:</span>{" "}
                            <span className="font-semibold">{book.publisher}</span>
                        </p>

                        <p>
                            <span className="text-gray-500">Published:</span>{" "}
                            <span className="font-semibold">{book.yearOfPublishing}</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListedBooksCard;