const express = require('express')
const logger = require('morgan')
const path = require('path')
const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(logger('dev'))

// Serve static files
const publicServedFilesPath = path.join(__dirname, 'public')
server.use(express.static(publicServedFilesPath))

// POST endpoint for Mad Lib submission
server.post('/submitMadLib', (req, res) => {
  const { name, adjective, place, animal, verb } = req.body
  if (!name || !adjective || !place || !animal || !verb) {
    return res.json({ error: 'Please fill in all the fields.' })
  }
  const story = `One day, ${name} went to ${place}. There they met a ${adjective} ${animal} that loved to ${verb} all day long!`
  res.json({ story })
})

let port = 80
if (process.argv[2] === 'local') port = 8080
server.listen(port, () => console.log(`Ready on localhost:${port}!`))
