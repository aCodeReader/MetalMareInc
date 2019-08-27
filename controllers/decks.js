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


const createDecks = (req, res) => {
    const { deckName, deckStyle, deckType, deckCount } = req.body
    let sql = "INSERT INTO decks (deck_name, deck_style, deck_type, deck_count) VALUES (?, ?, ?, ?)"
    sql = mysql.format(sql, [ deckName, deckStyle, deckType, deckCount ])
  
    pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err)
      return res.json({ newId: results.insertId });
    })
  }
  
  const updateDecksById = (req, res) => {
    const { firstName, lastName } = req.body
    let sql = "UPDATE users SET first_name = ?, last_name = ? WHERE id = ?"
    sql = mysql.format(sql, [ firstName, lastName, req.params.id ])
  
    pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err)
      return res.status(204).json();
    })
  }
  
  const deleteDeckByName = (req, res) => {
    let sql = "DELETE FROM users WHERE deck_name = ?"
    sql = mysql.format(sql, [ req.params.first_name ])
  
    pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err)
      return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
    })
  }



module.exports={
    getDecks,
    getDecksById,
    createDecks,
    updateDecksById,
    deleteDeckByName

}