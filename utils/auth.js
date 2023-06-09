const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
      res.redirect('/login-or-signup');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;