const { notFound } = require('@hapi/boom');
const { db } = require('../../db/sequelize');
const { Business } = db.models;
/**
 * BusinessService: Class to handle model requests through
 * static methods.
 */
class BusinessService {
  static findAll(offset = 0, limit = 10) {
    return Business.findAll({
      where: {
        active: true,
      },
      offset,
      limit,
    });
  }
  static async findOne(id) {
    const result = await Business.findOne({
      where: {
        id,
        active: true,
      },
    });
    if (!result) {
      throw notFound('business not found');
    }
    return result;
  }
  static async findByOwnerId(ownerId) {
    const result = await Business.find({
      where: {
        ownerId,
        active: true,
      },
    });
    return result;
  }
  static create(dto) {
    return Business.create(dto);
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
module.exports = { BusinessService };
