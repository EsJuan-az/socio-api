const {
  users,
  createUser,
  user,
  updateUser,
  deleteUser,
} = require('./user.resolver');

module.exports = {
  Query: {
    books: () => [
      'Cien años de soledad',
      'Skibidi sigma ponmi digital fortnite chamba',
      'Pedro páramo',
      'Black Mirror - Loch Henry',
    ],
    users,
    user,
  },
  Mutation: {
    createUser,
    updateUser,
    deleteUser,
  },
};
