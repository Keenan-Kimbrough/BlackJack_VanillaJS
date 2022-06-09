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


Implementation Notes:
Dealer doesn't have a hand, just players.
No UI needed (can just console log winner each round)
No Input needed (when players decide hit or pass, just pick randomly)
Aces can count as 11 (do not need to worry about multiple values)
Every round is fresh (no need to keep state between rounds)
*/

/*
Deck of Playing Cards
  52 cards total
  36 - Number cards 2-10 in 4 suits (heart/diamond/spade/club, this doesn't matter for blackjack)
  12 - Face cards Jack, Queen, King in 4 suits - value=10
  4 - Aces in 4 suites - value=11
*/
let gameOver = false
class Game {
    constructor(numPlayers) {
        this.players = new Player()
        this.deck = new Deck()
    

    }

play (numPlayers) {
   let  players = this.players
    
    console.log(`playing with ${numPlayers} Players`)
    

    for (let player = 0; player < numPlayers; player++) {
        players[player] = new Player();
        let sumPlayer = 0;
        
        
        while (players[player].playerSum < 18 ) {
        let card = this.deck.getCard();
        
        players[player].hand.push(card);
        console.log(`Players ${player} current hand is Card -- ${players[player].hand.toString()}-- `)

        players[player].playerSum += card.getValue();
        players[player].scoreHand.push(card.getValue()) 
        console.log(players[player].playerSum )


        }

    }
        let winner = 0;
        let winnerScore = 0;
        let noOne = 'no one won'
        for (let player = 0; player < numPlayers; player++) {

        
        let playerScore = players[player].scoreHand.reduce((a, b) => a + b);
        if (playerScore <= 21 && playerScore > winnerScore) {
            winner = player;
            winnerScore = playerScore;

            if (winnerScore === 0) {
                winner = noOne
            }
            else {
                winner = player
            }
        }

        if (winnerScore === 0) {
            winner = noOne
        }
        else {
            winner = player
        }
    }

       
        
        console.log(`Winner = ${winner} with score ${winnerScore}`);
    }
        

        

      
    }
    





class Deck  {
    constructor() {
        this.deck = [];
        let types = ["C", "D", "H", "S"];
        let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        for (let i = 0; i < types.length; i++) {
            for (let j = 0; j < values.length; j++) {
                this.deck.push(new Card(values[j], types[i])); //A-C -> K-C, A-D -> K-D
            }
        }
        this.shuffle()
    }
    shuffle() {
        for (let i = 0; i < this.deck.length; i++) {
            let j = Math.floor(Math.random() * this.deck.length); // (0-1) * 52 => (0-51.9999)
            let temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }
    
    
    getCard = ()=> {
        return this.deck.pop()
    }
   
}


class Card {
constructor(values,types) {
    this.values = values
    this.types = types
}
getValue(values,types) {
    if(!isNaN(this.values)) return parseInt(this.values);
    else if(this.values == 'A') return 11;
    return 10;
}
toString(values,types) {

    return `${this.types} ${this.values}`
}
}
class Player {
 constructor() {
     this.hand = []
     this.playerSum = 0
     this.skipTurn = false
     this.scoreHand = []
    
 }
 hit=()=>{
    // this is the error here
    this.newCard = new Card()

player.hand.push(newCard)
this.player.playerSum += newCard.getValue()
/*
this is the logic for the card
    let  ard = this.deck.pop()
    this.playerSum += getValue (card)
    */
   }
   pass = () => {

    this.player.skipturn = true
   }
 
} 
pass = () => {

    this.player.skipturn = true
   }
 

playGame = (numRounds, numPlayers) => {
    console.log(`Rounds: ${numRounds}, Players: ${numPlayers}`);
    for (let round = 0; round < numRounds; round++) {
      console.log(`====\nRound: ${round + 1}`);
      new Game(numPlayers).play(numPlayers);
    }
  };
  
  playGame(3, 4);


