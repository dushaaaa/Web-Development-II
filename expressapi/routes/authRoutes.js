const router = require("express").Router();
const jwt = require("jsonwebtoken");

const users = [
  {
    email: "test@email.com",
    password: "12345678",
  },
];
router.post("/register", async (request, response) => {
  const newUser = {
    email: request.body.email,
    password: request.body.password,
  };

  users.push(newUser);

  response.status(201).json({
    message: "Account registration successful.",
  });
});

router.post("/login", async (request, response) => {
  const user = users.find((obj) => obj.email === request.body.email);

  if (!user) return response.status(404).json({ message: "User not found." });

  const isPasswordValid = user.password === request.body.password;

  if (!isPasswordValid)
    return response.status(400).json({ message: "Invalid Password." });

  const token = jwt.sign({ email: user.email }, "12345678", {
    expiresIn: 86400,
  });

  response.status(200).json({
    user,
    accessToken: token,
  });
});

module.exports = router;


/*
// Importing the Express.js router and jsonwebtoken library
const router = require("express").Router();
const jwt = require("jsonwebtoken");

// Array to store user data (for demonstration purposes)
const users = [
  {
    email: "test@email.com",
    password: "12345678",
  },
];

// Route for user registration ("/register")
router.post("/register", async (request, response) => {
  // Creating a new user object with email and password from the request body
  const newUser = {
    email: request.body.email,
    password: request.body.password,
  };

  // Adding the new user to the users array
  users.push(newUser);

  // Sending a 201 Created response with a JSON message
  response.status(201).json({
    message: "Account registration successful.",
  });
});

// Route for user login ("/login")
router.post("/login", async (request, response) => {
  // Finding a user with the provided email in the users array
  const user = users.find((obj) => obj.email === request.body.email);

  // If the user is not found, send a 404 Not Found response
  if (!user) return response.status(404).json({ message: "User not found." });

  // Checking if the provided password matches the user's password
  const isPasswordValid = user.password === request.body.password;

  // If the password is invalid, send a 400 Bad Request response
  if (!isPasswordValid)
    return response.status(400).json({ message: "Invalid Password." });

  // Generating a JWT for the user's email with a specified expiration time
  const token = jwt.sign({ email: user.email }, "12345678", {
    expiresIn: 86400, // Token expiration time set to 24 hours
  });

  // Sending a 200 OK response with the user object and the generated token
  response.status(200).json({
    user,
    accessToken: token,
  });
});

// Exporting the router
module.exports = router;


*/