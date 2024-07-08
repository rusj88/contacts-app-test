import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AddGroupForm from "../AddGroupForm/AddGroupForm";
import AddContactForm from "../AddContactForm/AddContactForm";
import EditGroupForm from "../EditGroupForm/EditGroupForm";
import Contact from "../Contact/Contact";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { PiRowsPlusBottomBold } from "react-icons/pi";
import "./GroupPage.css";
import IconButton from "../IconButton/IconButton";
import { selectContactsByGroupId } from "../../selectors/selectors";

const GroupPage = () => {
  const [visibleForm, setVisibleForm] = useState(null);
  const { id } = useParams();
  const groupId = id || 0;
  const groups = useSelector((state) => state.groups.value);
  const contacts = useSelector((state) =>
    selectContactsByGroupId(state, groupId)
  );
  const currentGroup = groups?.find((g) => g.id == groupId);

  const toggleForm = (formType) => {
    setVisibleForm((prevForm) => (prevForm === formType ? null : formType));
  };

  const hideForm = () => {
    setVisibleForm(null);
  };

  return (
    <div>
      <div className="group-header">
        <h2>{currentGroup?.title}</h2>
        <div className="group-button-container">
          <IconButton onClick={() => toggleForm("group")}>
            <PiRowsPlusBottomBold size={24} />
          </IconButton>
          <IconButton onClick={() => toggleForm("contact")}>
            <BsFillPersonPlusFill size={24} />
          </IconButton>
          <IconButton onClick={() => toggleForm("editGroup")}>
            <CiEdit size={24} />
          </IconButton>
        </div>
      </div>
      <div>
        {visibleForm === "group" && (
          <AddGroupForm parentId={groupId} onCancel={hideForm} />
        )}
        {visibleForm === "contact" && (
          <AddContactForm parentId={groupId} onCancel={hideForm} />
        )}
        {visibleForm === "editGroup" && currentGroup && (
          <EditGroupForm
            groupId={currentGroup.id}
            initialTitle={currentGroup.title}
            onCancel={hideForm}
          />
        )}
      </div>
      <hr></hr>
      <div className="contacts-list">
        {contacts?.map((c) => (
          <Contact key={c.id} contact={c} />
        ))}
      </div>
    </div>
  );
};

export default GroupPage;
