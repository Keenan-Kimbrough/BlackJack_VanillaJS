/*
Blackjack
- Start with a deck of 52 cards with values 2-11
- Can run multiple rounds, with multiple players: ( playGame(numRounds, numPlayers)   )
  - Each player is given 2 cards from the deck to start a round.
  - Goal is to get as close to a card value of 21 as possible without going over.
  - Players alternate turns either: 
     "Hitting" being dealt another card.
     Or
     "Passing" staying with their current cards and no longer taking any turns this round
  - If a player ever exceeds 21, they immediately lose the current round.
  - Once everyone has passed, the round is over and the person with a card value closest to 21 wins. 
*/

// Round: 1
// Playing with 4 players
// Dealer: AH AS 5C - bust
// P1: AH AS 1C - blackjack
// P2: AH 9C - 19
// P3: AH AS AC - blackjack
// Winner(s): P1, P3

var deck 

function buildDeck() {
  let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let types = ["C", "D", "H", "S"];
  deck = [];

  for (let i = 0; i < types.length; i++) {
      for (let j = 0; j < values.length; j++) {
          deck.push(values[j] + "-" + types[i]); //A-C -> K-C, A-D -> K-D
      }
  }
  // console.log(deck);
  console.log()
}
buildDeck()

playGame = (numRounds, numPlayers) => {
  console.log(`Rounds: ${numRounds}, Players: ${numPlayers}`);
  for (let round = 0; round < numRounds; round++) {
    console.log(`====\nRound: ${round + 1}`);
    singleRound(numPlayers);
  }
};

// GOAL: Make this into randomCard
randomNumber = (max) => {
 let  = deck
  // Make this into a "random card"
  //map through deck array and pick the first index of each inside array and turn into number then return that numb
  for (let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * deck.length); // (0-1) * 52 => (0-51.9999)
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
    
}
return deck
console.log(newdeck.pop());
  }
 
 randomNumber()

singleRound = (numPlayers) => {
  console.log(`Playing with ${numPlayers} players`);
  // All the hands at the end of a game
  let players = new Array(numPlayers);

  // Hit every player until > 17
  for (let player = 0; player < numPlayers; player++) {
    players[player] = [];
    let sumPlayer = 0;
    while (sumPlayer < 17) {
      let cardValue = randomNumber(11);
      players[player].push(cardValue);
      sumPlayer += cardValue;
    }
    console.log(`Player ${player}: ${players[player]}`);
  }

  // Find player with max score (below 22) and make them winner
  let winner = 0;
  let winnerScore = 0;
  for (let player = 0; player < numPlayers; player++) {
    let playerScore = players[player].reduce((a, b) => a + b);
    if (playerScore <= 21 && playerScore > winnerScore) {
      winner = player;
      winnerScore = playerScore;
    }
  }
  console.log(`Winner = ${winner} with score ${winnerScore}`);
};

playGame(3, 4);
