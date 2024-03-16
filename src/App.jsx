import Character from './components/Character';
import ChangeButton from './components/ChangeButton';
import { topsData, bottomsData, hairStylesData } from './data/clothingData';
import StatsScreen from './components/StatsScreen';
import './App.css';

function App() {
  return (
    <div>
      <h1 className="bg-red-50">The content will go here</h1>
      <Character />
      <div className="tops">
        <h2>Tops:</h2>
        {topsData.map((top) => (
          <ChangeButton key={top.id} clothe={top} type="top" />
        ))}
      </div>

      <div className="bottoms">
        <h2>Bottoms:</h2>
        {bottomsData.map((bottom) => (
          <ChangeButton key={bottom.id} clothe={bottom} type="bottom" className="h-12" />
        ))}
      </div>

      <div className="hairStyles">
        <h2>Hair Styles:</h2>
        {hairStylesData.map((hair) => (
          <ChangeButton key={hair.id} clothe={hair} type="hair" />
        ))}
      </div>

      <StatsScreen />
    </div>
  );
}

export default App;
