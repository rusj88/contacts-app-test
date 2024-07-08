import { useState } from "react";
import { addContact } from "../../slices/contactsSlice";
import { useDispatch } from "react-redux";
import ConfirmButton from "../ConfirmButton/ConfirmButton";
import CancelButton from "../CancelButton/CancelButton";
import "./AddContactForm.css";

const AddContactForm = ({ parentId, onCancel }) => {
  const [contactName, setContactName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleCreateContact = (e) => {
    e.preventDefault();
    if (!contactName.trim()) {
      return;
    }
    const newContact = {
      id: Date.now(),
      name: contactName,
      number: [number],
      group: parentId,
    };
    if (number.trim()) {
      newContact.number = [number];
    }
    dispatch(addContact(newContact));
    setContactName("");
    setNumber("");
    onCancel();
  };

  return (
    <form>
      <div className="add-contact-form">
        <div className="input-container">
          <input
            type="text"
            placeholder="Имя"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Номер"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>
        <ConfirmButton type="button" onClick={handleCreateContact} size={18} />
        <CancelButton type="button" onClick={onCancel} size={18} />
      </div>
    </form>
  );
};

export default AddContactForm;
