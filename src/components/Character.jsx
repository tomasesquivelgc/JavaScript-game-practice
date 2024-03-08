import React from 'react';
import { useSelector } from 'react-redux';

export default function Character() {
  const top = useSelector((state) => state.clothes.clothes.top);
  const bottom = useSelector((state) => state.clothes.clothes.bottom);

  return (
    <div className="flex justify-center">
      <img src="/figure.png" alt="character" className="flex align-middle justify-center h-96" />
      <div className="absolute flex flex-col justify-center items-center">
        <img src="/hairstyles/hair-1.png" alt="hair" className="h-14" />
        <img src={top} alt="shirt" className="h-32" />
        <img src={bottom} alt="jean" className=" h-52" />
      </div>
    </div>
  )
}