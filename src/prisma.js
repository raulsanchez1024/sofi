import { Prisma } from 'prisma-binding';

// npm run get-schema was giving me problem. I deleted
// package-lock.json and node_modules and ran `npm i`.

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466',
});

// prisma.query.users(null, '{ id name }').then(data => {
//   console.log(JSON.stringify(data, undefined, 2));
// });