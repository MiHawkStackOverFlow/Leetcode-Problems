// O(n^2) solution
var containsDuplicate = function(nums) {
  let isDup = false;
  for(let i=0; i < nums.length; i++) {
    if(isDup) break;
    const currentNumber = nums[i];
    const slicedArray = nums.slice(0, i).concat(nums.slice(i+1, nums.length)); 
    for(let j=0; j < slicedArray.length; j++) {
      const slicedCurrentNumber = slicedArray[j];
      if(currentNumber === slicedCurrentNumber) {
        isDup = true;
        break;
      };  
    }
  }
  return isDup;
};

// O(n) solution
function containsDuplicate(nums) {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
};