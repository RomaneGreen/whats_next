import React, { Component } from 'react'


export default class Main extends Component {
   constructor(props){
       super(props)

       this.state = {
           tasks: ["run ","jump"," fly " ],
           nextTask: ""
       }
       
       this.addNewTask = this.addNewTask.bind(this)
   }

   addNewTask(e) {
       
       
     const newTaskList = this.state.tasks.concat([ e.target.value ]);

     this.setState({

         tasks: newTaskList,
       
      })
      
   }

   removeTasks = (e) => {

   e.preventDefault()

    this.setState({
        
      tasks : []
         
      })
    
    
   }
  

  render() {
    return (
      <div>
        
        <h1>What to do ? </h1>
        <form>  
      <input onClick={this.addNewTask}  type="text" ></input>
      <button> Add task</button>
      <button onClick={this.removeTasks}>Remove all tasks</button>
                <ul>
                   {this.state.tasks.map( task => <li>{task} </li>)}
                </ul>
        </form>
      </div>
    )
  }
}




