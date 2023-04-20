import { pool } from "../database.js";

export async function checkUser(email, password) {
  const [rows] = await pool.query(
    `SELECT * FROM user WHERE email = ? AND password = ?`,
    [email, password]
  );
  return rows[0];
}

export async function createUser(email, password) {
  const [result] = await pool.query(
    `INSERT INTO user (email, password) VALUE (?, ?)`,
    [email, password]
  );
  const id = result.insertId;
  return id;
}
