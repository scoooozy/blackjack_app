import './App.css'
import {useState} from "react"
import CardPlacement from './components/CardPlacement'

function App() {
    const [deal, setDeal] = useState(false)
    const giveCards = () => {
        setDeal(true)
        setTimeout(() => {
            setDeal(false)
        }, 500)

        setTimeout(() => {
            setDeal(true)
        }, 1000)
    }

    return <div className='h-screen overflow-hidden gap-5' id='game'>
        <div className="grid grid-cols-3 grid-rows-3 place-items-center">
            <CardPlacement deal={deal}   className='col-start-2' />
            <CardPlacement deal={deal} className='col-start-1' />
            <button onClick={giveCards} className='bg-orange-600 px-4 py-1 rounded col-start-2 row-start-2'>Deal</button>
            <CardPlacement deal={deal} className='col-start-3 ' />
            <CardPlacement deal={deal} className='row-start-3 col-start-2' />
        </div>


    </div>
}

export default App
