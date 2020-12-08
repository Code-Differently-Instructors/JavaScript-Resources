function prompt1(){
    for(var i = 10; i < 21; i++){
        console.log(i);
    }
}
 console.log(prompt1())

function prompt2(){
    for(var i = 40; i >= 0; i--){
        console.log(i);
    }
}

console.log(prompt2())

function prompt3(){
    for(var i = 0; i <= 20; i = i+2){
        console.log(i);
    }
}

console.log(prompt3())

function prompt4(){
    for(var i = -15; i <= 15; i++){
        console.log(i);
    }
}

console.log(prompt4())

function prompt5(){
    for(var i = 20; i <= 30; i = i+2){
        console.log(i)
    }
    var answer = i;
    console.log("Answer is: " ,answer);
}

console.log(prompt5())

function prompt6(){
    for(var i = 0; i <= 30; i++){
        if(i % 2 == 0){
            console.log(`${i} is an even number.`)
        }
        else{
            console.log(`${i} is an odd number.`)
        }
    }
}

console.log(prompt6())

function prompt7(){
    for(var i = 0; i <= 10; i++){
        console.log(`${i * 9}`);
    }
}

function prompt8(){
    var i = 0;
    do{
        console.log(i);
        i = i+2;
    } while(i <= 20);
}

function prompt9(){
    var i = 5;
    while(i <= 20){
        console.log(i);
        i++;
    }
}

function prompt10(){
    var i = 20;
    while(i >= 0){
        console.log(i);
        i--;
    }
}

function prompt11(){
    var magicNumber = prompt("Whats the magic number?")
    while(magicNumber !== '8'){
        magicNumber = prompt("Whats the magic number?")
    }
}

function prompt12(){
    var i = 0;
    do{
        console.log(`'I' is not a high enough number yet.`);
        i++;
    } while(i < 5);
}