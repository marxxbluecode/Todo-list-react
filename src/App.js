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

  addtask = () => {
     const newtask = this.state.task;
     if(newtask.length > 0){
      this.setState({
         taskList: [].concat(this.state.task, this.state.taskList ),
         task: ''
      })
     }
  }
  
  onKeyDown = (event) => {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (event.key === 'Enter') {
      this.submit();
    }
  }

    removetask = () => {
      this.setState({
        item: null
      })
    }

    edittask = (event) => {
      const taskList = this.state.taskList
      this.setState({
        taskList: event.target.value
      })
    }

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
          onClick= {this.addtask}
          onKeydown={this.onKeyDown}>add
          
        </button>
        </div>
        <ul>
          {this.state.taskList.map((item) => (<li className='app-itens'>{item}
          <div><button className='icon-btn' onClick={this.edittask}> <img className='edit-icon' src={pen} alt=''/> </button>
          <button className='icon-btn' onClick={this.removetask}> <img className='delete-icon' src={lixeira} alt='trash icon'/></button></div>
          </li>))}
        </ul>
      </div>
    )
  }
}
export default app;