const db = require("../db");

const createService = async (req, res) => {
  const { title, description, category, location, phone } = req.body;
  const userId = req.body.id; // added by auth middleware

  try {
    const result = await db.query(
      `INSERT INTO services (user_id, title, description, category, location, phone)
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
        `,
      [userId, title, description, category, location, phone]
    );

    res.status(201).json({ service: result.rows[0] });
  } catch (error) {
    console.error("Error creating service:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createService };
