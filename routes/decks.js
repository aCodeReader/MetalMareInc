const express = require('express')
const decksController = require('../controllers/decks')
const router = express.Router()


router.get('/', decksController.getDecks)

router.get('/:id', decksController.getDecksById)

router.post('/', decksController.createDecks)

router.put('/:id',  decksController.updateDecksById)

router.delete('/:deck_name', decksController.deleteDeckByName)
// router.get('/decks/:title', decksController.getdecksByT)


module.exports = router