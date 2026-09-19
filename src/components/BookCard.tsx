import Image from "next/image";
import React from "react";
import { IBook } from "@/types/books.type";
import Link from "next/link";

interface BookCardProps {
    book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Image */}
            <div className="relative h-72 overflow-hidden bg-base-200">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Category */}
                <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-base-100/90 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur">
                        {book.category}
                    </span>
                </div>

                {/* Rating */}
                <div className="absolute right-4 top-4">
                    <span className="flex items-center gap-1 rounded-full bg-gray-900/80 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur">
                        ⭐ {book.rating}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Title */}
                <h2 className="line-clamp-1 text-xl font-bold text-base-content transition-colors group-hover:text-primary">
                    {book.bookName}
                </h2>

                {/* Author */}
                <p className="mt-1 text-sm text-base-content/60">
                    by <span className="font-medium">{book.author}</span>
                </p>

                {/* Review */}
                <p className="mt-4 line-clamp-2 text-sm leading-6 text-base-content/70">
                    {book.review}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {book.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Divider */}
                <div className="my-4 border-t border-base-200" />

                {/* Book Information */}
                <div className="grid grid-cols-2 gap-3 text-sm">

                    <div>
                        <p className="text-xs text-base-content/50">
                            Pages
                        </p>
                        <p className="font-semibold">
                            {book.totalPages}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-base-content/50">
                            Published
                        </p>
                        <p className="font-semibold">
                            {book.yearOfPublishing}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-base-content/50">
                            Publisher
                        </p>
                        <p className="truncate font-semibold">
                            {book.publisher}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-base-content/50">
                            Rating
                        </p>
                        <p className="font-semibold">
                            {book.rating} / 5
                        </p>
                    </div>

                </div>

                {/* Button */}
                <Link href={`/books/${book.bookId}`}>
                    <button className="btn btn-primary mt-5 w-full rounded-xl">
                        View Details →
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BookCard;