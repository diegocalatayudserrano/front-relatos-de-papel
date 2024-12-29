import React, { useState, useContext } from "react";
import { Button, Drawer, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/styles.css";
import { CartContext } from "../contexts/CartContex";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Cart() {
  const [cartOpened, toggleCartState] = useState(false);
  const { cart, totalPrice, totalItems } = useContext(CartContext);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  return (
    <>
      <Button
        startIcon={<ShoppingCartIcon />}
        onClick={() => toggleCartState(true)}
        sx={{
          color: "white",
        }}
      >
        <span>Cesta [{totalItems()}]</span>
      </Button>
      <Drawer
        anchor="right"
        open={cartOpened}
        onClose={() => toggleCartState(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: isSmallScreen ? "90%" : isMediumScreen ? "50%" : "30%",
          },
        }}
      >
        <div className="d-flex flex-column vh-100">
          <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
            <h3 className="m-0">Tu Cesta</h3>
            <IconButton
              aria-label="close"
              onClick={() => toggleCartState(false)}
            >
              <CloseIcon />
            </IconButton>
          </div>

          <div className="flex-grow-1 overflow-auto p-3">
            {cart?.length > 0 ? (
              <>
                {cart.map((item) => (
                  <div key={item.book.id} className="mb-3">
                    <CartItem
                      book={item.book}
                      quantity={item.quantity}
                      image={item.book.image}
                    />
                  </div>
                ))}
              </>
            ) : (
              <div>
                <h6>Tu cesta está vacía</h6>
                <p>
                  Busca productos que te interesen, visualiza los que te gusten
                  y añádelos al carrito para comprarlos. ¡No te quedes con las
                  ganas!
                </p>
              </div>
            )}
          </div>

          {cart?.length > 0 && (
            <div className="border-top p-3 bg-light">
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">TOTAL:</span>
                <span className="fw-bold">{totalPrice()}€</span>
              </div>
              <Link to={"/checkout/"}>
                <button className="p-4 bg-color-custom w-100 text-light">
                  Ir al pago
                </button>
              </Link>
            </div>
          )}
        </div>
      </Drawer>
    </>
  );
}

export default Cart;
