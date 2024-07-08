import { GiCancel } from "react-icons/gi";
import "./CancelButton.css";

const CancelButton = ({ onClick, disabled = false, size }) => {
  return (
    <button
      type="button"
      className="icon-button"
      onClick={onClick}
      disabled={disabled}
    >
      <GiCancel size={size} />
    </button>
  );
};

export default CancelButton;
