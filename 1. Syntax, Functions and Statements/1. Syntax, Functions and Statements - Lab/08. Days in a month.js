function daysInMonth (month, year) {

    const date = new Date(year, month, 0).getDate();
    
    console.log(date);

}
daysInMonth (1, 2012);
console.log('----------');
daysInMonth (2, 2021);