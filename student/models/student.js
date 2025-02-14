const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    pincode: { type: String, match: /^\d{6}$/, required: true },
    state: String,
    city: String,
});

const studentSchema = new mongoose.Schema({
    studentName: { type: String, required: true, minlength: 3, maxlength: 10 },
    address: addressSchema,
    age: { type: Number, min: 13 },
    email: { type: String, unique: true, required: true },
    mobile: { type: String, match: /^[6789][0-9]{9}$/ },
    gender: { type: String, enum: ['MALE', 'FEMALE'] },
    dob: { type: Date }
});

module.exports = mongoose.model('Student', studentSchema);