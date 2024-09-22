const { notFound } = require('@hapi/boom');
const { db } = require('../../db/sequelize');
const { User } = db.models;
/**
 * UserService: Class to handle model requests through
 * static methods.
 */
class UserService {
  static findAll(offset = 0, limit = 10) {
    return User.findAll({
      where: {
        active: true,
      },
      offset,
      limit,
    });
  }
  static async findOne(id) {
    const result = await User.findOne({
      where: {
        auth0Id: id,
        active: true,
      },
    });
    if (!result) {
      throw notFound('user not found');
    }
    return result;
  }
  static create(dto) {
    return User.create(dto);
  }
  static async update(id, dto) {
    const entity = await this.findOne(id);
    const result = await entity.update(dto);
    return result;
  }
  static delete(id) {
    const result = this.update(id, { active: false });
    return result;
  }
}
module.exports = { UserService };
