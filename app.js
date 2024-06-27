const container = document.getElementById('container');

function shoot() {
   let roll = Math.floor(Math.random() * 3) + 1;
   if (roll === 1) {
      return '✊';
   } else if (roll === 2) {
      return '🖐';
   } else if (roll === 3) {
      return '✌';
   }
}

container.addEventListener('click', function (e) {
   const playerChoice = e.target.innerText;
   const npcChoice = shoot();
   if (npcChoice === playerChoice) {
      return console.log('Draw');
   }
   if (playerChoice === '✊') {
      if (npcChoice === '✌') {
         console.log(
            `Winner!! Computer chose ${npcChoice} and you chose ${playerChoice}`
         );
      } else {
         console.log(
            `Loser!! Computer chose ${npcChoice} and you chose ${playerChoice}`
         );
      }
   }
   if (playerChoice === '🖐') {
      if (npcChoice === '✊') {
         console.log(
            `Winner!! Computer chose ${npcChoice} and you chose ${playerChoice}`
         );
      } else {
         console.log(
            `Loser!! Computer chose ${npcChoice} and you chose ${playerChoice}`
         );
      }
   }
   if (playerChoice === '✌') {
      if (npcChoice === '🖐') {
         console.log(
            `Winner!! Computer chose ${npcChoice} and you chose ${playerChoice}`
         );
      } else {
         console.log(
            `Loser!! Computer chose ${npcChoice} and you chose ${playerChoice}`
         );
      }
   }
});

// container.addEventListener('click', function (e) {
//    if (e.target.className === 'rock') {
//       console.log(e.target.className);
//    } else if (e.target.className === 'paper') {
//       console.log(e.target.className);
//    } else if (e.target.className === 'scizzors') {
//       console.log(e.target.className);
//    }
// });
