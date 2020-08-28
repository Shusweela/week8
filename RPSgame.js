var display;
var computer;

//Function if player selects Rocks//
function rockButton() {
    computer = Math.floor((Math.random() * 3) + 1);
    if (computer == 1) {
        display = "Its a draw!";
    } else if (computer == 2) {
        display = "Sorry, you lost! Try again!";
    } else {
        display = name,", you won!";
}
document.getElementById("demo").innerHTML = display;
}

//Function if player selects Paper//
function paperButton() {
    computer = Math.floor((Math.random() * 3) + 1);
    if (computer == 3) {
        display = ("You lose! Try again!");
    } else if (computer == 2) {
        display = ("Its a draw");
    }else {
        display = (name,", you won!");
    }
    document.getElementById("demo").innerHTML = display;
}



//Function for if player selects Scissors//
function scissButton() {
    computer = Math.floor((Math.random() * 3) + 1);
if (computer == 3) {
    display  = "Its a draw!"; //this could be the id sections..isntead of a return
} else if (computer == 1) {  
    display = "You lose!  Try again!";
} else {
    display = name,", you won!";
}
document.getElementById("demo").innerHTML = display;
}
