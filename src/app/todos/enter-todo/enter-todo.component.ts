import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToDoEntityService } from '../services/todo-entity.service';
import { ToDo } from '../entity/todo';

@Component({
  selector: 'enter-todo',
  templateUrl: './enter-todo.component.html',
  styleUrls: ['./enter-todo.component.css']
})
export class EnterTodoComponent implements OnInit {

  form: FormGroup;

  constructor(private todoEntityService: ToDoEntityService) {
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      done: new FormControl(false, [])
    })
  }

  ngOnInit(): void {
  }

  add(): void {
    const newToDo = new ToDo(Math.random().toString(36).substring(6), this.form.value.name)
   
    this.todoEntityService.add(newToDo).subscribe(() => {
      this.form.reset();
    });
  }

}
