export function createPlotData(dateData, varData, var_key) {
  let plotArr = [];
  for (let i in varData[var_key]) {
    plotArr.push({ x: dateData[i], y: varData[var_key][i] });
  }
  return plotArr;
}
