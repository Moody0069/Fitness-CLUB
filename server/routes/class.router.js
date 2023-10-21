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

    const query = 'SELECT * FROM classes';
  
    pool.query(query)
      .then(result => {
        res.status(200).json(result.rows);
      })
      .catch(error => {
        console.error('Error fetching classes:', error);
        res.status(500).json({ message: 'Error fetching classes' });
      });
  });

  router.get('/attendance/:id', (req, res) => {
    // console.log('API Request Received: /api/classes');
  
      const query = `
      select * from classes
      join attendance on attendance.classid = classes.classid
      where attendance.userid = $1;
      `;
    
      pool.query(query, [req.params.id])
        .then(result => {
          res.status(200).json(result.rows);
        })
        .catch(error => {
          console.error('Error fetching classes:', error);
          res.status(500).json({ message: 'Error fetching classes' });
        });
    });


  router.post('/attendance', (req, res) => {
    const {  classid, userid, date } = req.body;
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
  
// delete

// router.delete('/class/:id', (req, res) => {

  // const classId = req.params.id;
  router.delete('/class/:classId', (req, res) => {
    const classId = req.params.classId;
// console.log('received delete request for class with ID:', classId );
  const query = 'DELETE FROM Classes WHERE ClassID = $1';

  pool.query(query, [classId])
    .then(() => {
      res.sendStatus(204);
    })
    .catch(error => {
      console.error('Error deleting class:', error);
      res.status(500).json({ message: 'Error deleting class' });
    });
});

  


  module.exports = router;
  
