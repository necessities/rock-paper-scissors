//-----------------------computer turn-----------------------------
// function for generating computer input

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
// create variable for computer choice

let computerChoice = "change";

// create function for computer turn

function getComputerChoice() {
  computerChoice = (getRandomInt(3));
    //console.log `${computerChoice}`; : Test output to see if function works
  }

//--------------------------------computer turn end------------------

let compSc = 0;
let playSc = 0;

function chooseRock() {
  getComputerChoice();
  console.log("You Chose Rock");
  if (computerChoice == 0) {
    computerChoice = 'Rock';
    document.getElementById("result").innerHTML = `Computer chose ${computerChoice} | It's a Tie!`;
    document.getElementById("score").innerHTML = `Computer Score = ${compSc} Player Score = ${playSc}`;
  } else if (computerChoice == 1) {
    computerChoice = 'Paper';
    compSc++;
    document.getElementById("result").innerHTML = `Computer chose ${computerChoice} | Computer Wins! Computer +1`;
    document.getElementById("score").innerHTML = `Computer Score = ${compSc} Player Score = ${playSc}`;
  } else if (computerChoice == 2) {
    computerChoice = 'Scissors';
    playSc++;
    document.getElementById("result").innerHTML = `Computer chose ${computerChoice} | Player Wins! Player +1`;
    document.getElementById("score").innerHTML = `Computer Score = ${compSc} Player Score = ${playSc}`;
  }
}

function choosePaper() {
  getComputerChoice();
  console.log("You Chose Paper");
  if (computerChoice == 0) {
    computerChoice = 'Rock';
    playSc++;
    console.log("Computer Chose Rock");
    document.getElementById("result").innerHTML = `Computer chose ${computerChoice} | Player Wins! Player +1`;
    document.getElementById("score").innerHTML = `Computer Score = ${compSc} Player Score = ${playSc}`;
  } else if (computerChoice == 1) {
    computerChoice = 'Paper';
    console.log("Computer Chose Paper");
    document.getElementById("result").innerHTML = `Computer chose ${computerChoice} | It's a Tie!`;
    document.getElementById("score").innerHTML = `Computer Score = ${compSc} Player Score = ${playSc}`;
  } else if (computerChoice == 2) {
    computerChoice = 'Scissors';
    console.log("Computer Chose Scissors");
    compSc++;
    document.getElementById("result").innerHTML = `Computer chose ${computerChoice} | Computer Wins! Computer +1`;
    document.getElementById("score").innerHTML = `Computer Score = ${compSc} Player Score = ${playSc}`;
    console.log(`Computer Score = ${compSc} Player Score = ${playSc}`);
  }
}

function chooseScissors() {
  getComputerChoice();
  console.log("You Chose Scissors");
  if (computerChoice == 0) {
    computerChoice = 'Rock';
    compSc++;
    document.getElementById("result").innerHTML = `Computer chose ${computerChoice} | Computer Wins! Computer +1`;
    document.getElementById("score").innerHTML = `Computer Score = ${compSc} Player Score = ${playSc}`;
  } else if (computerChoice == 1) {
    computerChoice = 'Paper'
    playSc++;
    document.getElementById("result").innerHTML = `Computer chose ${computerChoice} | Player Wins! Player +1`;
    document.getElementById("score").innerHTML = `Computer Score = ${compSc} Player Score = ${playSc}`;
  } else if (computerChoice == 2) {
    computerChoice = 'Scissors'
    document.getElementById("result").innerHTML = `Computer chose ${computerChoice} | It's a Tie!`;
    document.getElementById("score").innerHTML = `Computer Score = ${compSc} Player Score = ${playSc}`;
  }
}
