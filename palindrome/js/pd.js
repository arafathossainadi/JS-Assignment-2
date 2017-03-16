var userString = prompt("Enter your string: ");
palindrome(userString);

function palindrome(myString){

var removeChar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();

var checkPalindrome = removeChar.split('').reverse().join('');

var a , b;
if(removeChar === checkPalindrome){
	a = myString + " is a Palindrome <br>";
	document.getElementById('yesPd').innerHTML = a;
}
else{
	b = myString + " is not a Palindrome <br>";
	document.getElementById('yesPd').innerHTML = b;
}
}
