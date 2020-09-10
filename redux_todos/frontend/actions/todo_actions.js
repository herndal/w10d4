// The first one will receive todos and populate the store

// the second one will receive a single todo and either add 
// or update a single todo in the store

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

export const receiveTodos = (todos) => {
    return {
        type: RECEIVE_TODOS,
        todos
    }
}

export const receiveTodo = (todo) => {
    return {
        type: RECEIVE_TODO,
        todo
    }
}



// export const ADD_TO_CART = 'ADD_TO_CART';

// export const addToCart = (id) => {
//     // debugger
//     return {
//         type: ADD_TO_CART,
//         id
//     }
// }