const chalk = require("chalk");
const { users, getCurrentUser } = require("./user");
const eventEmitter = require("./events");

function sendConnectionRequest(targetId) {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    eventEmitter.emit("operationFailed", "Please login first");
    return;
  }

  const targetUser = users.find(u => u.id === Number(targetId));

  if (!targetUser) {
    eventEmitter.emit("operationFailed", "User not found");
    return;
  }

  targetUser.requests = targetUser.requests || [];

  targetUser.requests.push({
    from: currentUser.id,
    status: "pending"
  });

  console.log(chalk.green("Connection request sent"));
}

function viewRequests() {
  const currentUser = getCurrentUser();

  currentUser.requests = currentUser.requests || [];

  const pending = currentUser.requests.filter(r => r.status === "pending");

  if (pending.length === 0) {
    console.log(chalk.yellow("No pending requests"));
    return;
  }

  console.log(chalk.cyan("\n--- REQUESTS ---"));

  pending.forEach((req, index) => {
    const sender = users.find(u => u.id === req.from);
    console.log(`${index + 1}. ${sender.name}`);
  });
}

function handleRequest(choice, action) {
  const currentUser = getCurrentUser();

  currentUser.requests = currentUser.requests || [];

  const pending = currentUser.requests.filter(r => r.status === "pending");

  const selected = pending[choice - 1];

  if (!selected) {
    eventEmitter.emit("operationFailed", "Invalid choice");
    return;
  }

  const sender = users.find(u => u.id === selected.from);

  currentUser.connections.push(sender.id);
  sender.connections.push(currentUser.id);

  selected.status = action === "accept" ? "accepted" : "rejected";

  console.log(
    action === "accept"
      ? chalk.green("Connection accepted")
      : chalk.yellow("Connection rejected")
  );
}

function viewConnections() {
  const currentUser = getCurrentUser();

  if (currentUser.connections.length === 0) {
    console.log(chalk.yellow("No connections"));
    return;
  }

  console.log(chalk.cyan("\n--- CONNECTIONS ---"));

  currentUser.connections.forEach(id => {
    const user = users.find(u => u.id === id);
    console.log(user.name);
  });
}

module.exports = {
  sendConnectionRequest,
  viewRequests,
  handleRequest,
  viewConnections
};