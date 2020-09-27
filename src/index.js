
exports.min = function min (array) {
  if (!array || array.length === 0) return 0;
  return Math.min.apply(Math, array);
}

exports.max = function max (array) {
  if (!array || array.length === 0) return 0;
  return Math.max.apply(Math, array);
}

exports.avg = function avg (array) {
  if (!array || array.length === 0) return 0;
  return array.reduce((accumulator, currentValue) => accumulator + currentValue) / array.length;
}
