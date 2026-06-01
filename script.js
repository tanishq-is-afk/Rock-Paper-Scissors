let round=1;
let user_response=-1;
let ready_for_next_game=true;

document.getElementById("rock-btn")
.addEventListener("click",()=>{
    if(!ready_for_next_game)return;
    user_response=0;
    ready_for_next_game=false;
    document.getElementById("player-choice").src=image[user_response];

});

document.getElementById("paper-btn")
.addEventListener("click",()=>{
    if(!ready_for_next_game)return;
    user_response=1;
    ready_for_next_game=false;
    document.getElementById("player-choice").src=image[user_response];
   
});

document.getElementById("scissor-btn")
.addEventListener("click",()=>{
    if(!ready_for_next_game)return;
    user_response=2;
    ready_for_next_game=false;
    document.getElementById("player-choice").src=image[user_response];
});

document.getElementById("replay-btn")
.addEventListener("click",()=>{
    document.getElementById("computer-score").textContent=0;
    document.getElementById("player-score").textContent=0;   
    document.getElementById("round-number").textContent=Number(1);
    round=1;
    document.getElementById("player-choice").src="res/question_mark_blue.png";
    document.getElementById("computer-choice").src="res/question_mark_red.png";
    document.getElementById("result-text").textContent="Choose Your Move";
    ready_for_next_game=true;
});

document.getElementById("next-round")
.addEventListener("click",()=>{
    if(round>5){
        let player_score= document.getElementById("player-score").textContent;
        let comp_score=document.getElementById("computer-score").textContent;

        if(player_score>comp_score){
            alert("player wins the game");
        }
        else if(player_score<comp_score){
            alert("player lost the game");
        }
        else{
            alert("its a draw");
        }
        
        document.getElementById("result-text").textContent="click replay for rematch";
        return;
    }
    document.getElementById("player-choice").src="res/question_mark_blue.png";
     document.getElementById("computer-choice").src="res/question_mark_red.png";
    document.getElementById("round-number").textContent=round;
    document.getElementById("result-text").textContent="Choose Your Move";
    ready_for_next_game=true;
});

document.getElementById("play-btn")
.addEventListener("click",()=>{
    game(user_response);
    user_response=-1;

    
});


function game(user_response){
    if(user_response==-1)return;//no response ke liye 

    
    const comp_response = Math.floor(Math.random() * 3);
    document.getElementById("computer-choice").src=image[comp_response];

     let judge=isWin[user_response][comp_response];
  

    if(judge==1){
       let player_score= document.getElementById("player-score");
       player_score.textContent = Number(player_score.textContent) + 1;
       document.getElementById("result-text").textContent="player wins!!"

    }
    else if(judge==-1){
       let comp_score= document.getElementById("computer-score");
       comp_score.textContent=Number(comp_score.textContent)+1;
       document.getElementById("result-text").textContent="computer wins!!"
    }
    else{
        document.getElementById("result-text").textContent="Draw!!"
    }
    round++;
}


let isWin=[
    [0,-1,1],
    [1,0,-1],
    [-1,1,0]
];

let image=[
    "res/rock.png",
    "res/paper.png",
    "res/scissors.png",
];

document.addEventListener("click", () => {
  document.getElementById("bgMusic").play();
}, { once: true });