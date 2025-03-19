const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    course: {
        type: String,
        required: true,
    }
})

const student = mongoose.model('students', studentSchema);

module.exports = student;