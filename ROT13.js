function rot13(str) {
 // converting the string to lower case
 str = str.toLowerCase();
 let arr = []
 // looping through the string and pushing the result to the arr
 for (let i = 0; i < str.length; i++) {
  if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 109) {
   arr.push(str.charCodeAt(i) + 13)
  } else if (str.charCodeAt(i) >= 98 && str.charCodeAt(i) <= 122) {
   arr.push(str.charCodeAt(i) - 13)
  } else {
   arr.push(str.charCodeAt(i))
  }
 }
 // converting the arr elements back to chars
 for (let j = 0; j < arr.length; j++) {
  arr[j] = String.fromCharCode(arr[j])
 }
 // finally returning the arr in string form and to uppercase
 return arr.join('').toUpperCase();
}

let result = rot13("SERR PBQR PNZC");
console.log(result);
