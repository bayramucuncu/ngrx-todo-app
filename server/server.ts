import * as express from 'express';
import { Application } from "express";
import { getAllToDos } from "./todos-get.route";
import { addToDo } from './todo-add.route';
import { updateToDo } from './todo-update.route';
import { deleteToDo } from './todo-delete.route';

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.route('/api/todos').get(getAllToDos);
app.route('/api/todo').post(addToDo);
app.route('/api/todo/:id').put(updateToDo);
app.route('/api/todo/:id').delete(deleteToDo);

const httpServer: any = app.listen(1453, () => {
    console.log("Server is running at http://localhost:" + httpServer.address().port);
});