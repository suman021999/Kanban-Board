import { Task } from "../utils/Taskdata"



const Card = ({task}:{
   task:Task
}) => {

  return (
    <>
      <div className=" border border-gray-300 rounded-lg px-2 m-2 bg-gray-50 w-56">
          <h2 className="text-base font-semibold py-2">{task.title}</h2>
          <div className="flex gap-4 justify-between py-2 text-gray-500 text-sm">
            <div className="flex gap-2">
              <div>{task.id}</div>
              {/* <div>{task.priority}</div> */}
              {task.priority==="high" && <div className="bg-red-500 px-2 rounded py-1 text-amber-50 font-semibold">{task.priority}</div>}
              {task.priority==="mediam" && <div className="bg-orange-500 px-2 rounded py-1 text-amber-50 font-semibold">{task.priority}</div>}
              {task.priority==="low" && <div className="bg-cyan-300 px-2 rounded py-1 text-amber-50 font-semibold">{task.priority}</div>}
              
              </div>
            <div>{task.points}</div>
           </div>
      </div>
    </>
  )
}

export default Card
