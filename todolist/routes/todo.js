const express = require('express');
const router = express.Router();

let tasks = { current: [], completed: [] }; // In-memory task storage

// Route to render the To-Do list
router.get('/', (req, res) => {
    res.render('index', { tasks });
});

// Route to add a new task
router.post('/add', (req, res) => {
    tasks.current.push({ title: req.body.title, date: req.body.date });
    res.redirect('/');
});

// Route to mark a task as complete
router.post('/complete/:index', (req, res) => {
    const completedTask = tasks.current.splice(req.params.index, 1)[0];
    tasks.completed.push(completedTask);
    res.redirect('/');
});

// Route to delete a completed task
router.post('/delete/:index', (req, res) => {
    tasks.completed.splice(req.params.index, 1);
    res.redirect('/');
});

module.exports = router;
