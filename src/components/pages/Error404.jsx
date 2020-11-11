import React from "react";
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "/404.jpg"} alt="404"/>
      <p style={{ textAlign: "center" }}>
        <Link to="/">Revenir à l'Accueil</Link>
      </p>
    </div>
  );
}

export default Error404;
