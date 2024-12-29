import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import useRedirection from "../hooks/useRedirection";
import { Link } from "react-router-dom";

function Landing() {
  useRedirection("/home", 3000);

  return (
    <div className="container-fluid text-bg-dark vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1>Accediendo a Relatos de papel</h1>
        <p>¡Bienvenidos a Relatos de Papel! 📚✨ Aquí encontrarás todos los libros que quieras para sumergirte en nuevas historias y aventuras. 🖋️ ¡Explora, elige y disfruta de tu próximo relato favorito!</p>
        <Link to={"/home/"}>
          <p>Haz clic aquí para ir a la página de inicio</p>
        </Link>
          <CircularProgress />
      </div>
    </div>
  );
}

export default Landing

