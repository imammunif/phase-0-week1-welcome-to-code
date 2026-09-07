// Soal 4. Breaking Sentence (yet Again) and Count Each Length
// Problem:
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4: string = 'wow JavaScript is so cool';
let exampleFirstWord4: string = word4.substring(0, 3);
let secondWord4: string = word4.substring(4, 14);
let thirdWord4: string = word4.substring(15, 17);
let fourthWord4: string = word4.substring(18, 20);
let fifthWord4: string = word4.substring(21, 25);

let firstWordLength: number = exampleFirstWord4.length;
let secondWordLength: number = secondWord4.length;
let thirdWordLength: number = thirdWord4.length;
let fourthWordLength: number = fourthWord4.length;
let fifthWordLength: number = fifthWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWordLength);
