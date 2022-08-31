class Card {
    constructor(rank, suit){
        this.rank = rank;
        this.suit = suit;
    }
}

class Hand {
    constructor(array_of_cards){
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
    constructor(possible_ranks, possible_suits, array_of_cards){
        this.possible_ranks = possible_ranks;
        this.possible_suits = possible_suits;
        this.cards = array_of_cards;
    }

    generateCards(){
        ///populate deck with initial array of cards

    }

    shuffleCards(){
        ///shuffles cards in the deck

    }

    draw(){
        ///remove and return a card from the deck

    }

    deal(numHands,cardsPerHand){
        ///deals cardsPerHand cards to numHands hands
    }
}