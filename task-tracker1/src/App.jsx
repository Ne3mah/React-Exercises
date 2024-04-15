import React, { useState } from 'react';
import { taskList } from './data';
import Task from './components/Task';
import { Container } from 'react-bootstrap';

const App = () => {
  console.log("Render App Component");
  const [tasks, setTasks] = useState(taskList);

  const deleteTask = (taskId) => {
    console.log(taskId)
    const newTasks = tasks.filter((task) => task.id!== taskId);
    console.log(newTasks)
    setTasks(newTasks);
  }
  return (
    <Container style={{ display: 'flex', flexWrap: 'wrap' }}>
      {tasks.map((task) => (
        <Task key={task.id} priority={task.priority} idx={task.id} title={task.task_name} onDelete = {() => deleteTask(task.id)}/>
      ))}
    </Container>
  );
};

export default App;
