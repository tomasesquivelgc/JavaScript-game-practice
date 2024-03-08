import React from "react";
import { useDispatch } from "react-redux";
import { setTop } from "../redux/slices/clothesSlice";

export default function ChangeButton({ src }) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(setTop(src));
      }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Change
    </button>
  );
}
