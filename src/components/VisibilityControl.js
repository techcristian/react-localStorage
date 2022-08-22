

export const VisibilityControl = ({setShowCompleted,cleanTasks,isChecked})=>{

  const handleDelete =() => {
    if (window.confirm("estas seguro de eliminar las tareas?")){
      cleanTasks()
    }

  }
return(
  <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
  <div className="form-check form-switch">
  
  <input 
  type="checkbox" 
  checked={isChecked}
  className="form-check-input"
  onChange={(e)=>setShowCompleted(e.target.checked)}
  />{""}
  <label>tareas realizadas</label>
  </div>


  <button className="btn btn-danger btn-sm" onClick={handleDelete}>
    Borrar
  </button>
  </div>

)

}