const express = require('express')
const bodyParser = require('body-parser')
const decksRouter = require('./routes/decks')

const app = express()
const port = process.env.PORT || 5120

app.use(bodyParser.json())
app.use('/decks', decksRouter)
app.get('/', (req, res) => {
    res.send('MetalMares Metaphysical Realm')
  })

app.listen(port, () => {
    console.log(`Metal Mare is Mixing It Up in stable ${port}!`);
   });