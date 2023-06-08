var maxVowels = function(s, k) {
    const vowels = 'aeiou';
    let maxVowels = 0;
    for(let i=0; i<s.length; i++) {
       let currentSubstring = s.slice(i, (k + i));
       let counter = 0;
       for(let j=0; j<currentSubstring.length; j++) {
          let subStr = currentSubstring[j];
          if(vowels.includes(subStr)) {
            counter = counter + 1;
          }         
       }
       if(counter > maxVowels) { maxVowels = counter; }  
    }
    return maxVowels; 
};

var maxVowels1 = function(s, k) {
    const vowels = 'aeiou';
    let maxVowels = 0;
    let start = 0;
    let end = k;
    while (end <= s.length) {
        let counter = 0;
        for(let j=start; j<end; j++) {
          let subStr = s[j];
          if(vowels.includes(subStr)) {
            counter = counter + 1;
          }         
        }
        if(counter > maxVowels) { maxVowels = counter; }  
        start++;
        end++;
    }
    return maxVowels; 
};

console.log('Output', maxVowels1('leetcode', 2));