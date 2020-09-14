import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ToDoEntityService} from './todo-entity.service';
import {filter, first, map, tap} from 'rxjs/operators';


@Injectable()
export class ToDoResolver implements Resolve<boolean> {

    constructor(private todoService: ToDoEntityService) {

    }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<boolean> {

        return this.todoService.loaded$
            .pipe(
                tap(loaded => {
                    if (!loaded) {
                       this.todoService.getAll();
                    }
                }),
                filter(loaded => !!loaded),
                first()
            );

    }

}
