import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "",
            body: "",
            done: false
        };
        this.createTodo = this.createTodo.bind(this);
    }

    update(field) {
        return (event) => {
            this.setState({ [field]: event.target.value })
        };
    }

    updateDone() {
        return (event) => {
            event.target.checked ? this.setState({done: true}) : this.setState({done: false});
        }
    }

    uniqueId() {
        return new Date().getTime();
    }

    createTodo(event) {
        event.preventDefault();

        const todo = {
            id: this.uniqueId(),
            title: this.state.title,
            body: this.state.body,
            done: this.state.done
        }

        this.props.receiveTodo(todo);
        
        this.setState({
            title: "",
            body: "",
            done: false
        });
    }

    render () {
        return(
        <div>
            <h2>Make a New Todo</h2>
            <form className="createform" onSubmit={this.createTodo} >
                <label htmlFor="title">Title</label>
                <input onChange={this.update("title")} type="text" id="title" value={this.state.title} />
                <label htmlFor="body">Body</label>
                <input onChange={this.update("body")} type="text" id="body" value={this.state.body}/>
                <label htmlFor="done">Done?</label>
                <input onChange={this.updateDone()} type="checkbox" id="done" checked="false"/>
                <input type="submit" value="Create Todo"/>
            </form>
        </div>
        );
    }
}

export default TodoForm;




class WordInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: ""
        };
        this.updateWord = this.updateWord.bind(this);
    }

    updateWord(event) {
        this.setState({ word: event.currentTarget.value });
    }

    render() {
        return (
            <div>
                <input onChange={this.updateWord} value={this.state.word} />
                <span>The word is: {this.state.word}</span>
            </div>
        );
    }
}