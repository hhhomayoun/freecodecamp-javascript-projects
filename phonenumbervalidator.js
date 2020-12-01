function telephoneCheck(str) {
 // creating an array of valid patterns using regex
 const patterns = [/^\d{3}-\d{3}-\d{4}$/,
  /^1 \d{3}-\d{3}-\d{4}$/,
  /^1 \(\d{3}\) \d{3}-\d{4}$/, /^\d{10}$/, /^\(\d{3}\)\d{3}-\d{4}$/, /^1 \d{3} \d{3} \d{4}$/, /1\(\d{3}\)\d{3}-\d{4}/]
 // using some method to see if any of these patterns return true to validate the phone numbers
 return patterns.some((pattern) => pattern.test(str));
}

let result = telephoneCheck("(555)555-5555");
console.log(result);