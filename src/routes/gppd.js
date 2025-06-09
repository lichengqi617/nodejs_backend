const express = require('express');
const router = express.Router();

const Person = require('../schema/Person.js')

router.get('/', async (req, res, next) => {
    try {
        const { name } = req.query;
        const person = await Person.find({ name: name });
        res.json(person);
    }
    catch (err) {
        console.log(err.message);
    }
});

router.post('/post', (req, res, next) => {
    try {
        const { name, age, profession, hobbies, email } = req.body;
        const person = Person.create({
            name: name,
            age: age,
            profession: profession,
            hobbies: hobbies,
            email: email,
        })
    }
    catch (err) {
        console.log(err.message);
    }
});

module.exports = router;