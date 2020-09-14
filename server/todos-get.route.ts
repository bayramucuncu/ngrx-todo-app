import {Request, Response} from 'express';
import {TODOS} from "./data";


export function getAllToDos(req: Request, res: Response) {

    console.log("Retrieving courses data ...");

    setTimeout(() => {

      res.status(200).json({result:Object.values(TODOS)});

    }, 1000);



}
