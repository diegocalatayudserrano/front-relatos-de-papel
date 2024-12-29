import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartContext } from "../contexts/CartContex";
import { CartQuantityModifier } from "./CartQuantityModifier";

function CartItem({ book, quantity }) {
  const { removeItemFromCart } = useContext(CartContext);
  return (
    <div className="border rounded-3 mb-1">
      <div className="d-flex align-items-center">
        <div className="p-2">
          <img src={book.image} alt={book.image} className="book-cart-item"/>
        </div>
        <div className="p-2">
          <p>{book.title}</p>
        </div>
          <CartQuantityModifier book={book} quantity={quantity}/>
        <div className="d-flex align-items-center p-2 ms-auto">
          <div className="mt-3 me-2">
            <p>{book.price}€</p>
          </div>
          <div>
            <IconButton
              aria-label="delete"
              onClick={() => removeItemFromCart(book)}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
