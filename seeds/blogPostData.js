const { BlogPost } = require("../models");

const blogPostData = [
  {
    user_id: 1,
    title: "Why MVC Is So Important",
    content:
      "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
  },
  {
    user_id: 2,
    title: "Authentication vs. Authorization",
    content:
      "There is a difference between authentication and authorizaiton. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.",
  },
  {
    user_id: 3,
    title: "Object-Relational-Mapping",
    content:
      "I have really loved learning about ORMs. It's really simplified the way I create queries in SQL!",
  },
];

const seedBlogPosts = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPosts;
