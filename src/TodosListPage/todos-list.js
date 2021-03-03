import React, { Component } from 'react';
import { CompleteTask, getTodos, makeTodo } from '../apiUtils';

export default class TodosPage extends Component {
    state = {
       todos:[],
       task:''
        }
      componentDidMount = async () => {
          await this.fetchTodos();
      }
      fetchTodos = async () => {
          const todos = await getTodos(this.props.token)
          this.setState({ todos });
      }
      handleSubmit = async e =>{
          e.preventDefault();
          await makeTodo(this.state.task, this.props.token);
          await this.fetchTodos();
          this.setState({ task: '' })
      }
      handleTodo = e => this.setState({task: e.target.value});

      handleComplete = async(todoid)=> {
          await CompleteTask(todoid, this.props.token);
          this.fetchTodos();
      }

    render(){
        return (
           <div>
               <form onSubmit={this.handleSubmit}>
                   <input value={this.state.task} onChange={this.handleTodo} placeholder='Add A New Task'/>
                   <button> Add Task</button>
               </form>
               {!this.state.todos.length && <p>You Have Completed Your Todos!</p>}
               {this.state.todos.map(task=>
                <p key={`${task.id}`}
                onClick={() => this.handleComplete(task.id)}
                className={`
                task ${task.completed ? 'completed' : ''}`}>
                { task.todo }
                </p>)}
           </div>
        )
    }
}