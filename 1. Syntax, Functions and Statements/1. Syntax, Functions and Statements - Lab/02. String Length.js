function stringLength (paramOne, paramTwo, paramThree) {

    let sumOfLength = paramOne.length + paramTwo.length + paramThree.length;
    let avg = Math.floor(sumOfLength / 3);

    console.log(sumOfLength);
    console.log(avg);


}
stringLength ('chocolate', 'ice cream', 'cake');
console.log('--------');
stringLength ('pasta', '5', '22.3');