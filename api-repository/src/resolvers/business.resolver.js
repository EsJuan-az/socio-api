const { BusinessService } = require("../services/business.service");

module.exports = {
  async businesses(_, { dto }) {
    let offset = dto?.offset;
    let limit = dto?.limit;
    const result = await BusinessService.findAll(offset, limit);
    return result;
  },
  async business(_, { id }) {
    const result = await BusinessService.findOne(id);
    return result;
  },
  async getBusinessByOwnerId(_, { ownerId }) {
    const result = await BusinessService.findByOwnerId(ownerId);
    return result;
  },
  async createBusiness(_, { dto }) {
    dto.pictureUrl = dto.pictureUrl.href;
    const result = await BusinessService.create(dto);
    return result;
  },
  async updateBusiness(_, { id, dto }) {
    dto.pictureUrl = dto.pictureUrl?.href;
    const result = await BusinessService.update(id, dto);
    return result;
  },
  async deleteBusiness(_, { id }) {
    const result = await BusinessService.delete(id);
    return result;
  },
};
