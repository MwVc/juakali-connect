const pool = require("../db/index");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: "User alredy exists" });
    }

    const newUser = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, password]
    );

    res.status(201).json({ user: newUser.rows[0] });
  } catch (error) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { registerUser };
