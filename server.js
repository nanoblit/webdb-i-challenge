const express = require('express');

const db = require('./data/db');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  try {
    const accounts = await db.getAllAccounts();
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

server.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const account = await db.getAccountByID(id);
    if (!account) {
      res.status(404).json({ error: 'Account not found' });
    } else {
      res.status(200).json(account);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

server.post('/', async (req, res) => {
  try {
    const { name, budget } = req.body;
    if (!name || budget === undefined) {
      res.status(400).json({ error: 'Nambe and budget are required' });
    } else {
      const accountIDs = await db.createNewAccount({ name, budget });
      const account = await db.getAccountByID(accountIDs[0]);
      res.status(201).json(account);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

server.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const accountUpdated = await db.updateAccountByID(id, body);
    if (!accountUpdated) {
      res.status(404).json({ error: " Account with given id doesn't exist" });
    } else {
      const account = await db.getAccountByID(id);
      res.status(200).json(account);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

server.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const accountDeleted = await db.deleteAccountByID(id);
    res.status(200).json(accountDeleted);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = server;
