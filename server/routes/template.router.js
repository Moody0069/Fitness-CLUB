const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



router.get('/', (req, res) => {
  const query = 'SELECT * FROM classes';
  pool.query(query)
    .then(result => {
      console.log('Classes data:', result.rows);
      res.send(result.rows);
    })
    .catch(error => {
      console.error('Error fetching classes:', error);
      res.sendStatus(500);
    });
});


router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

 
  const query = 'INSERT INTO users (username, password) VALUES ($1, $2)';
  pool.query(query, [username, password])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.error('User registration failed:', error);
      res.sendStatus(500);
    });
});



module.exports = router;


/**
 * GET route template
 */
// router.get('/', (req, res) => {
//   // GET route code here
// });

// /**
//  * POST route template
//  */
// router.post('/', (req, res) => {
//   // POST route code here
// });

// router.get('/', (req, res) => {
//   const query = 'SELECT * FROM classes';
//   pool.query(query)
//     .then(result => {
//       res.send(result.rows);
//     })
//     .catch(error => {
//       console.error('Error fetching classes:', error);
//       res.sendStatus(500);
//     });
// });