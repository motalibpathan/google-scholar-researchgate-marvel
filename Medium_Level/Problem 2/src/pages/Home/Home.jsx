import React from "react";
import AboutProject from "../../components/AboutProject";
import BookList from "../../components/BookList";
import BrowseBySubject from "../../components/BrowseBySubject";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import List from "../../components/List";

const Home = () => {
  const trendingBooks = [
    {
      id: 1,
      img: "https://covers.openlibrary.org/b/id/8231990-M.jpg",
      status: "Join Waitlist",
    },
    {
      id: 2,
      img: "https://covers.openlibrary.org/b/id/10473609-M.jpg",
      status: "Not in Library",
    },
    {
      id: 3,
      img: "https://covers.openlibrary.org/b/id/12539702-M.jpg",
      status: "Checked Out",
    },
    {
      id: 4,
      img: "https://covers.openlibrary.org/b/id/12749873-M.jpg",
      status: "Borrow",
    },
    {
      id: 5,
      img: "https://covers.openlibrary.org/b/id/6424160-M.jpg",
      status: "Checkout",
    },
    {
      id: 6,
      img: "https://covers.openlibrary.org/b/id/10601402-M.jpg",
      status: "Not in Library",
    },
  ];
  const classicBooks = [
    {
      id: 1,
      img: "https://covers.openlibrary.org/b/id/4309625-M.jpg",
      status: "Join Waitlist",
    },
    {
      id: 2,
      img: "https://covers.openlibrary.org/b/id/8252945-M.jpg",
      status: "Not in Library",
    },
    {
      id: 3,
      img: "https://covers.openlibrary.org/b/id/5838450-M.jpg",
      status: "Checked Out",
    },
    {
      id: 4,
      img: "https://covers.openlibrary.org/b/id/6041220-M.jpg",
      status: "Borrow",
    },
    {
      id: 5,
      img: "https://covers.openlibrary.org/b/id/4662586-M.jpg",
      status: "Borrow",
    },
    {
      id: 6,
      img: "https://covers.openlibrary.org/b/id/2021016-M.jpg",
      status: "Not in Library",
    },
    {
      id: 7,
      img: "https://covers.openlibrary.org/b/id/8954048-M.jpg",
      status: "Read",
    },
    {
      id: 8,
      img: "https://covers.openlibrary.org/b/id/13090971-M.jpg",
      status: "Not in Library",
    },
  ];
  const booksWeLove = [
    {
      id: 1,
      img: "https://covers.openlibrary.org/w/id/8223160-M.jpg",
      status: "Join Waitlist",
    },
    {
      id: 2,
      img: "https://covers.openlibrary.org/w/id/8345848-M.jpg",
      status: "Not in Library",
    },
    {
      id: 3,
      img: "https://covers.openlibrary.org/w/id/4974859-M.jpg",
      status: "Checked Out",
    },
    {
      id: 4,
      img: "https://covers.openlibrary.org/w/id/7886954-M.jpg",
      status: "Borrow",
    },
    {
      id: 5,
      img: "https://covers.openlibrary.org/w/id/1321317-M.jpg",
      status: "Borrow",
    },
    {
      id: 6,
      img: "https://covers.openlibrary.org/w/id/8431392-M.jpg",
      status: "Not in Library",
    },
    {
      id: 7,
      img: "https://covers.openlibrary.org/w/id/10522593-M.jpg",
      status: "Read",
    },
    {
      id: 8,
      img: "https://covers.openlibrary.org/w/id/4704860-M.jpg",
      status: "Not in Library",
    },
  ];

  return (
    <>
      <Header />
      <List />
      <BookList books={trendingBooks} title="Trending Books" />
      <BookList books={classicBooks} title="Classic Books" />
      <BookList books={booksWeLove} title="Books We Love" />
      <BookList books={trendingBooks} title="Recently Returned" />
      <BookList books={classicBooks} title="Romance" />
      <BookList books={trendingBooks} title="Kids" />
      <BookList books={booksWeLove} title="Thrillers" />
      <BookList books={trendingBooks} title="Textbooks" />
      <BookList books={trendingBooks} title="Authors Alliance & MIT Press" />
      <BrowseBySubject />
      <AboutProject />
      <Footer />
    </>
  );
};

export default Home;
