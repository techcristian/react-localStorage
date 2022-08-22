import {useState} from 'react'

export const TaskCreator = ({createNewTask})=> {
 
  const [newTaskName,setNewTaskName]= useState('')

  const handleChange = (e)=>{
    e.preventDefault()
    createNewTask(newTaskName)
    setNewTaskName("")
  }
  return (
 <div className='container'>

  <form onSubmit={handleChange} className="my-2 row d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">

  <div className='col-9'>
  <input type="text"
           value={newTaskName}
            placeholder="Ingresa una tarea"
            onChange={(e)=>setNewTaskName(e.target.value)}
            />
  </div>
        
  <div className='col-3'>
  <button className="btn btn-primary btn-sm">
             Guardar
  </button>
 </div>
  
      </form>

 </div>
  
    
  )

}