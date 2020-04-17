const Query = {
  async items(parent, args, { db: { query } }, info) {
    return await query.items();
  }
};

module.exports = Query;