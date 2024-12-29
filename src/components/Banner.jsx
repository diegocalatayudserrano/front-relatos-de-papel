import React from "react";
import "../styles/styles.css";

export const Banner = () => {
  return (
    <div className="banner">
      <div className="container h-100">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div>
            <h3 className="text-light">
                Encuentra el libro que desees
            </h3>
            <input type="text" className="form-control" placeholder="Buscar por título"/>
          </div>
        </div>
      </div>
    </div>
  );
};
