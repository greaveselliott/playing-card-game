export const card_suits = ["Clubs", "Hearts", "Diamonds", "Spades"];
export const card_numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q","K","A"];

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