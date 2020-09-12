import React from "react";
import { ReactReduxContext } from "react-redux";

// const TodoListItem = (todo) => (
//     <li key={todo.id}>
//         <p>Title: {todo.title}</p>
//         <p>Body: {todo.body}</p>
//         <p>{todo.done ? "Done" : "Getturdun!"}</p>
//     </li>
// );

class TodoListItem extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        // debugger;
        return (<li>
            <p>Title: {this.props.todo.title}</p>
            <p>Body: {this.props.todo.body}</p>
            <p>{this.props.todo.done ? "Done" : "Getturdun!"}</p>
        </li>)
    }
}

export default TodoListItem;