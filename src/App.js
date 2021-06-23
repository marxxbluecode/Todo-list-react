import React, { Component } from "react"
import "./App.css"
import lixeira from "./images/trash-icon.png";
import pen from "./images/edit-icon.png";

class app extends Component {
  state = {
    task: "",
    taskList: []
  };
    
  handleChange = (event) => {
    this.setState({
      task: event.target.value
    });
  };

  addtask = (event) => {
     const {task, taskList} = this.state;
     if(task.length > 0) {
      this.setState({
         taskList: taskList.concat({
           task: task,
           id: Date.now()
         }),
         task: ''
      });
    }
    event.preventDefault();
  };
  
    removetask = (id) => {
      this.setState({
        taskList: this.state.taskList.filter((item) => {
          return item.id !== id
        })
      });
    };

  render(){
    return(
      <div className='app-todo'>
          <h1 className='app-title'>O que faremos hoje?</h1>
        <div className='app-header'>
        <input 
          className='app-input'
          type='text' 
          placeholder='digite aqui...'
          onChange = {this.handleChange}
          value={this.state.task}
        />
        <button 
          className='app-btn' 
          onClick= {this.addtask}>
            add
        </button>
        </div>
        <ul>
          {this.state.taskList.map((item) => (
          <li className='app-itens'>
            {item.task}
          <div>
          <button className='icon-btn' onClick={() => {this.removetask(item.id)}}>
             <img className='delete-icon' src={lixeira} alt='trash icon'/>
          </button>
          </div>
          </li>))}
        </ul>
      </div>
    )
  }
}
export default app;