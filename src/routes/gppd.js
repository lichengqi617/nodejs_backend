const express = require('express');
const router = express.Router();

const Person = require('../schema/Person.js')

router.get('/', async (req, res, next) => {
    try {
        const { name } = req.query;
        const person = await Person.find({ name: name });
        res.json(person);
        console.log(person);
    }
    catch (err) {
        console.log(err.stack);
        res.status(500).json({ error: 'Server error' });
    }
});

router.post('/post', async (req, res, next) => {
    try {
        const { name, age, profession, hobbies, email } = req.body;
        const person = await Person.create({
            name: name,
            age: age,
            profession: profession,
            hobbies: hobbies,
            email: email,
        })
        res.status(200).json({ created: person.toJSON() })
        console.log(person);
    }
    catch (err) {
        console.error(err.stack);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;