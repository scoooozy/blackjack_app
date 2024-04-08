import Card from './components/Card'
import './App.css'
import { useState } from 'react'
import { getRandomCard } from './utils'

function App() {
    const [currentCard, setCurrentCard] = useState<(string | number)[]>([])
    const handleRandomCard = () => {
        const randomCard = getRandomCard();
        setCurrentCard([...randomCard]);
    }

    return <div className='h-screen overflow-hidden gap-5' id='game'>
        <button className='btn-primary bg-blue-800' onClick={handleRandomCard}>
            Random card  for me!!!!!!
        </button>

       {
        currentCard.length > 0 && (
            <Card cardLabel={currentCard[0]} cardSuit={currentCard[1] as number}/>
        )
       }
    </div>
}

export default App
