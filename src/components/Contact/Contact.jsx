import { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { BsTelephoneFill, BsTelephonePlusFill } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { GiCancel, GiTrashCan } from "react-icons/gi";
import { MdOutlineDownloadDone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { editContact } from "../../slices/contactsSlice";
import IconButton from "../IconButton/IconButton";
import "./Contact.css";

const Contact = ({ contact }) => {
  const { name, number, id } = contact;
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedNumbers, setEditedNumbers] = useState([...number]);

  const handleEditContact = () => {
    setIsEditing(true);
    setEditedName(name);
    setEditedNumbers([...number]);
  };

  const handleSaveContact = () => {
    dispatch(editContact({ id, name: editedName, number: editedNumbers }));
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleDeleteNumber = (index) => {
    const updatedNumbers = editedNumbers.filter((_, i) => i !== index);
    setEditedNumbers(updatedNumbers);
  };

  const handleAddNumber = () => {
    setEditedNumbers([...editedNumbers, ""]);
  };

  const handleNumberChange = (index, value) => {
    const updatedNumbers = [...editedNumbers];
    updatedNumbers[index] = value;
    setEditedNumbers(updatedNumbers);
  };

  return (
    <div className="contact-container">
      <div className="contact">
        {isEditing ? (
          <div className="contact-item">
            <IoPersonSharp />
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
          </div>
        ) : (
          <div className="contact-item">
            <IoPersonSharp />
            {name}
          </div>
        )}
        {isEditing
          ? editedNumbers.map((n, index) => (
              <div className="contact-item" key={index}>
                <BsTelephoneFill />
                <input
                  type="text"
                  value={n}
                  onChange={(e) => handleNumberChange(index, e.target.value)}
                />
                <IconButton onClick={() => handleDeleteNumber(index)}>
                  <GiTrashCan size={20} />
                </IconButton>
              </div>
            ))
          : number.map((n) => (
              <div className="contact-item" key={n}>
                <BsTelephoneFill />
                {n}
              </div>
            ))}
      </div>
      <div className="button-container">
        {isEditing ? (
          <>
            <IconButton onClick={handleAddNumber}>
              <BsTelephonePlusFill size={20} />
            </IconButton>
            <IconButton onClick={handleSaveContact}>
              <MdOutlineDownloadDone size={20} />
            </IconButton>
            <IconButton onClick={handleCancelEdit}>
              <GiCancel size={20} />
            </IconButton>
          </>
        ) : (
          <IconButton onClick={handleEditContact}>
            <CiEdit size={20} />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default Contact;
