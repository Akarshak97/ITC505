// server.js
const express = require('express')
const logger = require('morgan')
const path = require('path')

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(logger('dev'))

// Serve your static files (including ITC505/lab-7/index.html)
const publicServedFilesPath = path.join(__dirname, 'public')
server.use(express.static(publicServedFilesPath))

// Helper to render the page HTML with optional values + story
function renderMadLibPage(values = {}, madLibText = '', errorMsg = '') {
  const {
    name = '',
    adjective = '',
    noun = '',
    place = '',
    animal = '',
    verb = ''
  } = values

  const esc = (str) =>
    String(str || '').replace(/&/g, '&amp;')
                     .replace(/</g, '&lt;')
                     .replace(/>/g, '&gt;')
                     .replace(/"/g, '&quot;')
                     .replace(/'/g, '&#39;')

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Lab 7 - Mad Lib</title>
  <style>
    * {
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
    }

    body {
      margin: 0;
      padding: 0;
      background: #f2f5fb;
      color: #222;
    }

    header {
      background: #0b3d91;
      color: #fff;
      padding: 20px;
      text-align: center;
    }

    header h1 {
      margin: 0 0 5px 0;
    }

    header p {
      margin: 0;
      font-size: 0.95rem;
    }

    main {
      max-width: 800px;
      margin: 20px auto 40px auto;
      padding: 0 15px;
    }

    .form-section,
    .result-section,
    .addendum {
      background: #ffffff;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    }

    .form-section h2,
    .result-section h2,
    .addendum h2 {
      margin-top: 0;
      color: #0b3d91;
    }

    .form-group {
      margin-bottom: 15px;
    }

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }

    input[type="text"] {
      width: 100%;
      padding: 8px 10px;
      border-radius: 4px;
      border: 1px solid #ccc;
    }

    button[type="submit"] {
      background: #0b3d91;
      color: #fff;
      border: none;
      padding: 10px 18px;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
    }

    button[type="submit"]:hover {
      opacity: 0.9;
    }

    .result-section p {
      line-height: 1.6;
    }

    .error {
      color: #b00020;
      font-weight: bold;
      margin-bottom: 10px;
    }

    footer {
      text-align: center;
      padding: 10px 0 20px 0;
      font-size: 0.85rem;
      color: #555;
    }
  </style>
</head>
<body>
  <header>
    <h1>Lab 7: Mad Lib Form</h1>
    <p>Fill in the blanks to generate your custom story!</p>
  </header>

  <main>
    <section class="form-section">
      <h2>Mad Lib Form</h2>

      ${errorMsg ? `<p class="error">${esc(errorMsg)}</p>` : ''}

      <form action="/ITC505/lab-7/index.html" method="POST">
        <div class="form-group">
          <label for="name">Name (person's name):</label>
          <input type="text" id="name" name="name" value="${esc(name)}" required>
        </div>

        <div class="form-group">
          <label for="adjective">Adjective:</label>
          <input type="text" id="adjective" name="adjective" value="${esc(adjective)}" required>
        </div>

        <div class="form-group">
          <label for="noun">Noun (object):</label>
          <input type="text" id="noun" name="noun" value="${esc(noun)}" required>
        </div>

        <div class="form-group">
          <label for="place">Place:</label>
          <input type="text" id="place" name="place" value="${esc(place)}" required>
        </div>

        <div class="form-group">
          <label for="animal">Plural Noun (animals / things):</label>
          <input type="text" id="animal" name="animal" value="${esc(animal)}" required>
        </div>

        <div class="form-group">
          <label for="verb">Verb (action word):</label>
          <input type="text" id="verb" name="verb" value="${esc(verb)}" required>
        </div>

        <button type="submit">Go Mad!</button>
      </form>
    </section>

    ${
      madLibText
        ? `
    <section class="result-section">
      <h2>Your Mad Lib Story</h2>
      <p>${madLibText}</p>
    </section>
    `
        : ''
    }

    <section class="addendum">
      <h2>Addendum</h2>
      <p>
        For this lab, I used an ExpressJS back-end to dynamically construct the
        Mad Lib page. The form submits using the POST method to the same URL
        it is served from (<code>/ITC505/lab-7/index.html</code>). The server reads
        the form fields from <code>req.body</code>, builds a custom story using
        string interpolation, and then sends back a complete HTML page with
        the generated Mad Lib displayed below the form. This demonstrates
        back-end JavaScript for dynamic page generation while keeping the URL
        consistent for both GET and POST requests.
      </p>
    </section>
  </main>

  <footer>
    <p>Last updated: <span id="lastModified"></span></p>
  </footer>

  <script type="text/javascript">
    var x = document.lastModified;
    document.getElementById('lastModified').textContent = x;
  </script>
</body>
</html>
`
}

// starter random route (keep it)
server.get('/do_a_random', (req, res) => {
  res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`)
})

// GET – show the page with empty form (no story yet)
server.get('/ITC505/lab-7/index.html', (req, res) => {
  res.send(renderMadLibPage())
})

// Optional: /ITC505/lab-7 → redirect to /ITC505/lab-7/index.html
server.get('/ITC505/lab-7', (req, res) => {
  res.redirect('/ITC505/lab-7/index.html')
})

// POST – handle form, then show SAME PAGE with story under the form
server.post('/ITC505/lab-7/index.html', (req, res) => {
  const { name, adjective, noun, place, animal, verb } = req.body

  if (!name || !adjective || !noun || !place || !animal || !verb) {
    const msg = 'Please fill out ALL fields before submitting your Mad Lib.'
    res.send(renderMadLibPage(req.body, '', msg))
    return
  }

  const madLibStory = `
    One ${adjective} morning, ${name} grabbed a ${noun} and rushed to ${place}.
    On the way, ${name} saw a group of ${animal} trying to ${verb} in the middle of the road!
    Everyone stopped and laughed because it was the most ${adjective} thing they had ever seen.
  `.trim()

  // 🔥 SAME URL, same layout, story appears below the form
  res.send(renderMadLibPage(req.body, madLibStory))
})

// Port logic from assignment
let port = 80
if (process.argv[2] === 'local') {
  port = 8080
}

server.listen(port, () => console.log('Ready on localhost!'))
