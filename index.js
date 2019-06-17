const express = require('express');
const knex = require('knex');

const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

const server = express();

server.use(express.json());

server.post('/projects', (req, res) => {
    const project = req.body;

    db.insert(project)
      .into('Projects')
      .then(ids => {
        res.status(201).json(ids[0]);
      })
      .catch(err => {
        res.status(500).json(err)
      });
});

server.post('/actions', (req, res) => {
  const project = req.body;

  db.insert(action)
    .into('Actions')
    .then(ids => {
      res.status(201).json(ids[0]);
    })
    .catch(err => {
      res.status(500).json(err)
    });
});

server.listen(8000, () => console.log('Running on port 8000'));