import React, { Component } from 'react'


export default class Main extends Component {
   constructor(props){
       super(props)

       this.state = {
           tasks: ["run ","jump"," fly " ],
           value: ''
       }
       
       this.addNewTask = this.addNewTask.bind(this)
   }

   addNewTask(e) {
       
       e.preventDefault()

     const newTaskList = this.state.tasks.concat([ this.state.value ]);

     this.setState({

         tasks: newTaskList,
         value: ""
       
      })
      
   }

   removeTasks = (e) => {

   e.preventDefault()

    this.setState({
        
      tasks : []
         
      })
    
    
   }
  
   handleChange = (e) => {
    this.setState({
        
        value : e.target.value
           
        })
        console.log(this.state.value)
   }

  render() {
      const things = this.state.tasks.map( task => <li>{task} </li>)
    return (
      <div>
        
        <h1>What to do ? </h1>
        <form>  
      <input type="text" value={this.state.value} onChange={this.handleChange} ></input>
      <button onClick={this.addNewTask}> Add task</button>
      <button onClick={this.removeTasks}>Remove all tasks</button>
                <ul>
                   {this.state.tasks.map( task => <li>{task} </li>)}
                   {things}
                </ul>
        </form>
      </div>
    )
  }
}




