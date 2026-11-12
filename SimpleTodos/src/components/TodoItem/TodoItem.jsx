import { Component } from "react";
import './index.css'

class TodoItem extends Component {

    onDelete = () => {
        const {todoList,deleteUser} = this.props;
        const{id,title} = todoList;

        deleteUser(id);
    }

    
    render () {
        const {todoList,deleteUser} = this.props;
        const{id,title} = todoList;
        return(
            <li className="todo-item" id={id}>
                <p className="todo-heading">{title}</p>
                <button className="delete-btn" onClick={this.onDelete}>Delete</button>
            </li>
        )
    }
}

export default TodoItem