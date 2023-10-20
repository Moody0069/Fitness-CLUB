const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// router.post('/class', (req, res, next) => {
//     const username = req.body.username;
//     const password = encryptLib.encryptPassword(req.body.password);
  
//     const queryText = `INSERT INTO "class" (name, date, time, location, instructor)
//       VALUES ($1, $2, $3, $4, $5) RETURNING id`;
//     pool
//       .query(queryText, [username, password])
//       .then(() => res.sendStatus(201))
//       .catch((err) => {
//         console.log('User registration failed: ', err);
//         res.sendStatus(500);
//       });
//   });

//could the url maybe be "/" ?

router.get('/', (req, res) => {
  // console.log('API Request Received: /api/classes');

    const query = 'SELECT * FROM Classes';
  
    pool.query(query)
      .then(result => {
        res.status(200).json(result.rows);
      })
      .catch(error => {
        console.error('Error fetching classes:', error);
        res.status(500).json({ message: 'Error fetching classes' });
      });
  });


  router.post('/', (req, res) => {
    const {  classid, userid, date, status } = req.body;
    // console.log("REQ.BODY", req.body);
    // console.log ('smoke', attendanceid, classid, userid, date, status);
    const query = `
      INSERT INTO "attendance" ("classid", "userid", "date")
      VALUES ($1, $2, $3)
      
    `;
    
    pool.query(query, [classid, userid, date])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.error('Error inserting attendance:', error);
        res.status(500).json({ message: 'Error inserting attendance' });
      });
  });
  





  





  module.exports = router;
  
