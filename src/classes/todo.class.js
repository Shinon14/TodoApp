
export class Todo {

    // esta funcion es para pasar un Todo almacenado en LocalStorage de formato Json a un objeto Todo
    static fromJson({id, tarea, completado, creado}) {

        // aqui estoy almacenando un nuevo todo, para devolverlo en formato de objeto
        const tempTodo = new Todo(tarea);
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;

    }
    
    // este constructor es para crear un nuevo todo
    constructor(tarea) {
        
        // esto es para que me devuelva un array vacio, aqui es donde voy a guardar los tdo
        this.tarea = tarea; 
        // este id se obtiene con la fecha y hora actual
        this.id = new Date().getTime();
        // este metodo es para que cuando se crea un nuevo todo, este se ponga como no completado
        this.completado = false;
        // este metood es para darle la fecha y hora de creacion al todo
        this.creado = new Date();



    }


}