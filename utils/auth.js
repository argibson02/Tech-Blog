const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    next();
  }
};

const areLogged = (req, res, next) => {
  if (req.session.loggedIn) {
    res.redirect('/');
  } else {
    next();
  }
};

module.exports = { withAuth, areLogged }
