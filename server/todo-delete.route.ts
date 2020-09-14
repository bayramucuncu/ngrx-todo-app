import {Request, Response} from 'express';
import {TODOS} from "./data";


export function deleteToDo(req: Request, res: Response) {

    console.log("Deleting todo ...");

    const id = req.params["id"];

    const course = TODOS[id];

    delete TODOS[id];

    setTimeout(() => {

      res.status(200).json({id});

    }, 2000);

}