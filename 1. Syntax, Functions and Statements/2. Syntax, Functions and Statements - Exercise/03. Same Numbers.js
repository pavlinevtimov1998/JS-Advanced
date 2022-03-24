function sameNumbers (numb) {

    let sum = 0;
    let isTheSame = true;
    let string = String(numb);

    for (let i = 0; i < string.length; i++) {
        let charOne = Number(string[0]);
        let charTwo = Number(string[i]);
        if(charOne !== charTwo){
            isTheSame = false;
            break;
        }
    }

    for(let el of string){
        sum += Number(el);
    }

    console.log(isTheSame);
    console.log(sum);

}
sameNumbers (2222222);
console.log('--------------');
sameNumbers (1234);