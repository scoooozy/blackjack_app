// 10 ---> 4 2 4
// 9 ---> 4 1 4
// 8 ---> 3 2 3 
// 7 ---> 3 1 3 
// 6 ---> 3 0 3
// 5 ---> 2 1 2 
// 4 ---> 2 0 2 
// 3 ---> 0 3 0
// 2 ---> 0 2 0
// 1 ---> 0 1 0  
import clubs from "../assets/images/cards/clubs.png"
import diamonds from "../assets/images/cards/diamonds.svg"
import hearts from "../assets/images/cards/hearts.png"
import spades from "../assets/images/cards/spades.png"
import { Suits } from "../utils";

interface ICardProps {
    cardLabel: string | number;
    cardSuit: Suits; 
}

const getCardImageBasedOnSuit = (suit: Suits) => {
    switch(suit) {
        case Suits.Clubs:
            return clubs; 
        case Suits.Diamonds: 
            return diamonds;
        case Suits.Hearts:
            return hearts;
        default: 
            return spades;
    } 
}


//c onst Card:React.FC<ICardProps>
const Card = ({ cardSuit, cardLabel}: ICardProps) => {


    return (
        <div className="flex bg-white border rounded-md w-36 h-48 p-2">
            <div className="flex justify-start items-center flex-col">
                <h3 className="font-bold text-2xl">{cardLabel}</h3>
                <p><img className="w-5 h-5" src={getCardImageBasedOnSuit(cardSuit)} alt="Card suit" /></p>
            </div>
            <div className="grow flex items-center justify-center">
                <div>
                    <img className="w-14 h-14" src={getCardImageBasedOnSuit(cardSuit)} alt="Card suit" />
                </div>
            </div>
            <div className="flex rotate-180 justify-start items-center flex-col">
                <h3 className="font-bold text-2xl">{cardLabel}</h3>
                <p><img className="w-5 h-5" src={getCardImageBasedOnSuit(cardSuit)} alt="Card suit" /></p>
            </div>
        </div>
    )
}

export default Card