const express = require('express');

const projectRouter = require('./routes/projectRoutes');
const actionRouter = require('./routes/actionRoutes');

const server = express();
server.use(express.json());

server.use('/api/projects', projectRouter)
server.use('/api/actions', actionRouter)

server.listen(8000, () => console.log('Running on port 8000'));