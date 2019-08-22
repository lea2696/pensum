import React from "react";

import { connect } from "react-redux";
import { changeColor } from "../actions";
import ColorChange from "./ColorChange";

class Colores extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="contenedor">
        <ColorChange
          colorContenedor="blue"
          colorName="blue"
          active={this.props.color === "blue"}
        />
        <ColorChange
          colorContenedor="#00ff00"
          colorName="green"
          active={this.props.color === "#00ff00"}
        />
        <ColorChange
          colorContenedor="#ff0080"
          colorName="pink"
          active={this.props.color === "#ff0080"}
        />
        <ColorChange
          colorContenedor="orange"
          colorName="orange"
          active={this.props.color === "orange"}
        />
        <ColorChange
          colorContenedor="#364b65"
          colorName="default"
          active={this.props.color === "#364b65"}
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
