import ReadBtn from '@/components/BooksDetails/ReadBtn';
import WishlistBtn from '@/components/BooksDetails/WishlistBtn';
import { IBook } from '@/types/books.type';
import Image from 'next/image';
import React from 'react';

const BookDetailsPage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    const res = await fetch(`https://mocki.io/v1/7c215432-41d2-4216-a578-eb06eb52565a`, { next: { revalidate: 40 } });
    const books: IBook[] = await res.json();
    const data = books.find(book => String(book.bookId) == String(id));
    if (typeof data === "undefined") {
        return "404 Page not foun!"
    }
    const book: IBook = data;
    return (
        <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12 lg:py-16">
            <div className="grid items-center gap-12 lg:grid-cols-2">

                {/* Image */}
                <div className="flex justify-center">
                    <div className="relative">

                        <div className="absolute -inset-4 rotate-3 rounded-3xl bg-amber-200/70" />

                        <div className="relative overflow-hidden rounded-2xl bg-white p-4 shadow-2xl">
                            <Image
                                src={book.image}
                                alt={book.bookName}
                                width={450}
                                height={600}
                                className="h-[500px] w-[350px] rounded-xl object-cover sm:h-[580px] sm:w-[400px]"
                            />
                        </div>

                        {/* Rating */}
                        <div className="absolute -bottom-5 -right-5 rounded-2xl bg-gray-900 px-5 py-4 text-white shadow-xl">
                            <p className="text-xs text-gray-400">
                                Rating
                            </p>

                            <p className="text-xl font-bold">
                                ⭐ {book.rating}
                                <span className="ml-1 text-sm font-normal text-gray-400">
                                    / 5
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-xl">

                    {/* Category */}
                    <span className="inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
                        {book.category}
                    </span>

                    {/* Title */}
                    <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
                        {book.bookName}
                    </h1>

                    {/* Author */}
                    <p className="mt-4 text-lg text-gray-600">
                        Written by{" "}
                        <span className="font-semibold text-gray-900">
                            {book.author}
                        </span>
                    </p>

                    {/* Review */}
                    <div className="mt-8">
                        <h2 className="text-xl font-bold text-gray-900">
                            About this book
                        </h2>

                        <p className="mt-3 text-base leading-8 text-gray-600">
                            {book.review}
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                        {book.tags.map((tag: string) => (
                            <span
                                key={tag}
                                className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Book Information */}
                    <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-gray-200 bg-white p-5 sm:grid-cols-3">

                        <div>
                            <p className="text-sm text-gray-500">
                                Pages
                            </p>
                            <p className="mt-1 font-bold text-gray-900">
                                {book.totalPages}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Published
                            </p>
                            <p className="mt-1 font-bold text-gray-900">
                                {book.yearOfPublishing}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Publisher
                            </p>
                            <p className="mt-1 truncate font-bold text-gray-900">
                                {book.publisher}
                            </p>
                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <ReadBtn book={book}></ReadBtn>
                        <WishlistBtn book={book}></WishlistBtn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookDetailsPage;