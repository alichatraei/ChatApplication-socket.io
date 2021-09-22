const users = [];
const error = "یک یوزر دیگر ساخته شده است";
const addUser = (id, name, room) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();
  // const existUser = users.find((item) => item.name === name);
  // if (existUser) return error;
  const user = { id, name, room };
  users.push(user);
};
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) return users.splice(index, 1)[0];
};
const getUser = (id) => {
  console.log(users);
  return users.find((user) => user.id === id);
};
const getUsersInRoom = (room) => users.filter((user) => user.room === room);
module.exports = { addUser, removeUser, getUser, getUsersInRoom };
