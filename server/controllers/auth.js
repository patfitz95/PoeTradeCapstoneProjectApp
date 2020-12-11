const axios = require('axios');
const bcrypt = require('bcrypt');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const pool = require('../sql/connection');
const { handleSQLError } = require('../sql/error');

const saltRounds = 10;
const signup = (req, res) => {
  const { username, password } = req.body;
  console.log('username password', password);
  let sql =
    'INSERT INTO users (username, password) VALUES (?, ?)';

  bcrypt.hash(password, saltRounds, function (err, hash) {
    console.log('hash:', hash);
    sql = mysql.format(sql, [username, hash]);

    pool.query(sql, (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY')
          return res.status(409).send('Username is taken');
        return handleSQLError(res, err);
      }
      return res.send('Sign-up successful');
    });
  });
};


const login = (req, res) => {
  const { username, password } = req.body;
  let sql = "SELECT * FROM users WHERE userName = ?";
  sql = mysql.format(sql, [username]);

  pool.query(sql, (err, rows) => {
    if (err) {
      return handleSQLError(res, err);
    }
    if (!rows.length) {
      return res.status(404).send("No matching users");
    }
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    if (!rows.length) return res.status(404).send('No matching users');

    const hash = rows[0].password;
    bcrypt.compare(password, hash).then((result) => {
      if (!result) return res.status(400).send('Invalid password');

      const data = { ...rows[0] };
      data.password = 'REDACTED';

      const token = jwt.sign(data, 'secret');
      res.json({
        msg: 'Login successful',
        token,
        username : username,
      });
    });
  });
});
}

module.exports = {
  signup,
  login,
};