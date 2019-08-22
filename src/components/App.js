import React from "react";
import Pensum from "./Pensum";
import Colores from "./Colores";
import Codigo from "./Codigo";
const estilosTitulo = {
  fontFamily: "Arial",
  textAlign: "center"
};
const App = props => {
  return (
    <div style={{ position: "relative" }}>
      <h2 className="titulo" style={estilosTitulo}>
        Pensum Ingenieria Industrial UBA{" "}
      </h2>
      <Pensum />
      <Colores />
      <Codigo />
    </div>
  );
};

export default App;
