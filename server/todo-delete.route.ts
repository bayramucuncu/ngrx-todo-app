import { Request, Response } from 'express';
import { TODOS } from "./data";


export function deleteToDo(req: Request, res: Response) {

  console.log("Deleting todo ...");

  const id = req.params["id"];

  const courseIndex = TODOS.findIndex(item => item.id == id);

  if (courseIndex >= 0)
    delete TODOS[courseIndex];

  setTimeout(() => {

    res.status(200).json({ id });

  }, 2000);

}