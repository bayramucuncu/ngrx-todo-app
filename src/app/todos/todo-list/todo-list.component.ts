import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import {ToDo} from '../entity/todo';
import { ToDoEntityService } from '../services/todo-entity.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  form: FormGroup;

  todos$: Observable<ToDo[]>;

  constructor(private todoEntityService: ToDoEntityService) {
    this.form = new FormGroup({
      name: new FormControl("", [])
    })
  }
  
  
  ngOnInit(): void {
    this.todos$ = this.todoEntityService.entities$;
  }

}
