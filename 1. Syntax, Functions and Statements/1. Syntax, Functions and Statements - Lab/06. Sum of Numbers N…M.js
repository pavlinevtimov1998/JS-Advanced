function sumOfNumbers (numbOne, numbTwo) {

    let sum = 0;

    numbOne = Number(numbOne);
    numbTwo = Number(numbTwo);

    for(let i = numbOne; i <= numbTwo; i++){
        sum += i;
    }

    console.log(sum);

}
sumOfNumbers ('1', '5' );
console.log('---------');
sumOfNumbers ('-8', '20');