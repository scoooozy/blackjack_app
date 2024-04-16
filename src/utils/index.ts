export enum Suits {
    Clubs, 
    Hearts,
    Spades,
    Diamonds
}

export type CardType = [string | number, number];     

export const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random()* (max - min)) + min;
}

export const getRandomCard = ():CardType => {
    const variants = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    return [variants[getRandomNumber(0, variants.length)],getRandomNumber(0, 4)]
}