const express = require('express');
const { body, validationResult } = require('express-validator');
const Student = require('./models/Student');
const router = express.Router();

// Create a new student
router.post('/', [
    body('studentName').isLength({ min: 3, max: 10 }),
    body('email').isEmail(),
    body('mobile').matches(/^[6789][0-9]{9}$/),
    body('age').isInt({ min: 13 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).send(errors.array());

    const student = new Student(req.body);
    try {
        await student.save();
        res.status(201).send(student);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Get all students
router.get('/', async (req, res) => {
    const students = await Student.find();
    res.send(students);
});

// Get student by address
router.post('/by-address', async (req, res) => {
    const students = await Student.find({ 'address': req.body });
    res.send(students);
});

// Update student email
router.put('/:id/email', async (req, res) => {
    const { oldEmail, newEmail } = req.body;
    const student = await Student.findById(req.params.id);
    
    if (!student) return res.status(404).send("Student not found");
    
    if (student.email !== oldEmail) return res.status(400).send("Old email does not match");
    
    student.email = newEmail;
    await student.save();
    res.send(student);
});

// Update student address
router.put('/:id/address', async (req, res) => {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).send("Student not found");
    
    student.address = req.body;
    await student.save();
    res.send(student);
});

// Get students by age range
router.get('/between-age', async (req, res) => {
    const { startAge, endAge } = req.query;
    const students = await Student.find({ age: { $gte: startAge, $lte: endAge } });
    res.send(students);
});

// GET name, address, and age of all students
router.get('/name-address-age', async (req, res) => {
    const students = await Student.find().select('studentName address age');
    res.send(students);
});

module.exports = router;