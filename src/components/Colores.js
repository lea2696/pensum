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
          active={this.props.color === "blue"}
        />
        <ColorChange
          colorContenedor="green"
          active={this.props.color === "green"}
        />
        <ColorChange
          colorContenedor="yellow"
          active={this.props.color === "yellow"}
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
