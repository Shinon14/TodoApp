import { Todo } from '../classes';
import { todoList } from '../index';

const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.todo-list');
const anchorFiltros = document.querySelector('.filtro');

export const crearTodoHtml = (todo) => {
    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.creado) ? '' : 'checked' }>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;


    const div = document.createElement('div'); 
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);
    return div.firstElementChild;
};


//event
txtInput.addEventListener('keyup', (event) => { 

    if (event.keyCode === 13 && txtInput.value.length > 0) {

        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
        
    }
});


divTodoList.addEventListener('click', (event) => {
 
    // aqui estoy seleccionando el elemento que se hizo click
    const nombreElemento = (event.target.localName); // puede ser un input, label o button.
    const todoElemento = event.target.parentElement.parentElement; // Aqui esta el li, hago referencia para sacar este, ademas de que da el id.
    const todoId = todoElemento.getAttribute('data-id');


    // console.log(todoElemento);
    // console.log(todoId);

    // este if sirve para que cuando haga click en el boton de eliminar, se elimine el todo
    if (nombreElemento.includes('input')) {
        
        // esta funcion es para marcar un todo como completado
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed')
    } else if (nombreElemento.includes('button')) { //hay que borrar el todo
        
        // estas funciones son para borrar el todo, con el id y el elemento
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    } 

    // console.log(todoList);

});


btnBorrar.addEventListener('click', () => {
    
    // esta funcion es para eliminar los completados en la lista todo
    todoList.eliminarCompletados(); 

    // aqui estoy recorriendo todos los li y eliminando los que estan completados
    for (let i = divTodoList.children.length - 1; i >= 0; i--){
        
        // aqui estoy seleccionando el elemento que se hizo click
        const elemento = divTodoList.children[i];

        // aqui estoy seleccionando el elemento que se hizo click 
        if (elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento);
        }


    };

});

// en este evento estoy seleccionando el elemento que se hizo click
ulFiltros.addEventListener('click', (event) => {
   
    
    // aqui estoy seleccionando el elemento que se hizo click
    const filtro = event.target.text;
    // este if sirve para filtrar cuando no se selecciona ningun filtro
    if (!filtro) { return; };
    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');
    // este for sirve para recorrer todos los li y cambiar el display a none 
    for (const elemento of divTodoList.children) {
        
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');
        
        switch ( filtro ) {
            case 'active':
                if ( completado ) {
                    elemento.classList.add('hidden');
                }
            case 'completed':
                if (!completado) {
                    elemento.classList.add('hidden');
                }
        }

    }

});
