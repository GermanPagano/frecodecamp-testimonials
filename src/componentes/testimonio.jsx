import React from "react";
import "../stylesheets/testimonios.css"


export
function Testimonio(props){
  return(
          <div className="contenedor-testimonio">
              <img
                className="imagen-testimonio" src={require(`../imagenes/testimonio-${props.imagen}.png`)} alt="Fotografia de emma"  />

              <div className="contenedor-texto-testimonio">

                  <p className="nombre-testimonio">
                  <strong>{props.nombre}</strong> in {props.pais}</p>

                  <p className="cargo-testimonio">
                    {props.cargo} at <strong>{props.empresa}</strong> </p>

                  <p className="text-testimonioSiem">
                    "{props.testimonio}"</p>
              </div>

          </div>
  );

};
