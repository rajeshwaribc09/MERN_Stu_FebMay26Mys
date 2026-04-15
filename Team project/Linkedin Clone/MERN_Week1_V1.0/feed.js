// modules/feed.js
const { getAllPosts } = require("./posts");
const { users } = require("./user");

function showFeed() {
    const posts = getAllPosts();

    console.log("\n===== FEED =====");

    if (posts.length === 0) {
        console.log("No posts available");
        return;
    }

    for (let i = posts.length - 1; i >= 0; i--) {
        const post = posts[i];

        const author = users.find(user => user.id === post.authorId);

        console.log("Post ID:", post.id);
        console.log("User:", author ? author.name : "Unknown User");
        console.log("Content:", post.content);
        console.log("Likes:", post.likes.length);
        console.log("Comments:", post.comments.length);
        console.log("--------------------");
    }
}

module.exports = {
    showFeed
};