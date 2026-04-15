const EventEmitter = require("events");
const chalk = require("chalk");

const emitter = new EventEmitter();

// SESSION
emitter.on("sessionStarted", (user) => {
  console.log(chalk.blue(`Logged in as ${user.name}`));
});

// PROFILE
emitter.on("profileCreated", (user) => {
  console.log(chalk.green(`Profile created successfully: ${user.name}`));
});

emitter.on("profileUpdated", () => {
  console.log(chalk.yellow("Profile updated successfully"));
});

// CONNECTIONS
emitter.on("connectionRequestSent", () => {
  console.log(chalk.green("Connection request sent"));
});

emitter.on("connectionAccepted", () => {
  console.log(chalk.green("Connection accepted"));
});

emitter.on("connectionRejected", () => {
  console.log(chalk.yellow("Connection rejected"));
});

// ERROR
emitter.on("operationFailed", (msg) => {
  console.log(chalk.red(`Error: ${msg}`));
});

// Posts
emitter.on("postCreated", () => {
  console.log(chalk.green("Post created successfully"));
});

emitter.on("postLiked", () => {
  console.log(chalk.blue("Post liked"));
});

emitter.on("commentAdded", () => {
  console.log(chalk.yellow("Comment added"));
});

module.exports = emitter;