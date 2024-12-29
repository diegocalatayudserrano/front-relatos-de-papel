import React from "react";

function GenreTags({ book }) {
    return (
      <div className="d-flex flex-wrap">
        {book.genre.map((tag, index) => (
          <span
            key={index}
            className="badge text-bg-secondary me-2"
          >
            {tag}
          </span>
        ))}
      </div>
    );
  }
  
  export default GenreTags;
  
