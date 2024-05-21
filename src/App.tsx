import './App.css'
import { useState } from "react"
import CardPlacement from './components/CardPlacement'
import { CardType, getRandomCard } from './utils'

type Placement = {
    cards: CardType[],
    sum: number
}

function App() {
    const [placements, setPlacements] = useState<Placement[]>(
        [{
            cards: [],
            sum: 0
        }, {
            cards: [],
            sum: 0
        }, {
            cards: [],
            sum: 0
        }]
    )

    const onDeal = () => {
       setPlacements(prevPlacements => {
        return [
            {
                cards: [...prevPlacements[0].cards, getRandomCard()],
                sum: 0
            },
            {
                cards: [...prevPlacements[1].cards, getRandomCard()],
                sum: 0
            },
            {
                cards: [...prevPlacements[2].cards, getRandomCard()],
                sum: 0
            }
        ]
       })
    }


    return <div className='h-screen overflow-hidden gap-5' id='game'>
        <div className="grid grid-cols-3 grid-rows-3 place-items-center">
            <CardPlacement className='col-start-2' />
            <CardPlacement className='col-start-1' />
            <CardPlacement className='col-start-3 ' />
            <CardPlacement className='row-start-3 col-start-2' />
        </div>

        <div>
            <button className='bg-orange-600 px-4 py-1 rounded col-start-2 row-start-2'>Deal</button>

        </div>


    </div>
}

export default App
