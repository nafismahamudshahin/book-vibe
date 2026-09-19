import BookCard from "@/components/BookCard";
import HeroBanner from "@/components/HeroBanner";
import { IBook } from "@/types/books.type";

const Home = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const books: IBook[] = await res.json();
  return (
    <>
      <HeroBanner></HeroBanner>
      <section className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        {
          books.slice(0, 6).map((book, id) => <BookCard key={id} book={book}></BookCard>)
        }
      </section>
    </>
  );
};

export default Home;