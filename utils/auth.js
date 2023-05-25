const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
      res.redirect('/loginorsignup');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;