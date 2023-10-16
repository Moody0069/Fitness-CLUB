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
  console.log('API Request Received: /api/classes');

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






  router.post('/api/sign-up', (req, res) => {
    const { classId, userId } = req.body;
  
    const query = `
      INSERT INTO Attendance (ClassID, UserID, Date, Status)
      VALUES ($1, $2, CURRENT_DATE, 'Present')
    `;
    
    // Use a database query to insert the attendance record
    pool.query(query, [classId, userId], (error, result) => {
      if (error) {
        console.error('Error recording attendance:', error);
        res.status(500).json({ message: 'Error recording attendance' });
      } else {
        res.status(200).json({ message: 'Attendance recorded successfully' });
      }
    });
  });
  






router.post('/api/classes', (req, res) => {
    const classData = req.body; 
  
    try {
      
      const query = `
        INSERT INTO Classes (Name, Date, Time, Location, Instructor, MaxCapacity)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING ClassID
      `;
      pool.query(query, [
        classData.Name,
        classData.Date,
        classData.Time,
        classData.Location,
        classData.Instructor,
        classData.MaxCapacity
      ]).then(result => {
        const classId = result.rows[0].ClassID;
        res.status(201).json({ message: 'Class created successfully', classId });
      });
    } catch (error) {
      console.error('Error creating class:', error);
      res.status(500).json({ message: 'Class creation failed' });
    }
});

  module.exports = router;
