import {Injectable} from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';
import {ToDo} from '../entity/todo';


@Injectable()
export class ToDoEntityService
    extends EntityCollectionServiceBase<ToDo> {

    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('ToDo', serviceElementsFactory);
    }
}
