import React, { Component } from 'react'


export default class Main extends Component {
   constructor(props){
       super(props)

       this.state = {
           tasks: ["run ","jump"," fly "],
           value: ''
       }
       
       this.addNewTask = this.addNewTask.bind(this)
   }

   addNewTask(e) {
       
       e.preventDefault()

    // const newTaskList = this.state.tasks.concat([ this.state.value ]);
        const newTaskList = [this.state.value,...this.state.tasks]
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

   deleteKey = (keyed) => {
        
    
    let removeTask = this.state.tasks.filter( task => task !== keyed)

    

       
    this.setState({
        tasks : removeTask
    })
    
   
     
    
   }

  render() {
      const things = this.state.tasks.map( (task,key) => <li key={task} onClick={ () => this.deleteKey(task)}><span>{task}</span></li>).reverse()
    return (
      <div>
          
        <h1>What to do ? </h1>
        <form>  
      <input type="text" value={this.state.value} onChange={this.handleChange} placeHolder="add a task..." ></input>
      <button onClick={this.addNewTask}> Add task</button>
      <button onClick={this.removeTasks}>Remove all tasks</button>
                <ol>
                  {/* {this.state.tasks.map( task => <li>{task} </li>)} */}
                  {things}
                  
                </ol>
        </form>
        
      </div>
    )
  }
}




