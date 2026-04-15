const eventEmitter = require("./events");

const users = [];
let currentUser = null;

function createProfile(name, headline) {
  return new Promise((resolve, reject) => {

    if (!name) return reject("Name is required");

    const exists = users.find(u => u.name === name);
    if (exists) return reject("User already exists");

    const user = {
      id: users.length + 1,
      name,
      headline,
      skills: [],
      education: [],
      experience: [],
      connections: [],
      requests: [] 
    };

    users.push(user);
    eventEmitter.emit("profileCreated", user);
    resolve(user);
  });
}

function loginUser(name) {
  return new Promise((resolve, reject) => {

    const user = users.find(u => u.name === name);

    if (!user) return reject("User not found");

    currentUser = user;
    eventEmitter.emit("sessionStarted", user);
    resolve(user);
  });
}

function getCurrentUser() {
  return currentUser;
}

function getUserById(id) {
  return users.find(u => u.id === id);
}

module.exports = {
  users,
  createProfile,
  loginUser,
  getCurrentUser,
  getUserById
};