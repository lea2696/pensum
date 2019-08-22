import React from "react";
import { connect } from "react-redux";
import "./Pensum.css";
import Materia from "./Materia.js";

class Pensum extends React.Component {
  renderNombre = index => {
    if (index === 0) {
      return "CBC";
    } else {
      return `${index + 2}  º`;
    }
  };

  renderPensum = () => {
    return this.props.cuatrimestre.map((cuatrimestre, index) => (
      <ul className="cuatrimestre" key={index}>
        <span className="nombre"> {this.renderNombre(index)}</span>
        <div className="container">
          {cuatrimestre.map(data =>
            Object.keys(data).map(materia => (
              <Materia key={materia} materia={materia} />
            ))
          )}
        </div>
      </ul>
    ));
  };
  render() {
    return <div>{this.renderPensum()}</div>;
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Pensum);
