function convert(num) {

 let result = '';
 // creating an array of roman numbers and an array of numbers that are equal to roman numbers
 const rom = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
 const arr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 // creating a nested loop to loop through both arrays
 for (let i = 0; i < rom.length; i++) {
  while (num >= arr[i]) {
   result += rom[i];
   num -= arr[i];
  }
 }
 return result
}
let fResult = convert(36)
console.log(fResult);