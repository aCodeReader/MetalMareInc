const express = require('express')
const decksController = require('../controllers/decks')
const router = express.Router()


router.get('/', decksController.getDecks)

router.get('/:id', decksController.getDecksById)


// router.get('/decks/:title', decksController.getdecksByT)


module.exports = router