import {DefaultDataService, HttpUrlGenerator} from '@ngrx/data';
import {ToDo} from '../entity/todo';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class ToDoDataService extends DefaultDataService<ToDo>{
    constructor(http:HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('ToDo', http, httpUrlGenerator);

    }

    getAll(): Observable<ToDo[]>{
        return this.http.get<ToDo[]>("/api/todos")
        .pipe(
            map((response: any) => response.result)
        );
    }
}