import './styles.css';

import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';

// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class.js';

export const todoList = new TodoList();


console.log(todoList.todo);

todoList.todos.forEach(todo => crearTodoHtml(todo)); //esta es la forma vieja de hacerlo, en caso de que no sea igual el objeto dentro del callback, es posible reducirlo a una linea mas simple hacerlo
//todoList.todos.forEach( crearTodoHtml ); //Esta funcion es para hacer desestructurado el array de todos


// todoList.todos[0].







// const newTodo = new Todo('Aprender JavaScript');
todoList.nuevoTodo(newTodo);


// const tarea = new Todo('Aprender JavaScript!!');
// todoList.nuevoTodo(tarea);
// console.log(todoList);

// crearTodoHtml(tarea);


// localStorage.setItem('mi-key', 'ABC123');
// sessionStorage.setItem('mi-key', 'ABC123');

// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500);