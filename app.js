const express = require('express')
const db = require('sequelize-connect')

async function connect() {
  await db.connect('lifts_scheme', 'root', '')
}

(async function () {
  await connect()
  const app = express()

  app.listen(3000, function () {
    console.log('Appellifts listening on port 3000')

})
