import React, { useState } from 'react';
import { ArrowLeft, Plus } from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
}

function Dashboard({ onLogout }: DashboardProps) {
  const [tasks, setTasks] = useState([
    'Finish homework',
    'Call John',
    'Buy groceries'
  ]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-blue-50 via-white to-light-blue-100 font-open-sans">
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
        {/* Main Content Container */}
        <div className="w-full max-w-2xl">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-light-blue-600 to-light-blue-400 bg-clip-text text-transparent">
              Your Tasks
            </span>
          </h1>

          {/* Tasks List */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <ul className="space-y-4 text-lg text-gray-700">
              {tasks.map((task, index) => (
                <li key={index} className="flex items-start">
                  <span className="font-semibold text-light-blue-600 mr-3">
                    {index + 1}.
                  </span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Add New Task Form */}
          <form onSubmit={handleAddTask} className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <label htmlFor="newTask" className="block text-lg font-semibold text-gray-700">
                  New Task
                </label>
                <input
                  type="text"
                  id="newTask"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  className="w-full px-4 py-4 text-lg border-2 border-light-blue-100 rounded-xl focus:border-light-blue-400 focus:outline-none transition-colors duration-200 bg-white shadow-sm"
                  placeholder="Enter a new task"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-light-blue-500 to-light-blue-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-light-blue-600 hover:to-light-blue-700 flex items-center justify-center gap-2"
              >
                <Plus size={20} />
                Add Task
              </button>
            </div>
          </form>

          {/* Logout Button */}
          <div className="text-center">
            <button
              onClick={onLogout}
              className="px-8 py-4 bg-white text-light-blue-600 font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-light-blue-100 hover:border-light-blue-300"
            >
              Logout
            </button>
          </div>

          {/* Decorative Element */}
          <div className="mt-12">
            <div className="w-24 h-1 bg-gradient-to-r from-light-blue-400 to-light-blue-600 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Floating Elements for Visual Interest */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-light-blue-200 rounded-full opacity-60 animate-pulse hidden lg:block"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-light-blue-300 rounded-full opacity-40 animate-pulse hidden lg:block" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-light-blue-400 rounded-full opacity-50 animate-pulse hidden lg:block" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-light-blue-200 rounded-full opacity-60 animate-pulse hidden lg:block" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </div>
  );
}

export default Dashboard;