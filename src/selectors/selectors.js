import { createSelector } from "reselect";
import { combineGroupsAndcontacts } from "../helpers/helpers";

const selectGroups = (state) => state.groups.value;
const selectContacts = (state) => state.contacts.value;

export const selectCombinedGroupsAndContacts = createSelector(
  [selectGroups, selectContacts],
  (groups, contacts) => {
    return combineGroupsAndcontacts(groups, contacts);
  }
);

export const selectContactsByGroupId = createSelector(
  (state) => state.contacts.value,
  (state, groupId) => groupId,
  (contacts, groupId) => contacts.filter((c) => c.group == groupId)
);
