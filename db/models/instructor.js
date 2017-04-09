'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

module.exports = db.define('instructor', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})
