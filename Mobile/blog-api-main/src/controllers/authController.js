const jwt = require('jsonwebtoken');

const login_post = (req, res) => {
  const { user, password } = req.body;
  if (user === process.env.AUTH_USER && password === process.env.AUTH_PASS) {
    const token = jwt.sign({}, process.env.AUTH_SECRET, {
      expiresIn: 24 * 60 * 60,
    });
    res.status(200).json({ auth: true, token });
  } else {
    res.status(401).json({ auth: false });
  }
};

const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) res.status(403).json({ auth: false });
  else {
    jwt.verify(token, process.env.AUTH_SECRET, (err) => {
      if (err) res.status(500).json({ auth: false, message: err.message });

      next();
    });
  }
};

module.exports = { login_post, verifyToken };
