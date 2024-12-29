import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "../contexts/BooksContext";

export function useSelectedBook() {
  const { id } = useParams()
  const { books } = useContext(BooksContext)

  const selectedBook = books.find(book => book.id === id);

  return selectedBook;
}
