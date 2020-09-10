import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./frontend/store/store";
import { receiveTodos, receiveTodo } from "./frontend/actions/todo_actions";


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("content");
    window.store = configureStore;
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    ReactDOM.render( <h1>Todo App</h1>, root);
});