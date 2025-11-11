const express = require('express')
const logger = require('morgan')
const path = require('path')
const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.json())  // to parse JSON body
server.use(logger('dev'))

const publicServedFilesPath = path.join(__dirname, 'public')
server.use(express.static(publicServedFilesPath))

server.post('/ITC505/lab-7/index.html', (req, res) => {
  const { name, adjective, place, animal, verb } = req.body

  if (!name || !adjective || !place || !animal || !verb) {
    res.json({ error: 'Please fill in all the fields.' })
    return
  }

  const story = `One day, ${name} went to ${place}. There they met a ${adjective} ${animal} that loved to ${verb} all day long!`
  res.json({ story })
})

server.get('/do_a_random', (req, res) => {
  res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`)
})

let port = 80
if (process.argv[2] === 'local') port = 8080
server.listen(port, () => console.log(`Ready on localhost:${port}!`))
