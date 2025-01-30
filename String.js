//Given a string s consisting of words and spaces, return the length of the last word in the string
//Example 1
let  s = "Hello World"
let y= s.split(" ")
let lastWordlength = y[1].length
console.log(`Last word length is ${lastWordlength}`)

//Example 2
let a = " fly me to the moon "
let b= a.trim().split(" ") //trim removed the leading and trailing spaces
let LastWord = b[b.length - 1].length
console.log(`Last word length is ${LastWord}`)

/* Example 3
Write a function to check if two strings are anagrams. */

 // Convert strings to lowercase and remove non-alphabetic characters

 function isAnagram(value1, value2) {
    // Convert strings to lowercase and remove non-alphabetic characters
    value1 = value1.trim().toLowerCase().replace(/[^a-z]/g, '');
    value2 = value2.trim().toLowerCase().replace(/[^a-z]/g, '');

    // Sort the characters in both strings
    let sortedValue1 = value1.split('').sort().join('');
    let sortedValue2 = value2.split('').sort().join('');

    // Compare the sorted strings
    if (sortedValue1 === sortedValue2) {
        console.log("True");
    } else {
        console.log("False");
    }
}

// Test the function
isAnagram('listen ', ' silent'); // Output: True
isAnagram('hello', 'world');   // Output: False


