export const materias = {
  "40": "Introduccion al Pensamiento Cientifico",
  "24": "Introduccion al Conocimiento de la Sociedad y el Estado",
  "66": "Analisis Matematico",
  "62": " Algebra",
  "03": "Fisica",
  "5": "Quimica",
  "81.01": "Analisis Matematico II",
  "82.01": "Fisica I",
  "83.01": "Quimica I",
  "92.03": "Introduccion a la Ingenieria Industrial",
  "81.02": "Algebra II",
  "82.02": " Fisica II",
  "83.02": "Quimica Aplicada",
  "95.01": "Computacion",
  "81.16": "Probabilidad",
  "84.05": "Estatica y Resistencia de Materiales",
  "85.38": "Electrotecnia General",
  "87.13": "Medios de Representacion",
  "87.12": "Mecanismos",
  "87.14": "Termodinamica",
  "91.33": "Microeconomia Aplicada",
  "92.01": "Materiales Industriales I",
  "95.13": "Metodos Matematicos y Numericos",
  "89.17": "Mecanica de Fluidos",
  "91.03": "Estadistica Aplicada",
  "91.10": "Organizacion Industrial I",
  "91.24": "Macroeconomia y Estructura Economica Argentina",
  "97.01": " Higiene y Seguridad Industrial",
  "87.17": "Maquinas Termicas",
  "91.12": "Organizacion Industrial II",
  "91.3": "Estadistica Aplicada II",
  "92.02": "Industrias I",
  "97.05": "Gestion Ambiental",
  "91.07": "Investigacion Operativa I",
  "92.04": "Procesos de Manufactura I",
  "92.05": "Edificios Industriales",
  "92.18": "Industrias II",
  E: "Electiva",
  "91.28": "Gestion de Costos",
  "91.31": "Investigacion Operativa II",
  "92.06": "Automatizacion Industrial y Robotica",
  "92.07": "Instalaciones Industriales",
  E_2: "Electiva 2",
  "91.08": "Organizacion Industrial III",
  "91.29": "Ingenieria Economica A",
  "92.19": "Procesos de Manufactura II",
  "92.99": "Trabajo profesional de Ingeniera Industrial",
  E_3: "Electiva 3",
  "91.22": "Ingenieria Legal para Ingenieria Industrial",
  "92.99.2": "Trabajo Profesional de Ingenieria Industrial",
  E_4: "Electiva 4",
  E_5: "Electiva 5"
};
const cuatrimestre = [
  [
    {
      "40": "Introduccion al Pensamiento Cientifico",
      "24": "Introduccion al Conocimiento de la Sociedad y el Estado",
      "66": "Analisis Matematico",
      "62": " Algebra",
      "03": "Fisica",
      "5": "Quimica"
    }
  ],
  [
    {
      "81.01": "Analisis Matematico II",
      "82.01": "Fisica I",
      "83.01": "Quimica I",
      "92.03": "Introduccion a la Ingenieria Industrial"
    }
  ],

  [
    {
      "81.02": "Algebra II",
      "82.02": " Fisica II",
      "83.02": "Quimica Aplicada",
      "95.01": "Computacion"
    }
  ],

  [
    {
      "81.16": "Probabilidad",
      "84.05": "Estatica y Resistencia de Materiales",
      "85.38": "Electrotecnia General",
      "87.13": "Medios de Representacion"
    }
  ],
  [
    {
      "87.12": "Mecanismos",
      "87.14": "Termodinamica",
      "91.33": "Microeconomia Aplicada",
      "92.01": "Materiales Industriales I",
      "95.13": "Metodos Matematicos y Numericos"
    }
  ],
  [
    {
      "89.17": "Mecanica de Fluidos",
      "91.03": "Estadistica Aplicada",
      "91.10": "Organizacion Industrial I",
      "91.24": "Macroeconomia y Estructura Economica Argentina",
      "97.01": " Higiene y Seguridad Industrial"
    }
  ],
  [
    {
      "87.17": "Maquinas Termicas",
      "91.12": "Organizacion Industrial II",
      "91.3": "Estadistica Aplicada",
      "92.02": "Industrias I",
      "97.05": "Gestion Ambiental"
    }
  ],
  [
    {
      "91.07": "Investigacion Operativa I",
      "92.04": "Procesos de Manufactura I",
      "92.05": "Edificios Industriales",
      "92.18": "Industrias II",
      E: "Electiva"
    }
  ],
  [
    {
      "91.28": "Gestion de Costos",
      "91.31": "Investigacion Operativa II",
      "92.06": "Automatizacion Industrial y Robotica",
      "92.07": "Instalaciones Industriales",
      E_2: "Electiva 2"
    }
  ],
  [
    {
      "91.08": "Organizacion Industrial III",
      "91.29": "Ingenieria Economica A",
      "92.19": "Procesos de Manufactura II",
      "92.99": "Trabajo profesional de Ingeniera Industrial",
      E_3: "Electiva 3"
    }
  ],
  [
    {
      "91.22": "Ingenieria Legal para Ingenieria Industrial",
      "92.99.2": "Trabajo Profesional de Ingenieria Industrial",
      E_4: "Electiva 4",
      E_5: "Electiva 5"
    }
  ]
];

export const requisitos = {
  "40": [],
  "24": [],
  "66": [],
  "62": [],
  "03": [],
  "5": [], //CBC
  "81.01": ["40", "24", "66", "62", "03", "5"],
  "82.01": ["40", "24", "66", "62", "03", "5"],
  "83.01": ["40", "24", "66", "62", "03", "5"],
  "92.03": ["40", "24", "66", "62", "03", "5"],
  "81.02": ["40", "24", "66", "62", "03", "5"], //Tercer Cuatrimestre
  "82.02": ["81.01", "82.01"],
  "83.02": ["83.01"],
  "95.01": ["40", "24", "66", "62", "03", "5"], //Cuatro Cuatrimestre
  "81.16": ["81.01", "95.01"],
  "84.05": ["81.01", "82.02"],
  "85.38": ["81.02", "82.02"],
  "87.13": ["40", "24", "66", "62", "03", "5"], //Quinto Cuatrimestre
  "87.12": ["84.05", "87.13"],
  "87.14": ["82.02"],
  "91.33": [],
  "92.01": ["83.02", "84.05"],
  "95.13": ["81.01", "81.02", "95.01"], //Sexto cuatrimestre
  "89.17": ["81.01", "82.01"],
  "91.03": ["81.16"],
  "91.10": ["81.16", "92.03"],
  "91.24": ["91.33"],
  "97.01": [], //Septimo trimestre
  "87.17": ["87.14"],
  "91.12": ["91.10"],
  "91.3": ["91.03"],
  "92.02": ["87.14", "89.17", "92.01"],
  "97.05": ["97.01"], //Octavo Trimestre
  "91.07": ["91.03", "91.12"],
  "92.04": ["87.12", "92.01"],
  "92.05": ["87.13", "91.10", "92.01", "97.01"],
  "92.18": ["87.14", "89.17", "92.01"],
  E: [], //noveno cuatrimestre
  "91.28": ["91.12", "91.24"],
  "91.31": ["91.07", "91.30"],
  "92.06": ["85.38", "95.13"],
  "92.07": ["85.38", "87.17", "91.12", "92.18"],
  E_2: [], //decimo cuatrimestre
  "91.08": ["91.12"],
  "91.29": ["91.28"],
  "92.19": ["92.04"],
  "92.99": [],
  E_3: [],
  "91.22": [],
  "92.99.2": ["92.99"],
  E_4: [],
  E_5: []
};
export default cuatrimestre;
