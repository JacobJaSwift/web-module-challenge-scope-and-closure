// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

    let score = Math.random() * 2;
    score = Math.round(score);
    return score;
}

console.log(inning());
console.log(inning());
console.log(inning());
console.log(inning());
console.log(inning());
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, number){
    // callback is inning function
    // numbers 
    let homeTeam = []; // home team score
    let awayTeam = []; // away team score

    // need to generate a score per inning
    // creating with keys Home and Away
    let totalScores = {home:0, away: 0};
    // need to generate a score per inning
    for(let i=1; i <= number; i++) {
      let homeScore = 0;
      let awayScore = 0;
      homeScore = inning();
      awayScore = inning();
      homeTeam.push(homeScore);
      awayTeam.push(awayScore);
    }
    let finalHome = homeTeam.reduce((totalHome, score)=> {
      return totalHome + score;
    }, 0);
    let finalAway = awayTeam.reduce((totalAway, score)=> {
      return totalAway + score;
    }, 0);

    totalScores.home = finalHome;
    totalScores.away = finalAway;

    return totalScores;
   
}

console.log(finalScore(inning, 9));



/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function getInningsScore(inning){
  return { 
    home:inning(), 
    away:inning()
  }
}


function scoreboard(getInningScore, inning, number) {
  let homeScore = 0;
  let awayScore = 0;
  let scoreCard = [];
  for(let i = 1; i <= number; i ++){
        const currentInningScore = getInningScore(inning);
        homeScore += currentInningScore.home;
        awayScore += currentInningScore.away;
        scoreCard.push(`${i} inning: ${currentInningScore.home} - ${currentInningScore.away}`)
  }
  if(homeScore === awayScore) {
    scoreCard.push(`This game will require extra innings`);
  } else {
    return scoreCard.push(`Final Score Home: ${homeScore} - Away ${awayScore}`);
  }
  return scoreCard;
}
console.log(scoreboard(getInningsScore,inning, 9));


