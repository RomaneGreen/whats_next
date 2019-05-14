import React, { Component } from 'react'

export default class Main extends Component {
   constructor(props){
       super(props)

       this.state = {
           tasks: []
       }
       this.getTask = this.getTask.bind(this)
       this.addNewTask = this.addNewTask.bind(this)
   }

   getTask(e) {
       this.setState({
           tasks: e.target.value
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
                    <li>{this.state.tasks}</li>
                </ul>
      </div>
    )
  }
}




