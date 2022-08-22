import './App.css';
import {TaskCreator} from './components/TaskCreator'
import {useEffect, useState} from 'react'
import {TaskTable} from './components/TaskTable'
import {VisibilityControl} from './components/VisibilityControl'
import { Container } from './components/Container';


function App() {

const [taskItems,setTaskItems]= useState([])
const [showCompleted,setShowCompleted] = useState(false)

//funcion para crear una nueva tarea donde recibe como parametro el taskName que trae la tarea creada en el estado newTaskName en el formulario de TaskCreator.
const createNewTask = (taskName)=>{
 
 //validando que taskName sea unico..si no se es allada la tarea en el arreglo entonce se guarda
 if (!taskItems.find(task => task.name === taskName)){
  setTaskItems([...taskItems,{name:taskName,done:false}])
 }
};

//funcion que no permite cambiar el estado de la propiedad done ade ((true a false/o biseversa))
const toggleTask = task =>{
 setTaskItems(
  taskItems.map((t) => (t.name === task.name ? {...t, done: !t.done}:t)
  ))
};
//funcion para limpiar tareas
 const cleanTasks =()=>{
  setTaskItems(taskItems.filter((task) => !task.done));
  setShowCompleted(false);
 };



/* Este es un React Hook que se llama cuando se monta el componente. Se utiliza para recuperar los datos.
desde localStorage y establezca el estado de la matriz taskItems. */
useEffect(()=>{
let data=localStorage.getItem('tasks')
if(data){
  setTaskItems(JSON.parse(data))
}
},[ ]);

 //useEffect que guarda el arreglo taskItems en localstorage 

useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(taskItems))//(((convierto un arreglo a string para despues convertirlo en arreglo de javascrip con JSON.parse)))
},[taskItems]);

  return (
    <main className="bg-dark vh-150 text-white">
      <Container>
      <TaskCreator createNewTask={createNewTask}/>
      
      <TaskTable tasks={taskItems} toggleTask={toggleTask} showCompleted={false}/>

       <VisibilityControl 
        isChecked={showCompleted}
        setShowCompleted={(checked)=>{setShowCompleted(checked)}}
        cleanTasks={cleanTasks}
         />
        {
        showCompleted ===true ?( <TaskTable 
         tasks={taskItems} 
         toggleTask={toggleTask} 
         showCompleted={showCompleted}/>):(null)     
         }
      </Container>
      </main>
  );
}

export default App;
