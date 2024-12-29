import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContex";
import { IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const CartQuantityModifier = ({ book, quantity }) => {
  const { editQuantity } = useContext(CartContext);

  return (
    <div className="d-flex align-items-center border">
      <IconButton
        aria-label="remove"
        size="small"
        onClick={() => editQuantity(book, "-")}
      >
        <RemoveIcon />
      </IconButton>
      <span className="text-muted">
        {quantity}
      </span>
      <IconButton
        aria-label="add"
        size="small"
        onClick={() => editQuantity(book, "+")}
      >
        <AddIcon />
      </IconButton>
    </div>
  );
};
