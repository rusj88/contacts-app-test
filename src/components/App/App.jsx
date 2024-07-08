import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { fillGroups } from "../../slices/groupsSlice";
import { fillContacts } from "../../slices/contactsSlice";
import { groups, contacts } from "../../data/data.js";
import Menu from "../Menu/Menu";
import GroupPage from "../GroupPage/GroupPage";
import "./App.css";
import { selectCombinedGroupsAndContacts } from "../../selectors/selectors.js";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    new Promise((res) => {
      setTimeout(() => res(), 500);
    }).then(() => {
      dispatch(fillGroups(groups));
      dispatch(fillContacts(contacts));
      setIsLoading(false);
    });
  }, []);

  const contacts_tree = useSelector(selectCombinedGroupsAndContacts);

  return (
    <div className="wrapper">
      {isLoading ? (
        <div className="loading-screen">
          <span>Loading...</span>
        </div>
      ) : (
        <main className="main">
          <aside className="aside">
            <Menu items={contacts_tree} />
          </aside>

          <div className="content">
            <Routes>
              <Route path="/" element={<GroupPage />} />
              <Route path="/:id" element={<GroupPage />} />
            </Routes>
          </div>
        </main>
      )}
    </div>
  );
};

export default App;
