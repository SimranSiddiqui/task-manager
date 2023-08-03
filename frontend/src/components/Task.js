import {BiEdit} from 'react-icons/bi';
import {GoTrash} from 'react-icons/go';
import {FaCheckDouble} from 'react-icons/fa';

const Task = ({task, index, deleteTask, getSingleTask, setToComplete}) => {
  return (
    <div className={task.completed ? "task completed" : "task"}>
        <p>
          <b>{index+1}</b>
          {task.name}
        </p>
        <div className="task-icons">
          <FaCheckDouble color="green" onClick={()=> setToComplete(task)} />
          <BiEdit color='purple' onClick={() => 
            getSingleTask(task)} />
          <GoTrash color='red' onClick={()=> 
            deleteTask(task._id)}/>
        </div>
    </div>
  )
}

export default Task;