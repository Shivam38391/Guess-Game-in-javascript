'use strict';


let secret = Math.trunc(Math.random()*20) + 1;


// state variable
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function() {

      const guess = Number(document.querySelector('.guess').value);

      if (!guess) {
        document.querySelector('.message').textContent = "Please input a number.👀"

        // when player wins
      } else if (guess === secret) {
        document.querySelector('.message').textContent = "u guess the number correct 🌹🎉";

        document.querySelector('body').style.backgroundColor = "#60b300";
        // document.querySelect('.number').style.width = "60rem";

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;

        }

console.log(highscore);

      } else if (guess > secret) {

        if (score > 1 ) {

            document.querySelector('.message').textContent = "Too high "
         
            score = score -1
            document.querySelector('.score').textContent = score;
        } else {

            document.querySelector('.message').textContent = "💦You lost game"
            document.querySelector('.score').textContent = 0;

        }


      } else if (guess < secret) {
        if (score > 1 ) {

            document.querySelector('.message').textContent = "Too Low "
         
            score = score -1
            document.querySelector('.score').textContent = score;
        } else {

            document.querySelector('.message').textContent = "💦You lost game"
            document.querySelector('.score').textContent = 0;

        }
      }
    
});



document.querySelector('.again').addEventListener('click', function() {

    score = 20;
    secret = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.message').textContent = "start guessing...🌹🎉";

    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';



} )