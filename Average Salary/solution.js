/** O(n) */
var average = function(salary) {
  const max = Math.max.apply(Math, salary);
  const min = Math.min.apply(Math, salary);
  const newArray = salary.filter((value) => (value !== max && value !== min));
  return ((newArray.reduce((acc, current) => acc + current, 0)) / newArray.length);
};