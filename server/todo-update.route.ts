import { Request, Response } from 'express';
import { TODOS } from "./data";


export function updateToDo(req: Request, res: Response) {

  console.log("Updating todo ...");

  const id = req.params["id"],
        changes = req.body;

  const changeIndex = TODOS.findIndex(item => item.id == id);

  if (changeIndex >= 0)
    TODOS[changeIndex] = {
      ...TODOS[changeIndex],
      ...changes
    };

  setTimeout(() => {

    res.status(200).json(TODOS[id]);

  }, 1000);

}