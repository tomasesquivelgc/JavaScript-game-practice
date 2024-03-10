import React from "react";
import { useDispatch } from "react-redux";
import { setTop, setBottom } from "../redux/slices/clothesSlice";


export default function ChangeButton({ clothe, type }) {

  const handleClotheChange = () => {
    if (type === "top") {
      dispatch(setTop(clothe.img));
    } else if(type === "bottom") {
      dispatch(setBottom(clothe.img));
    }
  }

  const dispatch = useDispatch();

  return (
    <button
      onClick={handleClotheChange}
      className=" text-white font-bold py-2 px-4 rounded h-4"
    >
      <img src={clothe.img} alt={`${type} ${clothe.id}`} className="h-20" />
    </button>
  );
}
