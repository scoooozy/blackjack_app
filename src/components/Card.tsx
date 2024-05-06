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
import clsx from "clsx"
import { Suits } from "../utils";
import {gsap} from "gsap"
import { CSSProperties, useEffect } from "react"
import { useRef } from "react"

interface ICardProps {
    cardLabel: string | number;
    cardSuit: Suits; 
    className ? : string,
    style: CSSProperties
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
const Card = ({ cardSuit, cardLabel,className, style}: ICardProps) => {
    const ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if(ref.current) {
                gsap.fromTo(
                    ref.current, 
                    {
                        x: 0, 
                        y: -100
                    }, 
                    {
                        x:  0,
                        y: 0,
                        duration: 1,
                        ease: "elastic.out(1, 0.3)"
                    }
                )
            }
        })

        return () => ctx.revert()
    }, [])

    return (
        <div ref={ref} style={style} className={clsx( className , `flex bg-white border rounded-md w-32 h-44 p-2 ${cardSuit == Suits.Diamonds || cardSuit == Suits.Hearts ? "text-red-600" : "text-black" }`) }>
            <div className={` flex justify-start items-center flex-col`} >
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