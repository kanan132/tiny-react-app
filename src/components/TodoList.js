import React from "react"
import TodoItem from './TodoItem';

class TodosList extends React.Component {

  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo}
            mummy = {this.props.dummy} 
          />
        ))}
      </div>
    )
  }
}

export default TodosList