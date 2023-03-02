import './App.css'
import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'
import characters from './data.js'

function App () {
  return (

      <div className='App' >
        <div className='Nav'>
          <Nav

          />
        </div>
        <div className='Cards'>
          <Cards
            characters={characters}
          />
        </div>
        
    </div>
  )
}

export default App
