function longestCommonPrefix(strs) {
  // Get the length of the shortest string.
  let minLen = Math.min(...strs.map(s => s.length));

  // Initialize the longest common prefix to the empty string.
  let longestCommonPrefix = "";

  // Iterate over the first minLen characters of each string.
  for (let i = 0; i < minLen; i++) {
    // If all of the strings have the same character at position i,
    // then add that character to the longest common prefix.
    if (strs.every(s => s[i] === strs[0][i])) {
      longestCommonPrefix += strs[0][i];
    } else {
      // Otherwise, there is no common prefix.
      break;
    }
  }

  // Return the longest common prefix.
  return longestCommonPrefix;
}


console.log("answer", longestCommonPrefix(["float", "flame", "flee"]));
console.log("==============================================");
console.log("answer", longestCommonPrefix(["cir", "car"]));
console.log("==============================================");
console.log("A prefix is something that comes at the start of the string so following array will return empty string");
console.log("answer", longestCommonPrefix(["last", "blast", "cast"]));
