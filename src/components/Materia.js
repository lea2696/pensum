import React from "react";
import { connect } from "react-redux";
import { changeColor, selectMateria } from "../actions";
import "./Pensum.css";

class Materia extends React.Component {
  state = {
    color: "",
    selected: false
  };
  cambiarColor = () => {
    if (this.props.color) {
      this.setState({ color: this.props.color });
    }
    if (!this.props.color) {
      console.log("Mostrar materia");
      this.props.selectMateria(this.props.materia);
      this.setState({ selected: true });
    }
  };
  render() {
    if (
      this.props.todasMaterias[this.props.materia] === this.props.materiaCodigo
    ) {
      console.log("entre");
      return (
        <li
          ref={this.myRef}
          className="materias"
          style={{
            background: `${this.state.color}`,
            border: "6px solid pink"
          }}
          onClick={() => this.cambiarColor()}
        >
          {this.props.materia}
        </li>
      );
    }
    return (
      <li
        className="materias"
        style={{ background: `${this.state.color}` }}
        onClick={() => this.cambiarColor()}
      >
        {this.props.materia}
      </li>
    );
  }
}
const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { changeColor, selectMateria }
)(Materia);
