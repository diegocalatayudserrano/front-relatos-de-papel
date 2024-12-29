import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

function BookPreview({ id, title, author, image }) {

  return (
    <div>
      <Link to={`/book/${id}`}>
        <a>
          <img src={image} alt={image} className="book" />
        </a>
      </Link>
      <div>
        <h6>{title}</h6>
        <p>{author}</p>
      </div>
    </div>
  );
}

export default BookPreview;
