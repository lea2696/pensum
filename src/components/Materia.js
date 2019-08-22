import React from "react";
import { connect } from "react-redux";
import { changeColor } from "../actions";
import "./Pensum.css";
class Materia extends React.Component {
  state = {
    color: null
  };

  cambiarColor = () => {
    this.setState({ color: this.props.color });
  };
  render() {
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
  { changeColor }
)(Materia);
