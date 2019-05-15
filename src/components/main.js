import React, { Component } from 'react'

export default class Main extends Component {
   constructor(props){
       super(props)

       this.state = {
           tasks: ["run ","jump"," fly " ]
       }
       
       this.addNewTask = this.addNewTask.bind(this)
   }

   addNewTask(e) {
      e.preventDefault()
    const newTaskList = this.state.tasks.concat([ e.target.value]);
    this.setState({
        tasks: newTaskList
     })
        
   }

   setTask() {

   
   }
   

  render() {
    return (
      <div>
        
        <h1>What to do ? </h1>
        <form onSubmit={this.addNewTask}>
      <input onClick={this.addNewTask} type="text"></input>
      <button>Add task</button>
                <ul>
                   {this.state.tasks.map( task => <li>{task}</li>)}
                </ul>
        </form>
      </div>
    )
  }
}




