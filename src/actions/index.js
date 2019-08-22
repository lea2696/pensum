export const changeColor = color => {
  console.log("Hiciste click");
  return {
    type: "CHANGE_COLOR",
    payload: color
  };
};
