import Card from './components/Card'
import './App.css'

import CardPlacement from './components/CardPlacement'

function App() {


    return <div className='h-screen overflow-hidden gap-5' id='game'>
        <div className="grid grid-cols-3 grid-rows-3 place-items-center">
            <CardPlacement className='col-start-2' />
            <CardPlacement className='col-start-1' />
            <CardPlacement className='col-start-3 ' />
            <CardPlacement className='row-start-3 col-start-2' />
        </div>


    </div>
}

export default App
