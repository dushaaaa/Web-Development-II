const jwt = require("jsonwebtoken");

const authenticateToken = (request, response, next) => {
  const authHeader = request.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return response.status(403).json({ message: "Unauthorized access" });
  }

  jwt.verify(token, "12345678", (error, user) => {
    if (error) {
      return response.status(403).json({ message: "Unauthorized access" });
    }

    request.user = user;
    next();
  });
};

module.exports = authenticateToken;

/*
// Importing the jsonwebtoken library
const jwt = require("jsonwebtoken");

// Middleware function to authenticate JWT tokens
const authenticateToken = (request, response, next) => {
  // Extracting the JWT from the Authorization header
  const authHeader = request.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // Checking for the presence of a token
  if (!token) {
    return response.status(403).json({ message: "Unauthorized access" });
  }

  // Verifying the JWT
  jwt.verify(token, "12345678", (error, user) => {
    // If verification fails, send a 403 Forbidden response
    if (error) {
      return response.status(403).json({ message: "Unauthorized access" });
    }

    // If verification is successful, attach user information to the request
    request.user = user;
    // Call the next middleware in the chain
    next();
  });
};

// Exporting the middleware function
module.exports = authenticateToken;


*/