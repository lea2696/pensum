import React from "react";
import "./Colores.css";
import { connect } from "react-redux";
import { changeColor } from "../actions";

const ColorChange = props => {
  let clase = `${props.active ? "activo" : "noactivo"} ${props.colorContenedor}`;

  return (
    <div
      className={clase}
      onClick={() => props.changeColor(props.colorName)}
    />
  );
};
export default connect(
  null,
  { changeColor }
)(ColorChange);
