// console.log('Advanced debugging example running.')
// debugger

// // first, define the function.
// function goodPractices() {
//   let game = gameObject();
//   for (let gameKey in game) {
//     // are you ABSOLUTELY SURE what 'gameKey' is?
//     // use the debugger to find out!
//     debugger
//     let teamObj = game[gameKey]
//     for (let teamKey in teamObj) {
//       // are you ABSOLUTELY SURE what 'teamKey' is?
//       // use debugger to find out!
//       debugger

//       // what is 'data' at each loop through out this block?
//       // when will the following line of code work and when will it break?
//       let data = teamObj.player
//       for (let key in data) {
//         debugger
//       }
//     }
//   }
// }

// // then, call the function so it runs!
// goodPractices()


function numPointsScored(playerName){
  let game = gameObject()
  let requestedPoints
  for(let gameKey in game){
    let teamObj = game[gameKey]
    for(let teamKey in teamObj){
      if(teamKey === "players") {
        let playerObj = teamObj[teamKey]
        for(let player in playerObj) {
          if(player === playerName){
            requestedPoints = playerObj[player].points
          }
        }
      }
    }
  }
  return requestedPoints
}

console.log('numPointsScored function: ', numPointsScored('Ben Gordon'))


function shoeSize (playerName){
  let game = gameObject()
  let playerObj
  for (let teamKey in game){
    let teamObj = game[teamKey]
    playerObj = teamObj.players[playerName] ? teamObj.players[playerName] : playerObj
  }
  return playerObj.shoe
}

console.log('shoeSize function: ', shoeSize("Alan Anderson"))

function teamColors(teamName) {
  const game = gameObject() 

  for(let teamKey in game){
    if(game[teamKey].teamName === teamName){
      return game[teamKey].colors
    }
  }
}

function teamNames () {
  const game = gameObject()
  return [game.away.teamName, game.home.teamName]
}

console.log('teamName function:', teamNames())


function playerNumbers(team) {
  const game = gameObject()
  const jerseyNumbers = []

  for(let teamKey in game){
    const {players, teamName} = game[teamKey]
    if(teamName === team){
      for(let player in players){
        let playerNumber = players[player].number
        jerseyNumbers.push(playerNumber)
      }
    }
  }
  return jerseyNumbers
}

console.log('playerNubmers function:', playerNumbers("Charlotte Hornets"))


function playerStats(playerName) {
  let game = gameObject()
  let playerObj

  for(let teamKey in game){
    let teamObj = game[teamKey]
    if(teamObj.players[playerName]){
      playerObj = teamObj.players[playerName]
    }
  }
  return playerObj
}

console.log('playerStats function: ', playerStats('Brook Lopez'))