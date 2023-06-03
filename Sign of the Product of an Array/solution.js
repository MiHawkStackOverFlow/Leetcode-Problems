/**
 * @param {number} x
 * @return {boolean}
 */

var signFunc = function(x) {
  if(x === 0) return 0;
  else if(x > 0) return 1;
  else return -1;
}

var arraySign = function(nums) {
  let product = nums.reduce((a,b) => a*b);
  return signFunc(product);
};