import React, { Component } from 'react'

export default class Main extends Component {
   constructor(props){
       super(props)

       this.state = {
           task: " "
       }
       this.getTask = this.getTask.bind(this)
       this.addNewTask = this.addNewTask.bind(this)
   }

   getTask(e) {
       this.setState({
           task: e.target.value
        })
      
   }
   addNewTask(e) {
      alert(this.state.task)
   }

  render() {
    return (
      <div>
        
        <h1>What to do ? </h1>

      <input onClick={this.getTask} type="text"></input>

      <button onClick={this.addNewTask}>Add task</button>

         <h6>{this.state.task}</h6>
      </div>
    )
  }
}




