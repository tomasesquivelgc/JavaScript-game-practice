import figure from '../assets/figure.png'
import hair from '../assets/hairstyles/hair-1.png'
import jean from '../assets/bottom/jean-1.png'
import shirt from '../assets/top/t-shirt-1.png'

export default function Character() {
  return (
    <div className="flex justify-center">
      <img src={figure} alt="character" className="flex align-middle justify-center h-96" />
      <div className="absolute flex flex-col justify-center align-items-center">
        <img src={hair} alt="hair" className="h-14" />
        <img src={shirt} alt="shirt" className="h-40" />
        <img src={jean} alt="jean" className="h-40" />
      </div>
    </div>
  )
}