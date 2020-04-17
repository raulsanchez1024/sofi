/*
  * This file connects to the remote Postgres DB and the Prisma Graphql API
  *  gives us the ability to query/mutate it with JS
*/

const { Prisma } = require('prisma-binding');

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: "http://localhost:4466",
  secret: "kldjshavncsdldddawerwqa",
  debug: false,
});

module.exports = db; 