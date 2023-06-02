/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const value = x.toString().split("");
  let reverseValue = "";
  for (let i = value.length - 1; i >= 0; i--) {
    reverseValue = reverseValue + value[i];
  }
  if (reverseValue === x.toString()) return true;
  return false;
};
