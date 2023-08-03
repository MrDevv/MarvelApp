import React from "react";

export const ItemPersonaje = ({personaje}) => {
  return (
    <div className="card-personaje">
      <div className="fondo">
        <img src={personaje.image} alt="spiderman" />
      </div>
      <span>Comics: {personaje.comics}</span>
      <h1>{personaje.name}</h1>
    </div>
  );
};
