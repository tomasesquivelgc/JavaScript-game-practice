import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setTop, setBottom } from '../redux/slices/clothesSlice';

export default function ChangeButton({ clothe, type }) {
  const dispatch = useDispatch();

  const handleClotheChange = () => {
    if (type === 'top') {
      dispatch(setTop(clothe.img));
    } else if (type === 'bottom') {
      dispatch(setBottom(clothe.img));
    }
  };

  return (
    <button
      onClick={handleClotheChange}
      className=" text-white font-bold py-2 px-4 rounded h-4"
      type="button"
    >
      <img src={clothe.img} alt={`${type} ${clothe.id}`} className="h-20" />
    </button>
  );
}

ChangeButton.propTypes = {
  clothe: PropTypes.shape({
    img: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  type: PropTypes.oneOf(['top', 'bottom']).isRequired,
};
