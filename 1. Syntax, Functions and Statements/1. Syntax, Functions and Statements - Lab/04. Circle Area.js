function circleArea (param) {

    let result;

    if(typeof param === 'number'){
        result = Math.pow(param, 2) * Math.PI;
    } else {
        return `We can not calculate the circle area, because we receive a ${typeof param}.`
    }

    console.log(result.toFixed(2));

}
circleArea (5);
console.log('-------');
circleArea ('name');