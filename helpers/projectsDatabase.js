const knex = require('knex')
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)

module.exports = {
  get: (id) => {
    return db('Projects')
      .where({
        id: id
      })
  },

  post: (project) => {
    return db('Projects')
      .insert(project)
  }
}