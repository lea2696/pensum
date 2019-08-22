import React from "react";
import { connect } from "react-redux";
import "./Pensum.css";
import Materia from "./Materia.js";

class Pensum extends React.Component {
  renderNombre = index => {
    if (index === 0) {
      return "CBC";
    } else {
      return `${index + 2} Cuatrimestre`;
    }
  };

  renderPensum = () => {
    return this.props.pensum.map((cuatrimestre, index) => (
      <ul className="cuatrimestre" key={cuatrimestre}>
        <span className="nombre"> {this.renderNombre(index)}</span>
        {cuatrimestre.map(materia => (
          <Materia key={materia} materia={materia} />
        ))}
      </ul>
    ));
  };
  render() {
    console.log(this.props);
    return <div>{this.renderPensum()}</div>;
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Pensum);
