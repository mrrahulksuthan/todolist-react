import './App.css';
import React,{useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const[tasks,setTasks]=useState([]);
  const[newTask,setNewTask]=useState('');

 const handleChange =(e)=>{
  setNewTask(e.target.value);
 }

 const handleSubmit = (e)=>{
  e.preventDefault(); 
  if(newTask!==' '&& newTask!==''){
    setTasks([...tasks,newTask.trim()])  
    toast.done('Task added successfully');
  } 
  setNewTask('');
 }

const handleDelete= (e) =>{
  var updatedTasks = tasks.filter((tasks,i)=>i!==e)
  if(updatedTasks !==''){
    setTasks(updatedTasks);
    toast.error('Task removed successfully');
  }
}

const handleEdit = (index) => {
  const editedTask = prompt('Edit task:', tasks[index]);
  if (editedTask !== null) {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask;
    setTasks(updatedTasks);
    toast.info('Task removed successfully');
  }
};


  return (
    <div className="App">
    <section>
      <h1 className='mainHeading'>THINGS TO DO</h1>
      <form onSubmit={handleSubmit}>
        <input className='addtask' 
        placeholder='Add New Task'
        value={newTask}
        onChange={handleChange}></input>
      </form> 
        <br/> 
      <section className='displayArea'>
        {tasks.map((task,index)=>(
          <div key={index}>
          {task}
          <button title='Edit Task' onClick={() => handleEdit(index)} className='editButton' ></button>
          <button title='Delete Task' onClick={() => handleDelete(index)} className='dltButton'></button>
          </div>
        ))}
      </section> 
      </section>
      <ToastContainer />
    </div>
  );
}

export default App;
