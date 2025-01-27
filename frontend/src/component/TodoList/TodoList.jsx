import { useState } from 'react';
import { loadTasksFromStorage, saveTasksToStorage } from '../../Utility/LocalStorage';
import { useSelector } from 'react-redux';

function TodoList() {
    const [tasks, setTasks] = useState(loadTasksFromStorage());
    const [newTask, setNewTask] = useState('');
    const [priority, setPriority] = useState('Low');
    const [weatherType, setWeatherType] = useState('Indoor');
    const [selectedTask, setSelectedTask] = useState(null); // State for the selected task
  
    const {weather} = useSelector((state) => state.weather)
    
    const addTask = () => {
      if (!newTask.trim()) return;
      let weatherC=''
      if(weatherType=='Outdoor') {
        weatherC=weather.days[0].description;
      }
      const date = weather.days[0].datetime;

      const updatedTasks = [...tasks, { text: newTask, completed: false, priority, weatherType, weatherCondition: weatherC, date }];
      
      setTasks(updatedTasks);
      saveTasksToStorage(updatedTasks);
      setNewTask('');
      setPriority('Low');
      setWeatherType('Indoor');
    };
  
    const toggleTaskCompletion = (index) => {
      const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
      saveTasksToStorage(updatedTasks);
    };
  
    const deleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
      saveTasksToStorage(updatedTasks);
    };

    const openTaskDetails = (task) => {
        setSelectedTask(task);        
      };
    
  
    const sortedTasks = [...tasks].sort((a, b) => {
      const priorityOrder = { High: 3, Medium: 2, Low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });

  
    return (
        <>
      {/* <div className="max-w-3xl mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-1 p-2 border rounded"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
          />
          <br/>
          <div className='flex flex-row sm:flex-row gap-2 mt-2'>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="ml-2 p-2 w-28 border rounded"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            <select
              value={weather}
              onChange={(e) => setWeatherType(e.target.value)}
              className="ml-2 p-2 w-28 border rounded"
            >
              <option value="Indoor">Indoor</option>
              <option value="Outdoor">Outdoor</option>
            </select>
            <button
              onClick={addTask}
              className="ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </div>
        <ul>
          {sortedTasks.map((task, index) => (
            <li
              key={index}
              className={`flex justify-between items-center mb-2 ${
                task.priority === 'High' ? 'bg-red-100' : task.priority === 'Medium' ? 'bg-yellow-100' : 'bg-green-100'
              } p-2 rounded`}
            >
              <span
                className={`flex-1 ${task.completed ? 'line-through text-gray-500' : ''}`}
                onClick={() => toggleTaskCompletion(index)}
              >
                {task.text} <span className="font-bold">({task.priority})</span>
              </span>
              <button
              data-bs-toggle="modal" data-bs-target="#exampleModal"
                onClick={() => openTaskDetails(task)}



                // onClick={() => viewTask(index)} data-bs-toggle="modal"
                className="ml-4 p-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                View
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="ml-4 p-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div> */}
      <div className="max-w-3xl mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
  <h1 className="text-2xl font-bold mb-4">Todo List</h1>
  <div className="flex flex-col sm:flex-row mb-4">
    <input
      type="text"
      className="flex-1 p-2 border rounded mb-2 sm:mb-0 sm:mr-2"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      placeholder="Add a new task..."
    />
    <div className="flex flex-col sm:flex-row gap-2 mt-2 sm:mt-0">
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="p-2 w-full sm:w-28 border rounded"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <select
        value={weather}
        onChange={(e) => setWeatherType(e.target.value)}
        className="p-2 w-full sm:w-28 border rounded"
      >
        <option value="Indoor">Indoor</option>
        <option value="Outdoor">Outdoor</option>
      </select>
      <button
        onClick={addTask}
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  </div>
  <ul>
    {sortedTasks.map((task, index) => (
      <li
        key={index}
        className={`flex justify-between items-center mb-2 ${
          task.priority === 'High'
            ? 'bg-red-100'
            : task.priority === 'Medium'
            ? 'bg-yellow-100'
            : 'bg-green-100'
        } p-2 rounded`}
      >
        <span
          className={`flex-1 ${
            task.completed ? 'line-through text-gray-500' : ''
          }`}
          onClick={() => toggleTaskCompletion(index)}
        >
          {task.text} <span className="font-bold">({task.priority})</span>
        </span>
        <button
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => openTaskDetails(task)}
          className="ml-4 p-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          View
        </button>
        <button
          onClick={() => deleteTask(index)}
          className="ml-4 p-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
</div>



        {/* Edit Course */}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header bg-slate-400">
                <span className="modal-title fs-5" id="exampleModalLabel"><b>TodoList Details</b></span>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body bg-slate-200">
                {selectedTask && (
                    <>
                        <label className="col-form-label"><b>Date:</b> {selectedTask.date}</label>
                        <hr />
                        <label className="col-form-label"><b>Priority:</b> {selectedTask.priority}</label>
                        <hr />
                        <label className="col-form-label"><b>Description:</b> {selectedTask.text}</label>
                        <hr />
                        <label className="col-form-label"><b>Weather Type:</b> {selectedTask.weatherType}</label>
                        <hr />
                        <label className="col-form-label"><b>Weather Condition:</b> {selectedTask.weatherCondition || "N/A"}</label>
                        <hr />
                    </>
                )}
            </div>

            </div>
        </div>
        </div>
        </>

    );
  }
  

export default TodoList;




