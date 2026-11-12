let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");

const userscorepara = document.querySelector("#userScore");
const computerscorepara = document.querySelector("#computerScore");

// to generate the random numbers in maths 
const generatecomputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};



const drawGame = () =>{
    // console.log("game was a draw");
    msg.innerText = "Game Draw. play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        userScore++;
        userscorepara.innerText = userScore;
        // console.log("you win");
        msg.innerText = `you win! your  ${userChoice} beats ${computerChoice}` ;
        msg.style.backgroundColor = "green";
    } else {
        // console.log("you lose");
        computerScore++;
        computerscorepara.innerText = computerScore;
        msg.innerText = `you loose! ${computerChoice} beats your ${userChoice}` ;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    // console.log("user choice is =" , userChoice);
    // to generate the computer choice
    const computerChoice = generatecomputerChoice();
    // console.log("computer choose  ", computerChoice);

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock"){
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "scissor" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice , computerChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click" , () =>{
        // to check which option is being clicked
        const userChoice = choice.getAttribute("id");
        // console.log("you choose", userChoice);
        playGame(userChoice);
    // till here is the code of option checking 
    })
});

