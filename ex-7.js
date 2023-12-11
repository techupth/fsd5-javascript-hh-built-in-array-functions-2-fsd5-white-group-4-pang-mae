function isPalindrome(string) {
  const s = string.toLowerCase();
  const r = s.split('').reverse().join('');
  return s === r;
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false