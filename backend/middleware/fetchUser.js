const jwt = require("jsonwebtoken");

const JWT_SECRET = "JWT_SECRET_FOR_NIMBUS_NOTES";

const fetchUser = (req, res, next) => {
  const token = req.header("authToken");
  if (!token) {
    return res.status(401).send({ error: "Authenticate using a valid token!" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    return res.status(401).send({ error: "Authenticate using a valid token!" });
  }
};

module.exports = fetchUser;
