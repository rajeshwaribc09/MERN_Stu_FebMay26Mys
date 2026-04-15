const chalk = require("chalk");
const { getCurrentUser, users } = require("./user");
const eventEmitter = require("./events");

const posts = [];

function createPost(content) {
  const user = getCurrentUser();

  if (!user) {
    eventEmitter.emit("operationFailed", "Login required");
    return;
  }

  const post = {
    id: posts.length + 1,
    authorId: user.id,
    content,
    timestamp: new Date(),
    likes: [],
    comments: []
  };

  posts.push(post);
  eventEmitter.emit("postCreated");
}

function getAllPosts() {
  return posts;
}

function likePost(postId) {
  const user = getCurrentUser();
  const post = posts.find(p => p.id === Number(postId));

  if (!post) {
    eventEmitter.emit("operationFailed", "Post not found");
    return;
  }

  if (!post.likes.includes(user.id)) {
    post.likes.push(user.id);
  }

  eventEmitter.emit("postLiked");
}

function commentOnPost(postId, text) {
  const user = getCurrentUser();
  const post = posts.find(p => p.id === Number(postId));

  if (!post) {
    eventEmitter.emit("operationFailed", "Post not found");
    return;
  }

  post.comments.push({
    userId: user.id,
    text
  });

  eventEmitter.emit("commentAdded");
}

module.exports = {
  createPost,
  getAllPosts,
  likePost,
  commentOnPost
};