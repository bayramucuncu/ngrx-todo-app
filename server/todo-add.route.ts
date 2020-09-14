import { Request, Response } from 'express';
import { TODOS } from './data';


export function addToDo(req: Request, res: Response) {

  console.log("Creating new todo ...");

  const changes = req.body;

  const newToDo = {
    id: Math.random().toString(36).substring(6),
    ...changes
  };

  TODOS.push(newToDo);

  setTimeout(() => {

    res.status(200).json(newToDo);

  }, 2000);

}