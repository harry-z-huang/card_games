class Card {
    constructor(rank, suit){
        this.rank = rank;
        this.suit = suit;
    }
}

class Hand {
    constructor(array_of_cards = []){
        this.cards = array_of_cards;
    }

    addCard(card = []){
        ///adds given card to the hand
        this.cards.push(card)
    }

    playCard(card){
        ///remove and return the specified card object instance from the hand

        if(this.cards.includes(card)){
            this.cards = this.cards.filter(screened_card => screened_card != card)

            return card
        } else{
            return null
        }
    }
}

class Deck {
    constructor(possible_ranks, possible_suits, array_of_cards = []){
        ///Both possible_ranks and possible_cards are arrays of strings. array_of_cards is an array of card object instances.

        this.ranks = possible_ranks;
        this.suits = possible_suits;
        this.card_deck = array_of_cards;
    }

    generateCards(){
        ///populate deck with initial array of cards of all permutations of ranks and suits
        for(const rank of this.ranks){
            for(const suit of this.suit){
                const card = new Card(rank, suit);
                
                //Fill deck with missing card permutations only
                if(!this.card_deck.includes(card)){
                    this.card_deck.push(card)
                }
            }
        }
    }

    shuffleCards(){
        ///shuffles cards in the deck
        // Pulled from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        function shuffle(array) {
            let currentIndex = array.length,  randomIndex;
          
            // While there remain elements to shuffle.
            while (currentIndex != 0) {
          
              // Pick a remaining element.
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
          
              // And swap it with the current element.
              [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }
          
            return array;
          }
        
        this.card_deck = shuffle(this.card_deck)
    }

    draw(){
        ///remove and return a card from the deck
        return this.card_deck.pop()
    }

    deal(numHands,cardsPerHand){
        ///deals cardsPerHand cards to numHands hands. Assumes creation of new game with empty hands and need for full deck with all permutations.

        this.card_deck.generateCards();
        this.card_deck.shuffleCards();

        let array_hands = [];
        for(let i = 0; i<numHands; i++){
            let new_hand = new Hand();

            for(let i = 0; i<cardsPerHand; i++){
                new_hand.addCard(this.card_deck.draw())
            }

            array_hands.push(new_hand)
        }
    }
}