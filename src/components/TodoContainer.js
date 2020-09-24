import React from "react"
import TodoList from './TodoList';
import Input from './input'; 

class TodoContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
     todos: [
       {
         id: 1,
         title: "make todo container",
         completed: true
       },
       {
         id: 2,
         title: "create redux middleware",
         completed: false
       },
       {
         id: 3,
         title: "make production build",
         completed: false
       }
     ]
    };    
  }

  addTodo = (todo) => {
    let better_structure = (todo) =>{
      let id = this.state.todos.length + 1
      return {
        id : id,
        title : todo,
        completed : false
      }
    }
    let new_todos = [...this.state.todos]
    new_todos.push(better_structure(todo));
    this.setState({todos: new_todos});
  }

  get_id = (id) => {
    let new_todos = this.state.todos.map(todo => {
      if (todo.id === id) { 
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({todos: new_todos});
  }


  render() {
    return (
      <div>
        <Input
          append={this.addTodo}
        />
        <TodoList 
          todos={this.state.todos} 
          dummy={this.get_id} 
        />
      </div>
    )
  }
}
export default TodoContainer
