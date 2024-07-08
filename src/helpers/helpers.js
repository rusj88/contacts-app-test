export const combineGroupsAndcontacts = (groups, contacts) => {
  const groupMap = {};

  groups.forEach((group) => {
    groupMap[group.id] = { ...group, children: [] };
  });

  contacts.forEach((user) => {
    if (groupMap[user.group]) {
      groupMap[user.group].children.push(user);
    }
  });

  const result = [];

  Object.values(groupMap).forEach((group) => {
    if (group.parentGroup === null) {
      result.push(group);
    } else if (groupMap[group.parentGroup]) {
      groupMap[group.parentGroup].children.push(group);
    }
  });

  return result;
};
