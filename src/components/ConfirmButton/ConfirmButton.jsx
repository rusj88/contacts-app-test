import { MdOutlineDownloadDone } from "react-icons/md";
import "./ConfirmButton.css";

const ConfirmButton = ({ onClick, disabled = false, size }) => {
  return (
    <button
      type="button"
      className="icon-button"
      onClick={onClick}
      disabled={disabled}
    >
      <MdOutlineDownloadDone size={size} />
    </button>
  );
};

export default ConfirmButton;
