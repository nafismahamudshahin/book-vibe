"use client";

import { booksContext } from "@/context/booksContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";

const ReadBtn = ({ book }: { book: IBook }) => {
    const { readedBooks, setReadedBooks } = useContext(booksContext)
    const handleSetReaded = () => {
        setReadedBooks([...readedBooks, book]);
    }
    return (
        <button onClick={() => handleSetReaded()} className="btn btn-primary rounded-xl px-7">
            Read
        </button>
    );
};

export default ReadBtn;