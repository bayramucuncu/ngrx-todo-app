import {Request, Response} from 'express';
import {TODOS} from "./data";


export function updateToDo(req: Request, res: Response) {

    console.log("Updating todo ...");

    const id = req.params["id"],
          changes = req.body;

    TODOS[id] = {
        ...TODOS[id],
        ...changes
    };

    setTimeout(() => {

      res.status(200).json(TODOS[id]);

    }, 2000);

}