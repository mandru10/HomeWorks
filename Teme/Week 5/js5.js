var myarray = ["paper","rock","scissors"];

function play(){
    var computer, player;
    computer = myarray[Math.round(Math.random() * 2)];
    player = myarray[Math.round(Math.random() * 2)];

    console.log(computer, player);

    if(computer == player){
        return console.log("Draw !");
    }
    else if(computer == "rock" && player == "paper"){
        return console.log("You win!");
    }
    else if(computer == "paper" && player == "rock"){
        return console.log("You lose!");
    }
    else if(computer == "scissors" && player == "paper"){
        return console.log("You lose!");
    }
    else if(computer == "rock" && player == "scissors"){
        return console.log("You lose!");
    }
    else if(computer == "scissors" && player == "rock"){
        return console.log("You Win!");
    }
    else if(computer == "paper" && player == "scissors"){
        return console.log("You win!");
    }
}

play();