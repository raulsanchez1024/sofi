const Mutation = {
  async createItem(parent, args, { db: { mutation } }, info) {
    // TODO: check if user is logged in
    return await mutation.createItem({data: {...args}}, info);
  }
};

module.exports = Mutation;