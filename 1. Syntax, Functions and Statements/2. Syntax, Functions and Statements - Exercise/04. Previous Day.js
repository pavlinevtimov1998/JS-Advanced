function previousDay (year, month, day) {

    let date = year + '-' + month + '-' + day;
    let event = new Date(date);
    event.setDate(day - 1);

    console.log(`${event.getFullYear()}-${Number(event.getMonth() + 1)}-${event.getDate()}`);


}
previousDay (2016, 9, 30);
console.log('------');
previousDay (2016, 10, 1);