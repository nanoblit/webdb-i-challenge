const db = require('./dbConfig');

const getAllAccounts = () => db('accounts');

const getAccountByID = id => db('accounts')
  .where({ id })
  .first();

const createNewAccount = ({ name, budget }) => db('accounts').insert({ name, budget });

const updateAccountByID = (id, changes) => db('accounts')
  .where({ id })
  .update(changes);

const deleteAccountByID = id => db('accounts')
  .where({ id })
  .del();

module.exports = {
  getAllAccounts,
  getAccountByID,
  createNewAccount,
  updateAccountByID,
  deleteAccountByID,
};
