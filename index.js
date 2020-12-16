import { fifaData } from "./fifa.js";

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

// -----------     fifaData
//   {
//       "Year": 1930,
//       "Datetime": "13 Jul 1930 - 15:00",
//       "Stage": "Group 1",
//       "Stadium": "Pocitos",
//       "City": "Montevideo",
//       "Home Team Name": "France",
//       "Home Team Goals": 4,
//       "Away Team Goals": 1,
//       "Away Team Name": "Mexico",
//       "Win conditions": "",
//       "Attendance": 4444,
//       "Half-time Home Goals": 3,
//       "Half-time Away Goals": 0,
//       "Referee": "LOMBARDI Domingo (URU)",
//       "Assistant 1": "CRISTOPHE Henry (BEL)",
//       "Assistant 2": "REGO Gilberto (BRA)",
//       "RoundID": 201,
//       "MatchID": 1096,
//       "Home Team Initials": "FRA",
//       "Away Team Initials": "MEX"
//     },

// TEAMS FOR 2014
const team2014 = fifaData.filter((homeTeam) => {
  return homeTeam.Year === 2014;
});
// console.log(team2014);
//(a) Home Team name for 2014 world cup final
const homeTeam2014 = team2014.map((teamName) => {
  return teamName["Home Team Name"];
});
// console.log(homeTeam2014);
//(b) Away Team name for 2014 world cup final
const awayTeam2014 = team2014.map((awayName) => {
  return awayName["Away Team Name"];
});
// console.log(awayTeam2014);
//(c) Home Team goals for 2014 world cup final
const homeTeamGoals2014 = team2014.map((homeGoal) => {
  return homeGoal["Home Team Goals"];
});
// console.log(homeTeamGoals2014);
//(d) Away Team goals for 2014 world cup final
const awayTeamGoals2014 = team2014.map((homeGoal) => {
  return homeGoal["Away Team Goals"];
});
// console.log(awayTeamGoals2014);
//(e) Winner of 2014 world cup final */

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
  /* code here */
  return data.filter((stage) => {
    return stage.Stage === "Final";
  });
}
// console.log(getFinals(fifaData));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(arr, cb) {
  /* code here */
  const getYear = cb(arr).map((year) => {
    return year.Year;
  });
  return getYear;
}

// console.log(getYears(fifaData, getFinals));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */

function getWinners(arr, cb) {
  /* code here */

  const winners = cb(arr).map((team) => {
    if (team["Home Team Goals"] > team["Away Team Goals"]) {
      return team["Home Team Name"];
    } else {
      return team["Away Team Name"];
    }
  });

  return winners;
}

// console.log(getWinners(fifaData, getFinals));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(arr, cb, cb2) {
  /* code here */
  const year = cb(arr);
  const country = cb2(arr);
  return year.map((years, i) => {
    return `In ${years}, ${country[i]} won the world cup!`;
  });
}

// console.log(getWinnersByYear(fifaData, getYears, getWinners));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(cb) {
  /* code here */
  const dataLength = cb.length;
  const homeGoals = cb.reduce((acc, curVal) => {
    return acc + curVal["Home Team Goals"];
  }, 0);
  const awayGoals = cb.reduce((acc, curVal) => {
    return acc + curVal["Away Team Goals"];
  }, 0);

  return ((homeGoals + awayGoals) / dataLength).toFixed(2);
}

console.log(getAverageGoals(getFinals(fifaData)));
/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
  /* code here */
}

/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo() {
  console.log("its working");
  return "bar";
}
export default {
  foo,
  getFinals,
  getYears,
  getWinners,
  getWinnersByYear,
  getAverageGoals,
};
