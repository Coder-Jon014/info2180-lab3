
document.addEventListener('DOMContentLoaded', () => {
    const squares=document.querySelectorAll("board");
    const gameBoard = document.getElementById("board").children;
    const gameStatus = document.getElementById("status");
    const newGame = document.getElementsByClassName("btn")[0];
    const xS= "X";
    const oS= "O";

    const winningCases=[[0,4,8],[0,3,6],[0,1,2],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6]];
    let picked;
    let turn=true;


    
    var b;
    startGame();
    
    function startGame() {
        for(b = 0; b < gameBoard.length;b++){
            gameBoard[b].setAttribute("class","square");
            gameBoard[b].addEventListener('click',pick,{once:true});
            gameBoard[b].addEventListener('mouseenter',hoverStyle);
            gameBoard[b].addEventListener('mouseleave',hoverRevert);
            gameBoard[b].addEventListener('click',checkWinner); 
        }
    }


    function pick(event) {
       var moves= Array.from(squares);
       console.log(moves);
        
        if(turn==true || picked==xS){
          event.target.innerHTML=oS;
          event.target.classList.add("O");
          picked=oS;
          turn=false;
        }

        else if(picked==oS || turn==false ){
            event.target.innerHTML= xS;
            event.target.classList.add("X");
            picked= xS;
            turn=true;
          }
    }
    
    function hoverStyle(event){
        event.target.classList.add('hover');
    
    } 

    function hoverRevert(event){
        event.target.classList.remove('hover');
    }  

    function checkWinner(){
        for (b=0; b<gameBoard.length;b++){
            if(gameBoard[winningCases[b][0]].textContent=="X" && gameBoard[winningCases[b][1]].textContent=="X" && gameBoard[winningCases[b][2]].textContent=="X"){
                gameStatus.innerHTML="Congratulations! X is the Winner!";
                gameStatus.setAttribute('class','you-won');
            }
            else if(gameBoard[winningCases[b][0]].textContent=="O" && gameBoard[winningCases[b][1]].textContent=="O" && gameBoard[winningCases[b][2]].textContent=="O"){
                gameStatus.innerHTML="Congratulations! O is the Winner!";
                gameStatus.setAttribute('class','you-won');
            }

        }
    }


    
    function restart(){
        for(b = 0; b < gameBoard.length;b++){
            gameBoard[b].innerHTML = '';
            gameBoard[b].classList.remove("X");
            gameBoard[b].classList.remove("O");
            
            gameStatus.classList.remove("you-won");
            gameStatus.innerHTML = "Move your mouse over a square and click to play an X or an O";
            
        } 
        startGame();
    }

    newGame.addEventListener('click',restart);
    


})