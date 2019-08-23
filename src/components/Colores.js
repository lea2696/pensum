import React from "react";

import { connect } from "react-redux";
import { changeColor } from "../actions";
import ColorChange from "./ColorChange";

class Colores extends React.Component {
  render() {
  
    return (
      <div className="contenedor">
        <ColorChange
          colorContenedor="azul"
          colorName="blue"
          
          active={this.props.color === "blue"}
        />
        <ColorChange
          colorContenedor="verde"
          colorName="green"
          active={this.props.color === "green"}
        />
        <ColorChange
          colorContenedor="rosado"
          colorName="pink"
          active={this.props.color === "pink"}
        />
        <ColorChange
          colorContenedor="naranja"
          colorName="orange"
          active={this.props.color === "orange"}
        />
        <ColorChange
          colorContenedor="gris"
          colorName="default"
          active={this.props.color === "default"}
        />
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { changeColor }
)(Colores);
