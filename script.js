let userScore=0;
let compScore=0;
let choices = document.querySelectorAll(".choice");
const result =document.querySelector("#result");
let userchoiceCount = document.querySelector("#user-count");
let compchoiceCount = document.querySelector("#comp-count");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
})
});

const drawGame =() =>{
    result.innerText = "Game is a Draw ! Please play again.";
    result.style.backgroundColor = "#081b31";
}

const genCompChoice = () =>{
    let options =["rock","paper","scissors"];
    let idx = Math.floor(Math.random()*3);
    return options[idx];
}

const playGame =(userchoice)=>{
    const compChoice = genCompChoice();

    if(userchoice === compChoice){
        drawGame();
    }

    else{
        let userWin = true;
        
        if(userchoice === "rock"){
            //paper,scissors
            userWin =compChoice === "paper" ? false : true;
        }

        else if(userchoice === "paper"){
            //rock,scissors
            userWin =compChoice === "scissors" ? false : true;
        }

        else{
          //rock , paper
            userWin =compChoice === "rock" ? false : true;
        }
        getWinner(userWin,userchoice,compChoice);
    }
}

const getWinner =(userWin,userchoice,compChoice) =>{
    if(userWin){
        userScore++;
        userchoiceCount.innerText =userScore;
        result.innerText =`You Win! Your ${userchoice} beats ${compChoice}`;
        result.style.backgroundColor = "green";

    }
    else{
        compScore++;
        compchoiceCount.innerText = compScore;
        result.innerText =`You Lose  ${compChoice} beats your ${userchoice}`;
        result.style.backgroundColor ="red";
    }
}
