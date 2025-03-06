const express = require("express");
const app = express();
const PORT = 9000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

let tasks = [];

app.get("/", (req, res) => {
    const currentTasks = tasks.filter(task => !task.completed);
    const completedTasks = tasks.filter(task => task.completed);
    res.render("index", { tasks, currentTasks, completedTasks });
});


app.post("/add", (req, res) => {
    if (!req.body.task) return res.redirect("/");

    const newTask = {
        id: tasks.length + 1,
        name: req.body.task,
        completed: false
    };
    tasks.push(newTask);
    res.redirect("/tasks"); 
});

app.get("/tasks", (req, res) => {
    const currentTasks = tasks.filter(task => !task.completed);
    const completedTasks = tasks.filter(task => task.completed);
    res.render("tasks", { currentTasks, completedTasks });
});


app.get("/edit/:id", (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (!task) return res.redirect("/tasks");
    res.render("edit", { task });
});

app.post("/edit/:id", (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (task) task.name = req.body.task;
    res.redirect("/tasks"); 
});


app.post("/complete/:id", (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (task) task.completed = true;
    res.redirect("/");
});


app.post("/delete/:id", (req, res) => {
    tasks = tasks.filter(task => task.id != req.params.id); 
    res.redirect("/"); 
});


app.get("/edit/:id", (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (!task) return res.redirect("/");
    res.render("edit", { task });
});

app.post("/edit/:id", (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (task) task.name = req.body.task;
    res.redirect("/");
});


app.listen(PORT, () => {
    console.log(`Server started  http://localhost:${PORT}`);
});
