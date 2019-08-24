import { combineReducers } from "redux";
import cuatrimestre from "../components/codigos";
import { materias } from "../components/codigos";

const getMaterias = () => cuatrimestre;
const todasMaterias = () => materias;
const getColores = (state = "", action) => {
  if (action.type === "CHANGE_COLOR") {
    if (action.payload === state) {
      return "";
    }
    return action.payload;
  } else {
    return state;
  }
};
const colorSeleccionado = (state = false, action) => {
  if (action.type === "CHANGE_COLOR") {
    if (action.payload === state) {
      return { colorSelect: true };
    }
    return { colorSelect: false };
  } else {
    return state;
  }
};
const mostarNombre = (state = "", action) => {
  if (action.type === "SELECT_MATERIA") {
    return materias[action.payload];
  } else {
    return "";
  }
};
const mostrarRequisitos = (state = [], action) => {
  if (action.type === "REQUISITOS") {
    return action.payload;
  } else {
    return state;
  }
};

export default combineReducers({
  cuatrimestre: getMaterias,
  color: getColores,
  colorSelect: colorSeleccionado,
  materiaCodigo: mostarNombre,
  todasMaterias: todasMaterias,
  requisitos: mostrarRequisitos
});
