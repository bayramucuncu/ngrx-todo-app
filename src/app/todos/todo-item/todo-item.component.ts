import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../entity/todo';
import { ToDoEntityService } from '../services/todo-entity.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() item: ToDo;

  isEdit: boolean;
  form: FormGroup;

  constructor(private todoEntityService: ToDoEntityService) {
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  delete() {
    this.todoEntityService.delete(this.item);
  }

  done() {
    const done = {
      done: !this.item.done
    }

    const updatedItem = {
      ...this.item,
      ...done
    }

    this.todoEntityService.update(updatedItem);
  }

  turnOnEditMode() {
    this.form.patchValue({ name: this.item.name });
    
    this.isEdit = true;
  }

  turnOoffEditMode() {
    this.isEdit = false;
  }

  save() {

    const updatedItem = {
      ...this.item,
      ...this.form.value
    }

    this.todoEntityService.update(updatedItem)
      .subscribe(() => this.turnOoffEditMode());
  }

}
