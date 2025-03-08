const express = require('express');
const app = express();
const todo = require('./routes/todo');
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', todo);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
