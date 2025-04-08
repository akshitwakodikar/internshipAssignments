// 1. Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) 
    console.log(i);

// 2. Print odd numbers less than 100
for (let i = 1; i < 100; i += 2) 
    console.log(i);

// 3. Print multiplication table of 7
for (let i = 1; i <= 10; i++) 
    console.log(`7 x ${i} = ${7 * i}`);

// 4. Print multiplication tables from 2 to 10
for (let i = 2; i <= 10; i++) {
    console.log(`Multiplication Table of ${i}`);
    for (let j = 1; j <= 10; j++) 
        console.log(`${i} x ${j} = ${i * j}`);
}

// 5. Sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) 
    sum += i;
console.log("Sum:", sum);

// 6. Factorial of 10
let factorial = 1;
for (let i = 1; i <= 10; i++) 
    factorial *= i;
console.log("10!:", factorial);

// 7. Sum of odd numbers >10 and <30
let oddSum = 0;
for (let i = 11; i < 30; i += 2)
     oddSum += i;
console.log("Sum of odd numbers:", oddSum);

// 8. Sum of numbers in an array
let num = [3, 7, 1, 9, 12, 8, 4, 6];
let total = num.reduce((acc, num) => acc + num, 0);
console.log("Array sum:", total);

// 9. Average of numbers in an array
let avg = total / num.length;
console.log("Array average:", avg);

// 10. Filter positive numbers
function getPositiveNumbers(arr) {
    let positives = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positives.push(arr[i]);
        }
    }
    return positives;
};
console.log("array of integers = [-3, 7, -1, 9, -12, 8, 4, -6, 2, 10]");
console.log("positive numbers are as follows : ",getPositiveNumbers([-3, 7, -1, 9, -12, 8, 4, -6, 2, 10]));

// 11. Sum of digits of a number
function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
console.log("Sum of digits:", sumOfDigits(1234));

// 12. Rotate array left
function rotateLeft(arr) {
    arr.push(arr.shift());
    return arr;
}
console.log(rotateLeft([2, 8, 3]));

// 13. Rotate array right
function rotateRight(arr) {
    arr.unshift(arr.pop());
    return arr;
}
console.log(rotateRight([2, 8, 3]));

// 14. Find max in an array
function findMax(arr) {
    let max = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }
    return max;
}
console.log("Max number:", findMax([3, 7, 1, 9, 12, 8, 4, 6]));


// 15. Check if a number is prime
function isPrime(num) {
    if (num < 2) 
        return false;
    for (let i = 2; i <= Math.sqrt(num); i++) 
    {
        if (num % i === 0) 
            return false;
    }
    return true;
}
console.log("17 is prime number : ",isPrime(17));

// 16. Reverse an array
function reverseArray(arr) {
    return arr.reverse();
}
console.log("reversed arraa",reverseArray([1, 2, 3, 4, 5, 6, 7, 8]));

// 17. Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(("hello"));
console.log(reverseString("hello"));

// 18. Merge two arrays
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// 19. Unique elements in either array
function uniqueElements(arr1, arr2) {
    return arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
}
console.log(uniqueElements([1, 2, 3, 10, 5, 3, 14], [1, 4, 5, 6, 14]));

// 20. Elements in first array but not in second
function difference(arr1, arr2) {
    return arr1.filter(x => !arr2.includes(x));
}
console.log(difference([1, 2, 3, 10, 5, 3, 14], [-1, 4, 5, 6, 14]));

// 21. Even or Odd function
function evenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd(7));
