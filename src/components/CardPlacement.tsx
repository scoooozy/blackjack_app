import clsx from "clsx"
import { CardType, getRandomCard } from '../utils'
import { useState } from "react"
import Card from "./Card"
type Props = {
    className?: string

}

const CardPlacement = ({ className }: Props) => {
    const [cards, setCards] = useState<CardType[]>([])
    const addRandomCard = () => {
        const randomCard = getRandomCard();
        setCards([...cards, randomCard]);
    }
    return (
        <div className={clsx(className, "w-52 h-56 border border-dashed relative")}>
            <button className='btn-primary bg-blue-800' onClick={addRandomCard}>
                Random card  for me!!!!!!
            </button>
            {cards.map((card, i) => 
                <Card key={`${i}${card[0]}${card[1]}`} className={`absolute z-${i} translate-y-[${i+200}px]`} cardLabel={card[0]} cardSuit={card[1]}/>
            )}
        </div>
    )
}

export default CardPlacement