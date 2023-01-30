/**
 * Function which build pack of Cards as an Array and as an Object
 * @param {*} asArray - which decides whether to return as an Array or as an Object
 * @returns - packArr if asArray is true, else packObj
 */
 function buildCards(asArray=true){
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
    const packArr = []
    const packObj = {}

    // write your code here
    // packArr=["Ace of Hearts" , "2 of Hearts" , "3 of Hearts" , "4 of Hearts" , "5 of Hearts" , "6 of Hearts" , "7 of Hearts" , "8 of Hearts" , "9 of Hearts" , "10 of Hearts" , "Jack of Hearts" , "King of Hearts" , "Queen of Hearts",
    //         "Ace of Diamonds" , "2 of Diamonds" , "3 of Diamonds" , "4 of Diamonds" , "5 of Diamonds" , "6 of Diamonds" , "7 of Diamonds" , "8 of Diamonds" , "9 of Diamonds" , "10 of Diamonds" , "Jack of Diamonds" , "King of Diamonds" , "Queen of Diamonds",
    //         "Ace of Spades" , "2 of Spades" , "3 of Spades" , "4 of Spades" , "5 of Spades" , "6 of Spades" , "7 of Spades" , "8 of Spades" , "9 of Spades" , "10 of Spades" , "Jack of Spades" , "King of Spades" , "Queen of Spades",
    //         "Ace of Clubs" , "2 of Clubs" , "3 of Clubs" , "4 of Clubs" , "5 of Clubs" , "6 of Clubs" , "7 of Clubs" , "8 of Clubs" , "9 of Clubs" , "10 of Clubs" , "Jack of Clubs" , "King of Clubs" , "Queen of Clubs"
    //         ];

    // packObj={"Ace of Hearts":1 , "2 of Hearts":2 , "3 of Hearts":3 , "4 of Hearts":4 , "5 of Hearts":5 , "6 of Hearts":6 , "7 of Hearts":7 , "8 of Hearts":8 , "9 of Hearts":9 , "10 of Hearts":10 , "Jack of Hearts":11 , "King of Hearts":12 , "Queen of Hearts":13,
    //         "Ace of Diamonds":1 , "2 of Diamonds":2 , "3 of Diamonds":3 , "4 of Diamonds":4 , "5 of Diamonds":5 , "6 of Diamonds":6 , "7 of Diamonds":7 , "8 of Diamonds":8 , "9 of Diamonds":9 , "10 of Diamonds":10 , "Jack of Diamonds":11 , "King of Diamonds":12 , "Queen of Diamonds":13,
    //         "Ace of Spades":1 , "2 of Spades":2 , "3 of Spades":3 , "4 of Spades":4 , "5 of Spades":5 , "6 of Spades":6 , "7 of Spades":7 , "8 of Spades":8 , "9 of Spades":9 , "10 of Spades":10 , "Jack of Spades":11 , "King of Spades":12 , "Queen of Spades":13,
    //         "Ace of Clubs":1 , "2 of Clubs":2 , "3 of Clubs":3 , "4 of Clubs":4 , "5 of Clubs":5 , "6 of Clubs":6 , "7 of Clubs":7 , "8 of Clubs":8 , "9 of Clubs":9 , "10 of Clubs":10 , "Jack of Clubs":11 , "King of Clubs":12 , "Queen of Clubs":13
    //         };
    for(var i=0;i<suits.length;i++){
        var k=1;
            for(var j=0;j<values.length;j++){
                var s='';
                s+=values[j]+' of '+suits[i];
                packArr.push(s)
                packObj[s]=k;
                k+=1
            }
        }


    if(!asArray){
        return packObj;
    }
    return packArr;
}

/**
 * Define Deck class
 */
class Deck {
    constructor() {
        this.deck = [];
        this.reset(); //Add 52 cards to the deck
        this.shuffle(); //Suffle the deck
    } //End of constructor


    /**
     * Resetting the Deck
     * Hint: use buildCards in this method
     */
    reset() {
        // write your code here
        this.deck=[];
        this.deck=buildCards(true);

    } //End of reset()


    /**
     * Shuffling the cards
     */
    shuffle() {
        // write your code here
        for(var len=this.deck.length,i=0;i<len;i++){
            var suits=Math.floor(Math.random() * len),k=this.deck[i];
            this.deck[i]=this.deck[suits];
            this.deck[suits]=k;
        }
        
    } //End of shuffle()

    /**
     * Deal a card
     * @returns {String} A Card from the deck of cards
     */
    deal() {
        // write your code here
        return this.deck.pop();

    } //End of deal()

    /**
     * Check if the Deck is empty
     * @returns {Boolean} True or False 
     */
    isEmpty() {
        if(this.deck.length==0){
            return true;
        }
        else{
            return false;
        }

    } //End of isEmpty()

    /**
     * Remaining cards in the Deck
     * @returns {Number} Number of cards in the Deck
     */
    length() {
        // write your code here
        return this.deck.length;

    } //End of length()

} //End of Deck Class


/**
 * Define Card Class
 */
class Card {
    constructor(card) {
        this.card = card;

        // Get all cards as an Object with key as card name and value as the number of the card
        const cardValues = buildCards(false);

        this.value = cardValues[card];
        this.suit = card.substring(card.indexOf(" of ") + 4);
        this.placeHolder = null;
        this.flipped = false;

        var suits = { 'Hearts': 0, 'Diamonds': 13, 'Clubs': 26, 'Spades': 39 }
        this.position = suits[this.suit] + this.value; //Position in a sorted deck
    } //End of Constructor

    /**
     * Method to display the card
     * @param {*} placeHolder 
     * @param {*} flipped 
     */
    displayCard(placeHolder, flipped = true) {
        this.placeHolder = document.getElementById(placeHolder);
        this.placeHolder.classList.add("card");
        this.flipped = flipped;
        if (flipped) {
            this.placeHolder.style.backgroundPosition = -150 * this.position + "px";
        } else {
            this.placeHolder.style.backgroundPosition = "0px";
        }
    } // End of displayCard

    /**
     * Method to flip the card
     */
    flip() {
        if (this.flipped) {
            this.placeHolder.style.backgroundPosition = "0px";
            this.flipped = false;
        } else {
            this.placeHolder.style.backgroundPosition = -150 * this.position + "px";
            this.flipped = true;
        }
    } //End of flip()

} //End of Card class

/**
 * Functions which help Play the BlackJack game 
 */
const deck = new Deck();
let card1, card2, playerCard1, playerCard2, playerCard3, playerCard4;

let playerTotal = 0;
let dealerTotal = 0;

/**
 * Dealing initial Cards
 */
function initialDeal() {
    if (deck.length() < 7) {
        deck.reset();
        deck.shuffle();
    }

    // Deal(Instantiate) 2 Dealer cards and 2 Player cards

    card1=new Card(deck.deal());
    card2=new Card(deck.deal());
    playerCard1=new Card(deck.deal());
    playerCard2=new Card(deck.deal());
    // Open the board with 2 Dealer cards (one Dealer card is closed) and 2 Player cards (both open)
    card1.displayCard("card1",!0);
    card2.displayCard("card2",!1);
    playerCard1.displayCard("playerCard1",!0);
    playerCard2.displayCard("playerCard2",!0);

    // Setting face card values to 10

    card1.value=10 < card1.value ? 10 : card1.value;
    card2.value=10 < card2.value ? 10 : card2.value;
    playerCard1.value=10 < playerCard1.value ? 10 : playerCard1.value;
    playerCard2.value=10 < playerCard2.value ? 10 : playerCard2.value;
    // Getting player cards total - show an alert only if there is a Blackjack
    // Alert to show Blackjack
    21 === (playerTotal=playerCard1.value+playerCard2.value) &&
        cuteAlert({
            type: "success",
            title: "Superb!!!",
            message: "Blackjacked !!!",
            buttonText: "Wohoo !!!",
            img:"success.svg"
        }).then(() => {
            location.reload()  // Load a new game
        })
    

    // write your code here

} //End of deal()

/**
 * If the Player stands with his cards - the Dealer has to flip his closed card and determine who wins the game
 */
function stand() {
    // flip Dealer cards and compare

    card2.flip();
    dealerTotal=card1.value+card2.value;
    // Checking Dealer and Player score - to give the result using cuteAlerts (just like the alert in initialDeal function)
    (playerTotal >= dealerTotal
        ?cuteAlert({
            type: "success",
            title: "Congratulations!!!",
            message: "you won the game !!!",
            buttonText: "Hurray 😉 !!!",
            img:"success.svg"
        })
        :cuteAlert({
            type: "error",
            title: "Better luck next time!!!",
            message: "you lost !!!",
            buttonText: "Tryagain ☹ !!!",
            img:"error.svg"
        })
    ).then(() => {
        location.reload()  
    })

}

// Variable to track the extra cards dealed
let extraCnt = 0;

/**
 * function which deals extra playercards - Max. 2 cards
 */
function hit() {
    let dealButton = document.getElementById("deal");

    // Dealing the extra cards that the player requests
    playerCard3=new Card(deck.deal());
    playerCard4=new Card(deck.deal());
    // Dealing new cards 
    // Use conditional block
    if(0===extraCnt){
        playerCard3.displayCard("playerCard3",true);
        playerCard3.value=10 < playerCard3.value ? 10 : playerCard3.value;
        playerTotal+=playerCard3.value;
    }
    else if(1===extraCnt){
        playerCard4.displayCard("playerCard4",true);
        playerCard4.value=10 < playerCard4.value ? 10 : playerCard4.value;
        playerTotal+=playerCard4.value;
    }
    else{
        asArray.style.display = "none";
   // When 4 cards are dealed use the following code
        //dealButton.style.display = 'none'
        // Alert - Max. Cards dealed
        cuteAlert({
            type: "warning",
            title: "Sorry...",
            message: "Max. Cards dealed",
            buttonText: "OK",
            img:"warning.svg"
        });
    }  
     // Checking the total of the player cards before dealing new cards
        // cuteAlert - Player looses the game - as score is more than 21
        // cuteAlert - Player wins with BlackJack !!!
    if(21<playerTotal){
        cuteAlert({
            type: "error",
            title: "Better luck next time!!!",
            message: "you lost !!!",
            buttonText: "Tryagain ☹ !!!",
            img:"error.svg"
        }).then(()=>{
            location.reload();
        });
        asArray.style.display="none";
    } else
    21 === playerTotal &&
    cuteAlert({
        type: "success",
        title: "Superb!!!",
        message: "Blackjacked !!!",
        buttonText: "Wohoo !!!",
        img:"success.svg"
    }).then(() => {
        location.reload()  
    })

    // Increment extra card count
    extraCnt++;
}
 
/**
 * Initial Deal
 */
initialDeal();