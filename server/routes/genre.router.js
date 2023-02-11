const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const query =`SELECT * FROM "genres" JOIN "movies_genres" 
                ON "genres"."id" = "movies_genres"."genres_id" 
                WHERE "movies_genres"."movie_id"=$1`;
  pool.query(query)
   .then( result => {
    res.send(result.rows);
   })
   .catch(error => {
    console.log('ERROR IN GENRES-GET', error);
    res.sendStatus(500)
   })
  
});

// GET FOR SPECIFIC MOVIE ID 
router.get('/:movie_id', (req, res) => {
  const movieId = req.params.movie_id;
  console.log('movie ID for genre', movieId);
  const queryText = `SELECT "name" FROM "movies"
  JOIN "movies_genres" ON "movies"."id" = "movies_genres"."movie_id"
  JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id"
  WHERE "movies"."id" = $1;`;
  pool.query(queryText, [movieId]).then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('ERROR in specfic ID GET', error);
      res.sendStatus(500);
    });
});
module.exports = router;