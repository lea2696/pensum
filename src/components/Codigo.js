import React from "react";
import { connect } from "react-redux";
import { selectMateria } from "../actions";
import "./Codigo.css";
const Codigo = props => {
  if (props.materiaCodigo) {
    return <div className="codigo">{props.materiaCodigo}</div>;
  } else {
    return <div />;
  }
};
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { selectMateria }
)(Codigo);
