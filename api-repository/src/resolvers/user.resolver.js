const { UserService } = require('../services/user.service');

module.exports = {
  async users(_, { dto }) {
    let offset = dto?.offset;
    let limit = dto?.limit;
    const result = await UserService.findAll(offset, limit);
    return result;
  },
  async user(_, { id }) {
    const result = await UserService.findOne(id);
    return result;
  },
  async createUser(_, { dto }) {
    dto.pictureUrl = dto.pictureUrl.href;
    const result = await UserService.create(dto);
    return result;
  },
  async updateUser(_, { id, dto }) {
    dto.pictureUrl = dto.pictureUrl?.href;
    const result = await UserService.update(id, dto);
    return result;
  },
  async deleteUser(_, { id }) {
    const result = await UserService.delete(id);
    return result;
  },
};
