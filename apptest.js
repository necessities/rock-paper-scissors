
// function for generating computer input
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));


}

//function for game

function gamePlay(){

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
  computerSc + 1;
  } else if (choice == 'rock'&& computerChoice == 'scissors') {
  alert("You win!");
  playerSc + 1;}

} else if (choice == 'paper') {
  if(choice == 'paper' && computerChoice == 'paper'){
  alert("Tie!");
  } else if (choice == 'paper' && computerChoice == 'scissors') {
  alert("Computer wins!");
  computerSc + 1;
  } else if (choice == 'paper'&& computerChoice == 'rock') {
  alert("You win!");
  playerSc + 1;}

} else if (choice == 'scissors') {
  if(choice == 'scissors' && computerChoice == 'scissors'){
  alert("Tie!");
  } else if (choice == 'scissors' && computerChoice == 'rock') {
  alert("Computer wins!");
  computerSc + 1;
} else if (choice == 'scissors'&& computerChoice == 'paper') {
  alert("You win!");
  playerSc + 1;}


} else {
  alert("Please Choose rock paper or scissors")
}
}

//--------------------------------------------------------


let playerSc = 0;
let computerSc = 0;

gamePlay();



while(playerSc < 5 || computerSc < 5) {

  gamePlay();
  alert(`Score = Player: ${playerSc} Computer: ${computerSc} `);

}
