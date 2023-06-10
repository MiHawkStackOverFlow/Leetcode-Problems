// 1, 1, 2, 3, 5, 8, 13, 21
// O(n)
function fibo(n) {
  if (n <= 1) return n;
  let initial = 0,
    current = 1,
    sum = 0;

  for (let i = 1; i < n; i++) {
    sum = initial + current;
    initial = current;
    current = sum;
  }

  return sum;
}

console.log("test1", fibo(5));

// O(2^n) recursive
function getNthFibo(n) {
  if (n <= 1) {
    return n;
  } else {
    return getNthFibo(n - 1) + getNthFibo(n - 2);
  }
}

console.log("test2", getNthFibo(6));

// O(n) recursive
function getNthFiboBetter(n, lastlast, last) {
  if (n == 0) {
    return lastlast;
  }
  if (n == 1) {
    return last;
  }
  console.log('n', n, last, lastlast);
  return getNthFiboBetter(n - 1, last, lastlast + last);
}

console.log("test3", getNthFiboBetter(8));