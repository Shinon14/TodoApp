import { Todo } from './index'


export class TodoList {


    constructor() {
        
        // esto es para que me devuelva un array vacio, aqui es donde voy a guardar los tdo
        this.todos = [];
         this.cargarLocalStorage();


    }

    // this is like a CRUD
    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();

    }


    // esta funcion es para eliminar un todo en especifico
    eliminarTodo(id) {
        
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();

    }

    // esta funcion es para marcar un todo como completado
    marcarCompletado( id ) {
        
        for (const todo of this.todos) {
            
            console.log(todo.id, id);


            if (todo.id = id) {
                
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break

            }
        }

    }

    // esta funcion es para eliminar los completados en la lista todo
    eliminarCompletados() {
                    // el filter es para que me devuelva un nuevo array
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();

    }

    guardarLocalStorage() {
        
        localStorage.setItem('todo', JSON.stringify(this.todos));

    }



    cargarLocalStorage() {

        this.todos = (localStorage.getItem('todo'))
            ? JSON.parse(localStorage.getItem('todo'))
            : [];
        
        this.todos = this.todos.map( obj => Todo.fromJson( obj ) ); //el Array.map sirve para crear un array nuevo con los datos que yo quiero
    }


}