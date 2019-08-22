import { combineReducers } from "redux";

const pensum = () => [
  [
    "Introduccion al Pensamiento Cientifico",
    "Introduccion al Conocimiento de la Sociedad y el Estado",
    "Analisis Matematico",
    " Algebra",
    "Fisica",
    "Quimica"
  ],
  [
    "Analisis Matematico II",
    "Fisica I",
    "Quimica",
    "Introduccion a la Ingenieria Industrial"
  ],

  ["Algebra II", " Fisica II", "Quimica Aplicada", "Computacion"],

  [
    "Estatica y Resistencia de Materiales",
    "Electrotecnia General",
    "Medios de Representacion",
    "Fisica III B",
    " Mecanica de Fluidos"
  ],
  [
    "Termodinamica",
    "Mecanismos",
    "Probabilidad",
    "Metodos Matematicos y Numericos",
    "Materiales Industriales I"
  ],
  [
    "Industrias I",
    "Maquinas Termicas",
    "Microeconomia Aplicada",
    "Organizacion Industrial I",
    "Asignatura Humanistica Electiva"
  ],

  [
    "Organizacion Industrial II",
    "Macroeconomia y Estructura Economica Argentina",
    "Industrias II",
    "Higiene y Seguridad Industrial",
    "Estadistica Aplicada II"
  ],
  [
    "Investigacion Operativa I",
    "Instalacion Industriales",
    "PRocesos de Manufactura I",
    "Gestion de Calidad",
    "Gestion de Costos",
    "Electiva"
  ],
  [
    "Investigacion Operativa II",
    "Automatizacion Industrial y Robotica",
    "Edificios Industriales",
    "Recursos Humanos",
    "Comercializacion",
    "Electiva"
  ],
  [
    "Procesos de Manufactura  II",
    "Ingenieria Economica A",
    "Logisitica",
    "Gestion Ambiental",
    "Tesis"
  ],
  [
    "Gestion Financiera",
    "Organizacion Industrial III ",
    "Ingenieria Legal para Ingenieria Industrial",
    "Tesis"
  ]
];

const getColores = (state = "white", action) => {
  if (action.type === "CHANGE_COLOR") {
    if (action.payload === state) {
      return "white";
    }
    return action.payload;
  } else {
    return state;
  }
};
export default combineReducers({
  pensum,
  color: getColores
});
