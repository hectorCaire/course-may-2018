(()=>{
  'use strict';

  let buttons= document.querySelectorAll('.gameButton');

  for (const button of buttons) {
      button.addEventListener("click",(event)=>{
        playGame(parseInt(event.target.getAttribute('id')));
      });
  }



  const valuesEnum={
    ROCK:0,
    SCISSORS:1,
    PAPER:2
  };

  const generateRandomValue=()=>{
    return Math.floor(Math.random() * 3);
  }

  const playGame=(playerValue)=>{
    let cpuValue=generateRandomValue();
    let message=checkWinner(playerValue, cpuValue);
    alert(message);
  }

  const checkWinner=(playerValue, cpuValue)=>{
    if (playerValue===cpuValue){
      return 'Tie game';
    }else{
      if (playerValue===valuesEnum.ROCK){
        return cpuValue===valuesEnum.SCISSORS?'Player wins':'cpu Wins';
      }else if(playerValue===valuesEnum.SCISSORS){
        return cpuValue===valuesEnum.PAPER?'Player wins':'cpu Wins';
      }else if(playerValue===valuesEnum.PAPER){
        return cpuValue===valuesEnum.ROCK?'Player wins':'cpu Wins';
      }
    }
  }

/*
  module.exports={
    generateRandomValue,
    checkWinner
  }
*/
})();
