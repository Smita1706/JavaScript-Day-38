let number = Math.floor(Math.random() * (10))% 7;
let day;
switch (number) {
    case 0:
        day = 'Sunday';
        console.log("The day is "+day);
        break;
    case 1:
        day = 'Monday';
        console.log("The day is "+day);
        break;
    case 2:
        day = 'Tuesday';
        console.log("The day is "+day);
        break;
    case 3:
        day = 'Wednesday';
        console.log("The day is "+day);
        break;
    case 4:
        day = 'Thursday';
        console.log("The day is "+day);
        break;
    case 5:
        day = 'Friday';
        console.log("The day is "+day);
        break;
    case 6:
        day = 'Saturday';
        console.log("The day is "+day);
        break;
    default:
        console.log("Enter the number between 0 to 9");
}