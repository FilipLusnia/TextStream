import React, { useEffect, useState } from "react";

export default function BookList() {
  const [books, setBooks] = useState<any[]>([])

  useEffect(() => {
    async function loadBooks() {
      const request = await fetch("http://localhost:4000/books", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("@token"),
        }
      });

      const allBooks = await request.json();
      setBooks(allBooks.books);
    }
    loadBooks();
  }, []);

  return (
    <div className="container">
      <h1>BookList</h1>
      {books?.map(book => (
        <div key={book.id} className="booklist">
          <img className="image" alt={book} src={book.image} />
          <h3>{book.name}</h3>
        </div>
      ))}
    </div>
  );
}