const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
    // console.log('id', req.params.id)
    // console.log('in details');
  
      const query = `  SELECT * FROM "classes" 
      WHERE classid = $1;`
    
      pool.query(query, [req.params.id])
        .then(result => {
          res.send(result.rows);
        })
        .catch(error => {
          console.error('Error fetching classes:', error);
          res.sendStatus(500);
        });
    });

    module.exports = router;