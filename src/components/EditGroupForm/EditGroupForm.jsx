import { useState } from "react";
import { useDispatch } from "react-redux";
import { editGroup } from "../../slices/groupsSlice";
import CancelButton from "../CancelButton/CancelButton";
import ConfirmButton from "../ConfirmButton/ConfirmButton";
import "./EditGroupForm.css";

const EditGroupForm = ({ groupId, initialTitle, onCancel }) => {
  const [title, setTitle] = useState(initialTitle);
  const dispatch = useDispatch();

  const handleSave = () => {
    if (!title.trim()) {
      return;
    }
    dispatch(editGroup({ id: groupId, title }));
    onCancel();
  };

  return (
    <div className="edit-group-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Группа"
      />
      <ConfirmButton className="icon-button" onClick={handleSave} size={18} />
      <CancelButton className="icon-button" onClick={onCancel} size={18} />
    </div>
  );
};

export default EditGroupForm;
