const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { User } = require("./models");

const app = express();
const PORT = 3000;

app.use(bodyParser.json()); //Middleware
app.use(cors());

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const newUser = await User.create({ email });
    res.status(201).json({ message: "Email saved", user: newUser });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to save email", details: err.message });
  }
});

app.get("/subscribe", async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.status(200).json({ message: "All users", subscribedUsers: allUsers });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to get users", details: err.message });
  }
});

// Avvia il server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
