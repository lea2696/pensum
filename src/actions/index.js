import { requisitos } from "../components/codigos";

export const changeColor = color => {
  return {
    type: "CHANGE_COLOR",
    payload: color
  };
};
export const selectMateria = materia => {
  return {
    type: "SELECT_MATERIA",
    payload: materia
  };
};
export const selectRequisitos = materia => {
  return {
    type: "REQUISITOS",
    payload: requisitos[materia]
  };
};
