const { Comment } = require("../models");

const commentData = [
  {
    user_id: 2,
    blogpost_id: 1,
    content: 'This was a great blogpost!'
  },
  {
    user_id: 3,
    blogpost_id: 1,
    content: 'Great read!'
  },
  {
    user_id: 3,
    blogpost_id: 2,
    content: 'I enjoyed this post a lot!'
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
