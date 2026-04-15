const chalk = require("chalk");

let attempts = 0;
const MAX_ATTEMPTS = 3;

function validatePost(content, callback) {
  if (!content || content.trim() === "") {
    attempts++;
    console.log(chalk.red("Post cannot be empty"));

    if (attempts >= MAX_ATTEMPTS) {
      return callback("Max attempts reached");
    }

    return callback("retry");
  }

  attempts = 0;
  callback(null, content);
}

function validatePostId(id, posts, callback) {
  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    attempts++;
    console.log(chalk.red("Invalid Post ID"));

    if (attempts >= MAX_ATTEMPTS) {
      return callback("Max attempts reached");
    }

    return callback("retry");
  }

  attempts = 0;
  callback(null, post);
}

module.exports = {
  validatePost,
  validatePostId
};