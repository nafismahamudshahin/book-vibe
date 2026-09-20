import BookCard from "@/components/BookCard";
import HeroBanner from "@/components/HeroBanner";
import { IBook } from "@/types/books.type";

const Home = async () => {
  const res = await fetch(`https://mocki.io/v1/7c215432-41d2-4216-a578-eb06eb52565a`);
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