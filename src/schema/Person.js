const mongoose = require('mongoose');
const { Schema } = mongoose;

const personSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name required.'],
    },
    age: Number,
    profession: String,
    hobbies: [String],
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            'Please enter a valid email.',]
    },
});

module.exports = mongoose.model('Person', personSchema);