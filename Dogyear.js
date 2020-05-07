//defines my age
const myAge = 26;
//set early years
let earlyYears = 2;
earlyYears = earlyYears * 10.5;
// defines later years
let laterYears = myAge - 2;
//multiplies later years by 4
laterYears = laterYears * 4;
console.log(earlyYears,laterYears);
//calculates my age in dog years
const myAgeInDogYears = earlyYears + laterYears;
//coverts name to lower case
const myName = 'Akshay'.toLowerCase();
//prints human age and dog age
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);