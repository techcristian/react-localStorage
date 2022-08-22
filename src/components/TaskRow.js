
export const TaskRow = ({task,toggleTask})=>{
  return (
    <tr>
    <td className="d-flex justify-content-between">
      {task.name}
   
    <div className="form-check form-switch">
    <input 
    type="checkbox"
    className="form-check-input"
    checked={task.done}
    onChange={()=> toggleTask(task)}

    />
    </div>
  
     </td>
     </tr>
  )
}