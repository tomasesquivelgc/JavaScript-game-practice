import './App.css'
import Character from './components/Character'
import ChangeButton from './components/ChangeButton'
import { topsData, bottomsData } from './data/clothingData'

function App() {

  return (
    <div>
      <h1 className="bg-red-50">The content will go here</h1>
      <Character />
      <div className="tops">
        <h2>Tops:</h2>
        {topsData.map((top, index) => (
          <ChangeButton key={index} clothe={top} type="top" />
        ))}
      </div>

      <div className="bottoms">
        <h2>Bottoms:</h2>
        {bottomsData.map((bottom, index) => (
          <ChangeButton key={index} clothe={bottom} type="bottom" className="h-12"/>
        ))}
      </div>
    </div>
  )
}

export default App
