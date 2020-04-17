## HOW TO
1. Navigate to root and run `npm i`
2. Globally install Prisma `npm i -g prisma`
3. Give it your own Postres DB credentials in `prisma/docker-compose.yml` - I use a Heroku instance of Postgres... It's free
4. Change your cors origin in `src/index.js` to the address your frontend is running in - set to `http://localhost:3000` by default.
5. Navigate to the prisma folder and run `prisma deploy`
6. Launch Docker and in the root folder run `docker-compose up`
7. GraphQL backend will be running in `http:localhost:4000`
