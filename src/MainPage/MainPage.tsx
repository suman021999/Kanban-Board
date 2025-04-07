import Card from "../components/Card";
import { tasks,statuses } from "../utils/Taskdata";

const MainPage = () => {
  const columns=statuses.map((status)=>{
    const taskInColumn=tasks.filter((task)=>task.status===status)
    return{
      title:status,
      tasks:taskInColumn
    }
  })
  
  return (
    <>
      <div className="flex justify-center  divide-x divide-gray-300 ">
        {columns.map((column,i)=>(
          <div key={i}>
            <h1 className="text-3xl text-gray-500 font-bold p-2 capitalize">{column.title}</h1>
            {column.tasks.map((task,i)=> <Card key={i} task={task}/>)}
          </div>
        ))}

      </div>
    </>
  );
};

export default MainPage;
