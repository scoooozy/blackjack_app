import clsx from "clsx"
import { CardType, getRandomCard } from '../utils'
import { useState, useEffect } from "react"
import Card from "./Card"
type Props = {
    className?: string
    deal: boolean

}

const CardPlacement = ({ className, deal }: Props) => {
    const [cards, setCards] = useState<CardType[]>([])
    const getCardsSum = () => {
        let sum = 0;
        const aces: string[] = []
        cards.forEach(card => {
            if(typeof card[0] === "string") {
                if (card[0] === "A") {
                    aces.push(card[0]);
                }  else {
                    sum += 10;
                }
            } else {
                sum += card[0] as number;
            }
        });

        aces.forEach(() => {
            if(sum >= 11) {
                sum += 1;
            } else {
                sum += 11;
            }
        })

        return sum 
    }

    useEffect(() => {
        if(deal) {
            const randomCard = getRandomCard();
            setCards([...cards, randomCard]);
        }
    }, [deal])


    return (
        <div className={clsx(className, "w-52 h-56 p-2 flex items-center justify-start flex-col")}>
            <h1>Sum: {getCardsSum()}</h1>
           <div className="relative mt-2">
           {cards.map((card, i) => 
                <Card key={`${i}${card[0]}${card[1]}`} className={`absolute z-${i+1}`} style={{top: `${i * 40}px`, left: "50%", transform: "translateX(-50%)"}} cardLabel={card[0]} cardSuit={card[1]}/>
            )}
           </div>
        </div>
    )
}

export default CardPlacement