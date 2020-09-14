export class ToDo{
    id: string;
    name: string;
    done: boolean;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.done = false;     
    }
}