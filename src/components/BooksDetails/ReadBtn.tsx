"use client";

import { booksContext } from "@/context/booksContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadBtn = ({ book }: { book: IBook }) => {
    const { readedBooks, setReadedBooks } = useContext(booksContext)
    const isExit = readedBooks.find(b => b.bookId === book.bookId);
    const handleSetReaded = () => {
        if (!isExit) {
            setReadedBooks([...readedBooks, book]);
            toast.success(`${book.bookName} is successfully added to readed list.`)
        } else {
            toast.error("This book already added in Readed list.")
        }
    }
    return (
        <button onClick={() => handleSetReaded()} className="btn btn-primary rounded-xl px-7">
            {isExit ? "Added to Read List" : "Read"}
        </button>
    );
};

export default ReadBtn;