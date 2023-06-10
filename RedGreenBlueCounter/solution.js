function redGreenBlueCount(arr) {
  const RED = 0,
    GREEN = 1,
    BLUE = 2;

  let counterMap = new Map();
  counterMap.set(RED, 0);
  counterMap.set(GREEN, 0);
  counterMap.set(BLUE, 0);

  for (let i = 0; i < arr.length; i++) {
    counterMap.set(arr[i], counterMap.get(arr[i]) + 1);
  }

  const counterArr = [...counterMap.entries()];
  return counterArr.map(([key, value]) => value);
}

/* 
The optimized code is more efficient because it does not use a Map object. 
A Map object is a data structure that stores key-value pairs. 
When we iterate over a Map object, we need to access each key and value. This can be inefficient if the Map object is large. 
In contrast, an array is a data structure that stores elements in a sequential order. 
When we iterate over an array, we can access each element directly, which is more efficient.
*/
function redGreenBlueCountBetter(arr) {
  const counts = [0, 0, 0];

  for (let i = 0; i < arr.length; i++) {
    counts[arr[i]]++;
  }

  return counts;
}