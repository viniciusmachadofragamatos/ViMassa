// models/models.js
import { pool } from "../config/db.js";

export const ClientModel = {
  async getAll() {
    const [rows] = await pool.query("SELECT * FROM clients");
    return rows;
  },

  async getById(id) {
    const [rows] = await pool.query("SELECT * FROM clients WHERE id = ?", [id]);
    return rows[0] || null;
  },

  async create({ nome, email, telefone }) {
    const [result] = await pool.query(
      "INSERT INTO clients (nome, email, telefone) VALUES (?, ?, ?)",
      [nome, email, telefone]
    );

    // retorna o cliente criado
    return {
      id: result.insertId,
      nome,
      email,
      telefone,
    };
  },

  async update(id, { nome, email, telefone }) {
    const [result] = await pool.query(
      "UPDATE clients SET nome = ?, email = ?, telefone = ? WHERE id = ?",
      [nome, email, telefone, id]
    );

    return {
      id,
      nome,
      email,
      telefone,
      updated: result.affectedRows > 0,
    };
  },

  async delete(id) {
    const [result] = await pool.query("DELETE FROM clients WHERE id = ?", [id]);

    return {
      deleted: result.affectedRows > 0,
    };
  },
};
