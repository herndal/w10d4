import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";


const TodoList = ({todos, receiveTodo}) => {

    const todoLis = todos.map(todo => {
        return <TodoListItem todo={todo} key={todo.id}/>;
    });

    return (
        <div>
            <h2>All Todos</h2>
            <ul>
                {todoLis}
            </ul>
            <TodoForm receiveTodo={receiveTodo} />
        </div>);
}

export default TodoList;