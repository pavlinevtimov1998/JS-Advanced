function largestNumber (numOne, numTwo, numThree) {

    let smallestNum = Math.max(numOne, numTwo, numThree);

    console.log(`The largest number is ${smallestNum}.`);

}
largestNumber (5, -3, 16);
console.log('----------');
largestNumber (-3, -5, -22.5);