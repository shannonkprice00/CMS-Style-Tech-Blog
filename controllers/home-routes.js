const router = require("express").Router();
const { BlogPost, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// GET all blogposts for homepage
router.get("/", async (req, res) => {
  try {
    const dbBlogPostData = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: {
            exclude: ["password"],
          },
        },
      ],
    });

    const blogPosts = dbBlogPostData.map((blogPost) =>
      blogPost.get({ plain: true })
    );

    res.render("homepage", {
      blogPosts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one blog
router.get("/blogpost/:id", withAuth, async (req, res) => {
  try {
    const dbBlogPostData = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: {
            exclude: ["password"],
          },
        },
        { model: Comment,
        include: [{
          model: User,
          attributes: ['username']
        }] },
      ],
    });
    const blogPost = dbBlogPostData.get({ plain: true });

    res.render("blogpost", { blogPost, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/blogpost/:id/addcomment", withAuth, async (req, res) => {
  const blogPostId = req.params.id;
  res.render("addcomment", { blogPostId, loggedIn: req.session.loggedIn });
});

// create comment
router.post("/blogpost/:id/addcomment", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      user_id: req.session.user_id,
      blogpost_id: req.params.id,
      content: req.body.content,
    });
    const dbBlogPostData = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: {
            exclude: ["password"],
          },
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["username"],
            },
          ],
        },
      ],
    });

    const blogPost = dbBlogPostData.get({ plain: true });

    console.log(blogPost);

    res.render("blogpost", { blogPost, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
