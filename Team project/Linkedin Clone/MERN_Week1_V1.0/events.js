const EventEmitter = require("events");
const chalk = require("chalk");

const emitter = new EventEmitter();

emitter.on("sessionStarted", (user) => {
  console.log(chalk.blue(`Logged in as ${user.name}`));
});
emitter.on("profileCreated", (user) => {
  console.log(chalk.green(`Profile created successfully: ${user.name}`));
});

emitter.on("profileUpdated", () => {
  console.log(chalk.yellow("Profile updated successfully"));
});
emitter.on("operationFailed", (msg) => {
  console.log(chalk.red(`Error: ${msg}`));
});

module.exports = emitter;