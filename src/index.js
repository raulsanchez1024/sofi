require('dotenv').config();
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// TODO: user Express middleware to handle cookies (JWT)
// TODO: user Express middleware to populate user

server.start({
  cors: {
    credentials: true,
    origin: 'http://localhost:3000', // this is the frontend URL
  },
}, deets => console.log(`Server running 🔥 on port http://localhsot:${deets.port}`));

// LEFT OFF IN VIDEO 15 - https://coursehunter.net/course/full-stack-prodvinutyy-react-graphql