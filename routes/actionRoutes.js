const express = require('express');

const db = require('../helpers/actionsDatabase');

const router = express.Router();

router.post('/actions', (req, res) => {
  const action = req.body;

  db.post(action)
    .then(newAction => {
      res.status(201).json(newAction)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})