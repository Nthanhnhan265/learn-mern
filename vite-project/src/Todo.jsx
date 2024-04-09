import { useState } from "react"
function Todo() { 
    //declare useState
    const [tasks,setTasks] = useState(["No"])
    const [newtasks,setnewTasks] = useState("")

    //declare function to handle feature 
    const handleInputChanged = (e)=> { 
       if(e.target.value != "") { 
          setnewTasks(e.target.value)  

       } 
    }
    const addNewTask = () => { 
       if(newtasks!="") { 
           setTasks(t =>[...t,newtasks]) 
           setnewTasks("")
       } 
    }
    const removeTask = (index) => { 
       const updateTask = tasks.filter((_ ,i)=>{
           return index != i  
       }) 
       setTasks(updateTask)
    }    
    const moveTaskUp = (index) => {
       if(index > 0) { 
         const updateTask = [...tasks]
         let temp = updateTask[index]
         updateTask[index] = updateTask[index - 1]
         updateTask[index - 1] = temp; 
         setTasks(updateTask)
       }      
    }
    const moveTaskDown = (index) => { 
        if( index < tasks.length - 1) { 
         const updateTask = [...tasks]
         let temp = updateTask[index]
         updateTask[index] = updateTask[index + 1]
         updateTask[index + 1] = temp; 
         setTasks(updateTask)

        }
    }
    return (
       <div className="todo">
            <h3>To-do List</h3>
            <input className="inputTask" type="text" placeholder="Enter a task" 
                onChange={handleInputChanged} value={newtasks}
            />
            <button className="btn-add" 
                onClick={addNewTask}
            >Add task</button> 
            <ol className="list-task">
                {tasks.map((element, index) => 
                <li key={index} className="tasks">
                    <p className="content-task">
                        {element}
                    </p>
                    <div className="button-container">
                            <button className="btn-rm"    onClick={()=>removeTask(index)}>❌</button>                 
                            <button className="btn-up"    onClick={()=>moveTaskUp(index)}>👆</button>
                            <button className="btn-down"  onClick={()=>moveTaskDown(index)}>👇</button>
                     </div>
                </li>)}
            
            </ol>



       </div> 


    ) 
}

export default Todo