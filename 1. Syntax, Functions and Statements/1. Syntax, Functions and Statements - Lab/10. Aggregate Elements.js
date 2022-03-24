function aggregateElements (array) {

    const sum = array.reduce((a, b) => a + b);
    const inverse = array.reduce((a, b) => a + 1 / b, 0);
    const concatenating = array.join('');

    console.log(sum);
    console.log(inverse);
    console.log(concatenating);

}
aggregateElements ([1, 2, 3]);
console.log('----------');
aggregateElements ([2, 4, 8, 16]);