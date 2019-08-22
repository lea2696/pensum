import React from "react";
import { connect } from "react-redux";
import { selectMateria } from "../actions";
import "./Codigo.css";
const Codigo = props => {
  return <div className="codigo">{props.materiaCodigo}</div>;
};
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { selectMateria }
)(Codigo);
