import {TaskRow} from './TaskRow'

export const TaskTable = ({tasks,toggleTask,showCompleted})=>{
  const taskTableRows = (doneValue)=>{
    return(
      tasks.filter(task=> task.done === doneValue)
      .map((task) =>(
        <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
        ))
    )
  }

  return (

    <table className="table table-striped table-bordered table-dark border-secondary">
    <thead>
      <tr>
        <td>Tareas</td>
      </tr>
    </thead>
    <tbody>
     
      {
        taskTableRows(showCompleted)
  }
      
    </tbody>
  </table>
  )
}