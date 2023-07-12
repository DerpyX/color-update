function playCraps() {
    console.log("playCraps() started");
    var die1 = Math.ceil(Math.random() * 6); //selected random number between 0 and 1, multiplied by 6, rounded up and stored in die1
    var die2 = Math.ceil(Math.random() * 6);//selected random number between 0 and 1, multiplied by 6, rounded up and stored in die2
    var sum = die1 + die2 //adds die1 and die2 
    document.getElementById("die1Res").innerHTML = die1; //show die1 number
    document.getElementById("die2Res").innerHTML = die2;//show die2 number
    document.getElementById("sumRes").innerHTML = sum;  //show the total number

    if (sum == 7 || sum == 11) {// Reads the sum and If .... will write ....
        document.getElementById("finalRes").innerHTML = "CRAPS - you lose";
    }
    else if (die1 == die2 && die1 % 2 == 0) {// Reads the sum and if it's not the line before this then write ... if it is this
        document.getElementById("finalRes").innerHTML = "DOUBLES - you win";

    } else {// Reads the sum and If the other condistions are not meet then write this.
        document.getElementById("finalRes").innerHTML = "DRAW - please try again.";
    }
}