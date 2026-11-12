import { Component } from "react";
import TodoItem from "../TodoItem/TodoItem.jsx";
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: "Set up MongoDB schema for user authentication",
  },
  {
    id: 2,
    title: "Build Express.js middleware for JWT verification",
  },
  {
    id: 3,
    title: "Create reusable form components in React",
  },
  {
    id: 4,
    title: "Connect frontend to backend using Axios",
  },
  {
    id: 5,
    title: "Deploy app on Render and test API routes",
  },
  {
    id: 6,
    title: "Fix CORS issue between frontend and backend",
  },
  {
    id: 7,
    title: "Write custom hooks for input handling in React",
  },
  {
    id: 8,
    title: "Document backend routes with Postman",
  },
]

class SearchTodo extends Component {
    state = {
        todosList:initialTodosList
    }

    deleteUser = (id) => {
        const {todosList} = this.state;
        const updatedTodosList = todosList.filter(eachTodo=> {
            return eachTodo.id!=id
        })

        this.setState({
            todosList:updatedTodosList
        })
    }

    render () {
        const {todosList} = this.state;
        return(
            <div className="background">
                <h1 className="main-heading">Simple Todos</h1>
                <div>
            {todosList.map(eachTodo=> {
                return <TodoItem todoList={eachTodo} key={eachTodo.id} deleteUser = {this.deleteUser}/>
            })}
            </div>
            </div>
        )
    }
}

export default SearchTodo;