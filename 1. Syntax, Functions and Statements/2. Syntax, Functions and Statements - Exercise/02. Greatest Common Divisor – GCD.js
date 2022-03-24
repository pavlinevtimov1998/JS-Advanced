function greatestDivisor(numbOne, numbTwo) {
  
    let theBestDivisor;
    let sum = numbOne + numbTwo
    

  for (let i = 1; i <= sum; i++) {
    
      if ((numbOne % i === 0 && numbTwo % i === 0) && (i !== 1)) {
      theBestDivisor = i;
      break;
    }
  }
  if(theBestDivisor === undefined){
      return 1;
  }
  console.log(theBestDivisor);
}
greatestDivisor(5, 15);
console.log("--------------");
greatestDivisor(2154, 457);
