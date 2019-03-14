// Base requires:
const express = require('express');
const router = express.Router();

// App requires/middleware
const user = require('../data/helpers/userModel');


/* ---------- Endpoints for /api/user ---------- */

/* GET (list) */
router.get( '/', (req, res) => {

  user.get()
    .then( (users) => {
      res.json(users);
    })
    .catch( (err) => {
      res.status(500).json({ error: "User information could not be retrieved." });
    });
});


/* GET by id */
router.get( '/:id', (req, res) => {
  const { id } = req.params;

  user.get(id)
    .then( (users) => {
      if( users ) {
        res.json(users);
      } else {
        res.status(404).json({ error: "User not found." });
      }
    })
    .catch( (err) => {
      res.status(500).json({ error: "User information could not be retrieved." });
    });
});



/* POST */
router.post('/', (req, res) => {
  const newUser = req.body;

  if (newUser.auth_id && newUser.email && newUser.type) {
    user.insert(newUser)
      .then((user) => {
        res.json(user)
      })
      .catch((err) => {
        res.status(500).json({ error: "Failed to create user." });
      })
  } else {
    res.status(400).json({
      message: "Missing email auth ID or type."
    });
  }
})



/* PUT */
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const userEdit = req.body;

  if (userEdit.auth_id && userEdit.email &&  userEdit.type) {
    user.update(id, userEdit)
      .then((user) => {
        if (id) {
          res.json({ message: "User has been updated." })
        } else {
          res.status(400).json({ message: "ID not provided." })
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: "Failed to update User."
        })
      })
  } else {
    res.status(400).json({
      message: "Missing email auth ID or type."
    });
  }
})


/* DELETE */


/* ---------- Export ---------- */
module.exports = router;