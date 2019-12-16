import express from 'express';
import { fakeTodos } from './dummy-data';

const app = express();

// The route for getting a list of all todos
app.get('/todos', (req, res) => {
    res.status(200).json(fakeTodos);
});

// The route for creating new todo-list items
app.post('/todos', (req, res) => {
    const { todo } = req.body;
    fakeTodos.push(todo);
    res.status(200).send();
});

// The route for deleting a todo-list item
app.delete('/todos', (req, res) => {
    const { todo } = req.body;
    fakeTodos = fakeTodos.filter(fakeTodo => fakeTodo.message !== todo.message);
    res.status(200).send();
});

app.listen(8080, () => console.log("Server listening on port 8080"));