import React from "react"
import TodoList from './TodoList';
import Input from './input'; 

class TodoContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      next_id: 4,
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

  componentDidMount = () => {
    let url = "https://run.mocky.io/v3/90b8def9-9e7d-4289-9474-5d8b12159631";
    fetch(url).
      then(resp => resp.json()).then(data => {
        this.setState({todos: data['todos']}, 
          () => { this.setState({next_id: data['next_id']}) }
        );
    }
    ).catch(e => console.error("Error"));
  }



  addTodo = (todo) => {
    let create_todo = {"id": this.state.next_id, "title": todo, "completed": false}
    let new_todos = [...this.state.todos, create_todo]
    this.setState({todos: new_todos}, () => {this.setState({next_id: this.state.next_id + 1}) });
  }

  deleteTodo = (id) => {
    let new_todos = this.state.todos.filter(todo => todo.id !== id);
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
          delete={this.deleteTodo} 
        />
      </div>
    )
  }
}
export default TodoContainer
