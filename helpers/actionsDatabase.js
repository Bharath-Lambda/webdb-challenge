const knex = require('knex')
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)

module.exports = {
  get: (id) => {
    return db('Actions')
      .where({
        id: id
      })
  },

  getActionsforProject: (projectId) => {
    return db('Actions')
      .select('id', 'Description', 'Notes', 'Completed')
      .where({
        ProjectID: projectId
      })
  },

  post: (action) => {
    return db('Actions')
      .insert(action)
  }
}