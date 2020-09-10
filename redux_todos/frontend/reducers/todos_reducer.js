import {RECEIVE_TODOS} from '../actions/todo_actions';
import { RECEIVE_TODO } from '../actions/todo_actions';
import { bindActionCreators } from 'redux';



const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};


const todosReducer = (state = initialState, action) => {
    Object.freeze(state);

    switch(action.type) {

        case RECEIVE_TODOS:
            const twodeeArray = action.todos.map((todo) => { return [todo.id, todo]});
            console.log(twodeeArray);
            const newState = Object.fromEntries(twodeeArray);
            return newState;
     
            
        case RECEIVE_TODO:
  
            const newtoDo = {[action.todo.id]: action.todo}
            const newerState = Object.assign({}, state, newtoDo);
   
            return newerState;

        default: 
            return state;
    }
};


export default todosReducer;