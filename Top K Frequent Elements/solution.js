/**
 * @param {number} x
 * @return {boolean}
 */

function topKFrequent(nums, k) {
  const occurences = new Map();

  for(let i=0; i < nums.length; i++) {
      const currentNum = nums[i];
      occurences.set(currentNum, occurences.get(currentNum) || 0) + 1;
  }

  const occurencesArray = [...occurences.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k);

  return occurencesArray.map(([key]) => key);
};


let nums = [2,3,3,1,2,2], k = 2;
console.log('test', topKFrequent(nums, k));