import './App.css'
import Character from './components/Character'
import ChangeButton from './components/ChangeButton'

function App() {

  return (
    <div>
      <h1 className="bg-red-50">The content will go here</h1>
      <Character />
      <ChangeButton src="/top/t-shirt-1.png" />
    </div>
  )
}

export default App
