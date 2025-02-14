const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Sample Data Store
let tutorials = [];
let comments = {};

// Create a new tutorial
app.post('/api/tutorials', (req, res) => {
    const newTutorial = req.body;
    tutorials.push(newTutorial);
    res.status(201).send(newTutorial);
});

// Create a new comment for a tutorial
app.post('/api/tutorials/:id/comments', (req, res) => {
    const tutorialId = req.params.id;
    const newComment = req.body;
    if (!comments[tutorialId]) {
        comments[tutorialId] = [];
    }
    comments[tutorialId].push(newComment);
    res.status(201).send(newComment);
});

// Retrieve all comments of a tutorial
app.get('/api/tutorials/:id/comments', (req, res) => {
    const tutorialId = req.params.id;
    res.send(comments[tutorialId] || []);
});

// Retrieve a comment by id
app.get('/api/comments/:id', (req, res) => {
    const commentId = req.params.id;
    // Logic to find the comment by id
});

// Update a comment by id
app.put('/api/comments/:id', (req, res) => {
    const commentId = req.params.id;
    // Logic to update the comment by id
});

// Delete a comment by id
app.delete('/api/comments/:id', (req, res) => {
    const commentId = req.params.id;
    // Logic to delete the comment by id
});

// Delete a tutorial by id (and its comments)
app.delete('/api/tutorials/:id', (req, res) => {
    const tutorialId = req.params.id;
    // Logic to delete the tutorial by id
    delete comments[tutorialId]; // Remove associated comments as well
});

// Delete all comments of a tutorial
app.delete('/api/tutorials/:id/comments', (req, res) => {
    const tutorialId = req.params.id;
    delete comments[tutorialId]; // Remove all comments
    res.sendStatus(204);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});