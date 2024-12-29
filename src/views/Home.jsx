import React, { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
import BookPreview from "../components/BookPreview";
import { CircularProgress } from "@mui/material";
import '../styles/styles.css';
import { Banner } from "../components/Banner";

export const Home = () => {

    const books = useContext(BooksContext)

    return (
        <>
        <Banner />
        <div className="d-flex justify-content-center mt-3">
            <span className="badge rounded-pill py-3 px-4 bg-color-custom text-light">Todos</span>
        </div>
        <div className="container mt-3">

            <div className="row">
                {
                    books.books.length > 0 ? (
                        books.books.map(book => (
                            <div className="col-lg-2 col-md-4 col-6 mb-2">
                                <BookPreview 
                                    id={book.id}
                                    title={book.title}
                                    author={book.author}
                                    image={book.image}
                                />
                            </div>
                        ))
                    ) : (
                        <CircularProgress />
                    )
                }
            </div>
        </div>
        </>
    )
}