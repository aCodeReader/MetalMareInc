const mysql = require('mysql')
const pool = require('../sql/connection.js')
const { handleSQLError } = require('../sql/error')


const getDecks = (req, res) => {
    pool.query("SELECT * FROM decks LIMIT 10", (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
} 


const getDecksById = (req, res) => {
    pool.query(`SELECT * FROM decks WHERE id = ${req.params.id} LIMIT 10`, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
} 
module.exports={
    getDecks,
    getDecksById
}