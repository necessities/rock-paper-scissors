




// function for generating computer input
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//prompt for user input

let choice = prompt('Rock Paper or Scissors?', );

//declare variable to hold computer input

let computerChoice = "change";

//convert computer input into either rock,paper,scissors

function getComputerChoice() {
  computerChoice = (getRandomInt(3));
  //console.log `${computerChoice}`; : Test output to see if function works
}
  getComputerChoice();

// alert(computerChoice); : Test output to see if function works with this

if (computerChoice == 0) {
  computerChoice = 'rock';
} else if (computerChoice == 1) {
  computerChoice = 'paper'
} else if (computerChoice == 2) {
  computerChoice = 'scissors'
}

alert(`Computer chooses ${computerChoice}`);

//take user input and check it against computer input

if (choice == 'rock') {
  if(choice == 'rock' && computerChoice == 'rock'){
  alert("Tie!");
  } else if (choice == 'rock' && computerChoice == 'paper') {
  alert("Computer wins!");
  } else if (choice == 'rock'&& computerChoice == 'scissors') {
  alert("You win!");}

} else if (choice == 'paper') {
  if(choice == 'paper' && computerChoice == 'paper'){
  alert("Tie!");
  } else if (choice == 'paper' && computerChoice == 'scissors') {
  alert("Computer wins!");
  } else if (choice == 'paper'&& computerChoice == 'rock') {
  alert("You win!");}

} else if (choice == 'scissors') {
  if(choice == 'scissors' && computerChoice == 'scissors'){
  alert("Tie!");
  } else if (choice == 'scissors' && computerChoice == 'rock') {
  alert("Computer wins!");
} else if (choice == 'scissors'&& computerChoice == 'paper') {
  alert("You win!");}


} else {
  alert("Please Choose rock paper or scissors")
}
