import {React, useContext} from "react";
import { useSelectedBook } from "../hooks/useSelectedBook";
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import GenreTags from "../components/GenreTags";
import { CartContext } from "../contexts/CartContex";

function BookDetail() {
    const selectedBook = useSelectedBook()
    const { addItemToCart } = useContext(CartContext)

    if (!selectedBook) {
        return <p>Libro no encontrado</p>;
    }

    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-center">
          <div>
            <img src={selectedBook.image} alt={selectedBook.image} className="me-2"/>
            <div className="d-flex justify-content-center mt-3">
                <div className="me-3">
                    <Fab color="secondary" aria-label="like" size="small">
                        <FavoriteIcon />
                    </Fab>
                </div>
                <div className="mt-0">
                    <Fab color="primary" size="medium" aria-label="add" variant="extended" onClick={() => addItemToCart(selectedBook)}>
                        <AddShoppingCartIcon sx={{ mr: 1 }}/>
                        Añadir a la cesta
                    </Fab>
                </div>
            </div>
          </div>
          <div className="container">
            <h1>{selectedBook.title}</h1>
            <h5>{selectedBook.author}</h5>
            <hr />
            <p>{selectedBook.description}</p>
            <h6>Etiquetas:</h6>
            <GenreTags book={selectedBook}/>
          </div>
        </div>
      </div>
    );
}

export default BookDetail;

