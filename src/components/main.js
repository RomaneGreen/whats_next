import React, { Component } from 'react'

export default class Main extends Component {
   constructor(props){
       super(props)

       this.state = {
           tasks: ["run ","jump"," fly"]
       }
       this.getTask = this.getTask.bind(this)
       this.addNewTask = this.addNewTask.bind(this)
   }

   getTask(e) {
    const newTaskList = this.state.tasks.concat([e.target.value]);

       this.setState({
           tasks: newTaskList
        })
      
   }
   addNewTask() {
      console.log(this.state.tasks)
   }

  render() {
    return (
      <div>
        
        <h1>What to do ? </h1>
        
      <input onClick={this.getTask} type="text"></input>

      <button onClick={this.addNewTask}>Add task</button>
                <ul>
                   {this.state.tasks}
                </ul>
      </div>
    )
  }
}




