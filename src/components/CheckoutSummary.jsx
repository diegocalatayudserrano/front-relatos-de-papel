import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContex";

function CheckoutSummary() {
  const { totalPrice, totalItems } = useContext(CartContext);
  return (
    <>
      <h1>Resumen del pedido</h1>
      <div className="border rounded-2 mt-4 p-3">
        <div className="d-flex mt-2 mb-3">
          <span className="text-muted">Nº total de artículos</span>
          <span className="text-muted ms-auto">{totalItems()}</span>
        </div>
        <div className="d-flex mb-3">
          <span className="text-muted">TOTAL</span>
          <span className="text-muted ms-auto">{totalPrice()}€</span>
        </div>

        <button className="p-4 w-100 bg-black text-light mt-5">Ir al pago</button>
      </div>
    </>
  );
}

export default CheckoutSummary;
