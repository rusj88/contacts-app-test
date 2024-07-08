import { useState } from "react";
import { addGroup } from "../../slices/groupsSlice";
import { useDispatch } from "react-redux";
import ConfirmButton from "../ConfirmButton/ConfirmButton";
import CancelButton from "../CancelButton/CancelButton";
import "./AddGroupForm.css";

const AddGroupForm = ({ parentId, onCancel }) => {
  const [groupTitle, setGroupTitle] = useState("");
  const dispatch = useDispatch();

  const handleCreateGroup = (e) => {
    e.preventDefault();
    if (!groupTitle.trim()) {
      return;
    }
    const newGroup = {
      id: Date.now(),
      parentGroup: parentId,
      title: groupTitle,
    };
    dispatch(addGroup(newGroup));
    setGroupTitle("");
    onCancel();
  };

  return (
    <form>
      <div className="add-group-form">
        <input
          type="text"
          placeholder="Группа"
          value={groupTitle}
          onChange={(e) => setGroupTitle(e.target.value)}
        />
        <ConfirmButton onClick={handleCreateGroup} size={18} />
        <CancelButton onClick={onCancel} size={18} />
      </div>
    </form>
  );
};

export default AddGroupForm;
