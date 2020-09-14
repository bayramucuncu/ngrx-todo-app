import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { Routes, RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {MatCardModule  } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { TodoItemComponent } from './todo-item/todo-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ToDoEntityService } from '../todos/services/todo-entity.service';
import { ToDoDataService } from '../todos/services/todo-data.service';
import { ToDoResolver } from '../todos/services/todo-resolver';
import { EntityDefinitionService, EntityDataService, EntityMetadataMap } from '@ngrx/data';
import { EnterTodoComponent } from './enter-todo/enter-todo.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
      path: '',
      component: TodoListComponent,
      resolve: {
        todos: ToDoResolver
      }
  }
];

const entityMetadata: EntityMetadataMap = {
  ToDo: {
      entityDispatcherOptions: {
          optimisticUpdate: true
      }
  }
};

@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    EnterTodoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    ToDoEntityService,
    ToDoDataService,
    ToDoResolver
  ]
})
export class TodosModule { 

  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private toDoDataService: ToDoDataService) {

    eds.registerMetadataMap(entityMetadata);

    entityDataService.registerService('ToDo', toDoDataService);

}

}
