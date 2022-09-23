import { useEffect, useState } from 'react';
import { taskAPI } from './api';
import { List } from './components/Task';
import { Task } from './types';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    taskAPI.fetch().then((_tasks: Task[]) => {
      setTasks(_tasks);
      setIsLoading(false);
    });
  }, []);

  const updateTask = (id: number, type: 'complete' | 'favorite') => {
    const tempTasks = [...tasks];
    const index = tempTasks.findIndex(({ id: _id }) => _id === id);
    if (index !== -1) {
      const task = tempTasks[index];
      if (type === 'complete') {
        task.isComplete = !task.isComplete;
      } else {
        task.isFavorite = !task.isFavorite;
      }
      setTasks(tempTasks);
    }
  };

  return (
    <div>
      <List
        tasks={tasks}
        isLoading={isLoading}
        onComplete={(id) => updateTask(id, 'complete')}
        onFavorite={(id) => updateTask(id, 'favorite')}
      />
    </div>
  );
}

export default App;
