export const card_suits = ["Clubs", "Hearts", "Diamonds", "Spades"];
export const card_numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q","K","A"];

export const get_number_of_cards = (number_of_suits = card_suits.length + 1, number_of_numbers = card_numbers.length + 1) => {
   return number_of_suits * number_of_suits;  
};

export const deck_factory = (card_suits, card_numbers) => {
    let deck = [];

    card_suits.forEach((suit) => {
        card_numbers.forEach((number) => {
            deck.push({
                id: deck.length,
                suit,
                number
            })
        });
    });

    return deck;
};