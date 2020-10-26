// Exercise One

let person = prompt("Hello. What is your name?");

let job = prompt("Hi, " + person.toUpperCase + "! What do you do?");

let mood = prompt("Interesting! Do you love being a " + job.toUpperCase() + " ?");

if( mood == "Yes"){
    alert(person + " is a " + job + " and loves it!!");
} else{
    alert(person + " is a " + job + " and just works for the check.");

}



// Exercise Two

let colors = [ "Red", "Green", "Yellow"];

let name = prompt("Hello! What is your name?");

let userPick = prompt("Choose a color. Red, Green, or Yellow");

alert("You chose " + userPick);

switch(userPick){
    case "Red":
    document.write( "You chose the color RED. STOP!");
    break;

    case "Green":
    document.write("You chose the color GREEN. Go, go!" );
    break;

    case "Yellow":
    document.write("You chose the color YELLOW. Slow it on down!");

}


// //Exercise Three

    let number = prompt("Choose a number between 1 and 20");

    if(number < 5){
        document.write("You chose the number " + number + ". Tiny");
    } else if ( number < 10){
        document.write("You chose the number " + number + ". Small");
    } else if( number < 15){
        document.write("You chose the number " + number + ". Medium");
    } else if( number < 20){
        document.write("You chose the number " + number + ". Large");
    }else {
        document.write("You chose the number " + number + ". Huge");
    }


// Exercise Four

let name = prompt("Hi, what is your name?");

let pay = prompt("Welcome, " + name + " What is your hourly rate?");

let hours = prompt("How many hours do you work per week?");

if(hours > 40){
    pay = pay * 1.5;
}

let check = Math.floor(hours * pay);

alert(name + ", worked a total of " + hours + " hours receiving a check of $" + check);

    







