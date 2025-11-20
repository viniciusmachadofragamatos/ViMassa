import { ClientModel } from "../models/models.js";

export const ClientController = {
  async getAll(req, res) {
    try {
      const clients = await ClientModel.getAll();
      res.json(clients);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const client = await ClientModel.getById(req.params.id);
      if (!client) return res.status(404).json({ error: "Cliente não encontrado" });
      res.json(client);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async create(req, res) {
    try {
      const { nome, email, telefone } = req.body;
      const newClient = await ClientModel.create({ nome, email, telefone });
      res.status(201).json(newClient);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const { nome, email, telefone } = req.body;
      const updated = await ClientModel.update(req.params.id, { nome, email, telefone });
      res.json(updated);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async delete(req, res) {
    try {
      const result = await ClientModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
