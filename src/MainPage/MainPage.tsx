import React, {  useState } from "react";
import Card from "../components/Card";
import {tasks as initalTask, Status, statuses, Task } from "../utils/Taskdata";

const MainPage = () => {

  const [tasks, setTasks] = useState<Task[]>(initalTask)

  const columns=statuses.map((status)=>{
    const taskInColumn=tasks.filter((task)=>task.status===status)
    return{
      title:status,
      tasks:taskInColumn
    }
  })



const updateTask=(task:Task)=>{
  const updateTasks=tasks.map((t)=>{
    return t.id=== task.id ? task:t
  })
  setTasks(updateTasks)
}

const handleDrop=(e:React.DragEvent<HTMLDivElement>,status: Status)=>{
  e.preventDefault()
  const id=e.dataTransfer.getData("id")
  const task=tasks.find((task)=>task.id===id)
  if(task){
    updateTask({...task,status})
  }
}
const [currentlyHoveringOver, setCurrentlyHoveringOver] = useState<Status | null>(null)
const handleDragEnter = (status: Status) => {
  setCurrentlyHoveringOver(status)
}
  
  return (
    <>
      <div
      
       className="grid grid-cols-3 justify-center gap-7 divide-x divide-gray-300 ">
        {columns.map((column,i)=>(
          <div  
          onDrop={(e) => handleDrop(e, column.title)}
          onDragOver={(e)=> e.preventDefault()}
          onDragEnter={() => handleDragEnter(column.title)}

           key={i}>
            <div className="flex items-center justify-between text-3xl p-2 font-bold text-gray-500">
            <h1 className="text-3xl text-gray-500 font-bold p-2 capitalize">{column.title}</h1>
            {column.tasks.reduce((total,task)=>total+(task?.points||0),0)}
            </div>
            <div className={`h-full m-10 p-3 ${currentlyHoveringOver === column.title ? 'bg-gray-200' : ''}`}>
            {column.tasks.map((task,i)=> <Card key={i} task={task} updateTask={updateTask}
            
            />)}
            </div>
           
          </div>
        ))}

      </div>
    </>
  );
};

export default MainPage;
