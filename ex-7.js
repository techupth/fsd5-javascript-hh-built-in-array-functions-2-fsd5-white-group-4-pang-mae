function isPalindrome(string) {
  // Start coding here
  const reversedText = string.split("").reverse().join("");
  return reversedText === string;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
