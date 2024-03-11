import { useSelector } from 'react-redux';

export default function Character() {
  const top = useSelector((state) => state.clothes.clothes.top);
  const bottom = useSelector((state) => state.clothes.clothes.bottom);

  return (
    <div className="flex justify-center">
      <img src="/Lila.png" alt="character" className="flex align-middle justify-center h-96" />
      <div className="absolute flex flex-col justify-center items-center">
        <img src="/hairstyles/hair-1.png" alt="hair" className="h-12" />
        <img src={top.img} alt="shirt" className="h-28" />
        <img src={bottom.img} alt="jean" className="h-32" />
      </div>
    </div>
  );
}
