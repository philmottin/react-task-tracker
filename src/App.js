import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = (task) => {
    console.log(task);
    const id = Math.floor(Math.random() * 10000 + 1);
    //console.log(id);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    console.log('Delete: ', id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    console.log('Reminder: ', id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className='container'>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
}

export default App;
