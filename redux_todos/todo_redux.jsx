import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./frontend/store/store";
import { receiveTodos, receiveTodo } from "./frontend/actions/todo_actions";
import Root from "./frontend/components/root";
import { allTodos } from "./frontend/reducers/selectors";


document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("content");
    window.store = configureStore;
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    window.allTodos = allTodos;
    ReactDOM.render(<Root store={store}/>, main);
});