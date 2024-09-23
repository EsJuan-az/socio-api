const {
  businesses,
  business,
  getBusinessByOwnerId,
  deleteBusiness,
  updateBusiness,
  createBusiness,
} = require('./business.resolver');
const {
  users,
  createUser,
  user,
  updateUser,
  deleteUser,
  getUserByAuth0,
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
    getUserByAuth0,
    businesses,
    business,
    getBusinessByOwnerId,
  },
  Mutation: {
    createUser,
    updateUser,
    deleteUser,
    createBusiness,
    updateBusiness,
    deleteBusiness,
  },
};
