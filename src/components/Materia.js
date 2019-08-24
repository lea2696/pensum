import React from "react";
import { connect } from "react-redux";
import { changeColor, selectMateria } from "../actions";
import "./Pensum.css";

class Materia extends React.Component {
  state = {
    color: "",
    selected: false
  };
  componentDidMount() {
    const color = localStorage.getItem(this.props.materia);
    if (color) {
      this.setState({ color });
    }
  }
  componentWillUpdate(nextProps) {
    if (
      nextProps.materiaCodigo !==
        this.props.todasMaterias[this.props.materia] &&
      this.state.selected
    ) {
      this.setState({ selected: false });
    }
  }

  click = () => {
    if (this.props.color) {
      //Define el color que este seleccionada en el momento, va desde redux
      this.setState({ color: this.props.color });
      localStorage.setItem(this.props.materia, this.props.color);
    }
    if (!this.props.color) {
      this.props.selectMateria(this.props.materia);
      this.setState({ selected: true });
    }
    if (
      this.props.todasMaterias[this.props.materia] ===
        this.props.materiaCodigo &&
      this.state.selected
    ) {
      this.props.changeColor("");
    }
  };
  render() {
    let clase = `materias ${this.state.color} `;
    if (
      this.props.todasMaterias[this.props.materia] ===
        this.props.materiaCodigo &&
      this.state.selected
    ) {
      clase += "active";
    } else if (this.props.materiaCodigo) {
      clase += "desactivo"; //Para cambiar la opacidad de los colores cuando se selccione una materia que no sea esta
    } else {
      clase = `materias ${this.state.color} `;
    }

    return (
      <li className={clase} onClick={() => this.click()}>
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
