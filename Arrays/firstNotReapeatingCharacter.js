// Note: Write a solution that only iterates over the string once and uses O(1) additional memory, since this is what you would be asked to do during a real interview.
//
// Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.
//
// Example
//
// For s = "abacabad", the output should be
// firstNotRepeatingCharacter(s) = 'c'.
//
// There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.
//
// For s = "abacabaabacaba", the output should be
// firstNotRepeatingCharacter(s) = '_'.
//
// There are no characters in this string that do not repeat.
//
// Input/Output
//
// [time limit] 4000ms (py3)
// [input] string s
//
// A string that contains only lowercase English letters.
//
// Guaranteed constraints:
// 1 ≤ s.length ≤ 105.
//
// [output] char
//
// The first non-repeating character in s, or '_' if there are no characters that do not repeat.

function firstNotRepeatingCharacter(s) {
  var m = new Map(), counter = 0, start = 0; deleted = new Map();

  for (var i = 0; i < s.length; i++){
     if(m.has(s[i])){
       counter++;
       m.set(s[i],counter);
       counter = 0;
     if(m.get(s[i]) === 1){
       deleted.set(s[i],s[i]);
       m.delete(s[i]);
     }
    }
    else m.set(s[i], start);
  }

  for (let key of m.keys()) if(deleted.has(key)) m.delete(key);

  var answer = m.keys();
  if(m.size === 0) return "_";
  else return answer.next().value;
}

s = "abacabad"
firstNotRepeatingCharacter(s);
