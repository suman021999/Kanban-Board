import { useState } from "react";
import { Task } from "../utils/Taskdata";

const Card = ({
  task,
  updateTask,
}: {
  task: Task;
  updateTask: (task: Task) => void;
}) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const  points = task.points || 0;
  const updatePoints = (direction: "up" | "down") => {
    // Generate Fibonacci sequence up to or slightly above the current point
    const generateFibUpTo = (num: number) => {
      const fib = [0, 1];
      while (fib[fib.length - 1] < num || fib.length < 20) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
      }
      return fib;
    };
  
    const fib = generateFibUpTo(points + 1); // make sure current point exists in the list
    const index = fib.indexOf(points);
  
    // If current point isn't in the list, find the closest lower one
    const currentIndex = index !== -1 ? index : fib.findIndex(f => f > points) - 1;
  
    const nextIndex = direction === "up" ? currentIndex + 1 : currentIndex - 1;
  
    if (nextIndex >= 0 && nextIndex < fib.length) {
      const newPoints = fib[nextIndex];
      updateTask({ ...task, points: newPoints });
    }
  };
  

  return (
    <>
    <div
    draggable
    onDragStart={(e) => {
      e.dataTransfer.setData("id", task.id)
    }}
     className="border rounded-lg px-2 m-2 bg-gray-50 "
    >
      <div className="text-base font-base py-2">
        {isEditingTitle ? (
          <input
          autoFocus
          className="w-full"
          onBlur={() => setIsEditingTitle(false)}
          value={task.title}
          onChange={(e) => updateTask({...task, title: e.target.value})}
          />
        ) : (
          <h2
            className="text-base font-semibold py-2"
            onClick={() => setIsEditingTitle(true)}
          >
            {task.title}
          </h2>
        )}
      </div>

      
        <div className="flex gap-4 justify-between py-2 text-gray-500 text-sm">
          <div className="flex gap-2">
            <div>{task.id}</div>

            {task.priority === "high" && (
              <div className="bg-red-500 px-2 rounded py-1 text-amber-50 font-semibold">
                {task.priority}
              </div>
            )}
            {task.priority === "mediam" && (
              <div className="bg-orange-500 px-2 rounded py-1 text-amber-50 font-semibold">
                {task.priority}
              </div>
            )}
            {task.priority === "low" && (
              <div className="bg-cyan-300 px-2 rounded py-1 text-amber-50 font-semibold">
                {task.priority}
              </div>
            )}
          </div>
          <div className="flex gap-2 items-center">
            <button onClick={() => updatePoints('down')}>-</button>
            <div className="font-bold">{points}</div>

            <button onClick={() => updatePoints('up')}>+</button>
          </div>
        </div>
     
      </div>
    </>
  );
};

export default Card;
