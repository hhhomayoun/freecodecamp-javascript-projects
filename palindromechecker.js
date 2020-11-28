function palindrome(str) {
 // converting str to lower case
 str = str.toLowerCase()
 let arr1 = []
 let arr2 = []
 // looping through the string and converting it's charecters to ascii code decimals
 for (let index = 0; index < str.length; index++) {
  // only pushing the alphanumerical characters to arr1
  if ((str.charCodeAt(index) >= 48 && str.charCodeAt(index) <= 57) || (str.charCodeAt(index) >= 97 && str.charCodeAt(index) <= 122)) {
   arr1.push(str.charCodeAt(index))
  }

 }
 // converting arr1 elements to ascii characters again
 for (let j = 0; j < arr1.length; j++) {
  arr1[j] = String.fromCharCode(arr1[j])
 }
 // converting both arrays to string so we can compare them if they are equal 
 let a = arr1.toString()
 arr2 = arr1.reverse();
 let b = arr2.toString()
 console.log(a);
 console.log(b);
 return a === b;


}



let result = palindrome("A man, a plan, a canal. Panama");
console.log(result);
