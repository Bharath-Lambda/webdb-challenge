const express = require('express');

const db = require('../helpers/projectsDatabase');
const actionsDb = require('../helpers/actionsDatabase');

const router = express.Router();

router.post('/projects', (req, res) => {
  const project = req.body;

  db.post(project)
    .then(newProject => {
      res.status(201).json(newProject)
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.get(id)
    .then(project => {
      actionsDb.getActionsforProject(id)
        .then(actions => {
          res.json({
            'id': project.id,
            'name': project.Name,
            'description': project.Description,
            'completed': project.Completed,
            'actions': actions
          })
        })
    })
})