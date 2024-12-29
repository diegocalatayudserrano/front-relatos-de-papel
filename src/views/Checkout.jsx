import React, { useContext } from "react";
import "../styles/styles.css";
import { CartContext } from "../contexts/CartContex";
import CartItem from "../components/CartItem";
import CheckoutSummary from "../components/CheckoutSummary";

function Checkout() {
  const { cart } = useContext(CartContext);
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8">
            <h1>Lista de productos</h1>
            {cart?.length > 0 ? (
              <div className="mt-4">
                {cart.map((item) => (
                  <div key={item.book.id} className="mb-3">
                    <CartItem book={item.book} quantity={item.quantity} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-4">
                <h6>Tu cesta está vacía</h6>
                <p>
                  Busca productos que te interesen, visualiza los que te gusten
                  y añádelos al carrito para comprarlos. ¡No te quedes con las
                  ganas!
                </p>
              </div>
            )}
          </div>
          <div className="col-lg-4">
            <CheckoutSummary />
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
