import './App.css'
import CeaserCipher from './js-algorithms/CeaserCipher'
import FizzBuzz from './js-algorithms/FizzBuzz'
import HarmlessRansonNote from './js-algorithms/HarmlessRansonNote'
import IsPalindrone from './js-algorithms/IsPalindrone'

function App() {


    return (
        <div className='app_contianer'>
            <FizzBuzz/>
            <HarmlessRansonNote />
            <IsPalindrone/>
            <CeaserCipher/>
        </div>
    )
}

export default App
