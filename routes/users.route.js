const router = require('express').Router();
const users = require('../db/users.json');

//getting all users (JSON file)
router.get('/users', (req, res) => {
    res.json(users);
})

//getting users by email
router.get('/users/:email', (req, res) => {
    let user = users.find(element => element.email == req.params.email) //find users with same email in params
    if (user) { //if user exists
        res.send(user)
    } else { //if not existe send 404 error
        res.status(404).send({
            error: "no existe"
        })
    }


})


module.exports = router;