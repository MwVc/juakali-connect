const jwt = require("jsonwebtoken");

// middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // check if header exists and starts with 'Bearer'
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.json(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1]; // extract token part after 'Bearer '

  try {
    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user info to request for downstream use
    req.user = decoded;
    console.log(decoded);
    next();
  } catch (error) {
    console.error("Token verification error:", error.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = verifyToken;
