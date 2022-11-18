const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const category = require('./data/catagory.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Online courses API')
});

app.get('/courses-category', (req, res) => {
    res.send(category)
})
app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/details/:id', (req, res) => {
    const id = req.params.id;
    const detalisCourses = courses.find(c => c.category_id === id);
    res.send(detalisCourses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const SelectedCourses = courses.find(c => c.id === id);
    res.send(SelectedCourses);
    console.log(req.params.id)
})


app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const SelectedCourses = courses.find(c => c.id === id);
    res.send(SelectedCourses);
    console.log(req.params.id)
})

app.listen(port, () => {
    console.log('Learn Skills with practice server on port', port);
})