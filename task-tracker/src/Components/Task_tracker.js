import React, { useState, useEffect } from "react";
import Task_List from "./Task_List";

function Task_tracker() {
    const [tasks, setTasks] = useState({
        task: "",
        date: "",
        description: "",
    });

    const [taskList, setTaskList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const handleInput = (e) => {
        setTasks({
            ...tasks,
            [e.target.name]: e.target.value,
        });
    };

    const addTask = (e) => {
        e.preventDefault();
        if (tasks.task === "" || tasks.date === "") {
            alert("Please fill all the fields!");
        } else if (editIndex !== null) {
            const updatedTasks = [...taskList];
            updatedTasks[editIndex] = tasks;
            setTaskList(updatedTasks);
            setEditIndex(null);
        } else {
            setTaskList([...taskList, tasks]);
            localStorage.setItem("tasks", JSON.stringify([...taskList, tasks]));
        }
        setTasks({
            task: "",
            date: "",
            description: "",
        });
    };

    const deleteTask = (index) => {
        const newTaskList = taskList.filter((_, i) => i !== index);
        setTaskList(newTaskList);
        localStorage.setItem("tasks", JSON.stringify(newTaskList));
    };

    const editTask = (index) => {
        setTasks(taskList[index]);
        setEditIndex(index);
    };

    const handleComplete = (index) => {
        const newTasks = [...taskList];
        if (!newTasks[index].completed) { 
            newTasks[index].completed = true;
            setTaskList(newTasks);
        }
    };

    useEffect(() => {
        const tasks = localStorage.getItem("tasks");
        if (tasks) {
            setTaskList(JSON.parse(tasks));
        }
    }, []);

    return (
        <div className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 md:space-x-5">
            <div className="bg-gray-800 bg-opacity-50 p-5 md:p-10 rounded-lg w-full md:w-[60%]">
                <form className="flex flex-col space-y-3" onSubmit={addTask}>
                    <div className="flex flex-col">
                        <label htmlFor="task" className="text-white text-start">
                            Task:
                        </label>
                        <input
                            type="text"
                            id="task"
                            name="task"
                            value={tasks.task}
                            onChange={handleInput}
                            placeholder="Enter Task"
                            className="w-full rounded-lg p-2 ring-2 ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="description" className="text-white text-start">
                            Description:
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={tasks.description}
                            onChange={handleInput}
                            placeholder="Enter Description"
                            className="w-full rounded-lg p-2 ring-2 ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="date" className="text-white text-start">
                            Date:
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={tasks.date}
                            onChange={handleInput}
                            placeholder="Enter Date"
                            className="w-full rounded-lg p-2 ring-2 ring-blue-500"
                        />
                    </div>
                    <button className="bg-gradient-to-r from-[#1A3636] to-[#677D6A] text-[1.2rem] text-white py-2 rounded-lg">
                        {editIndex !== null ? "Update Task" : "Add Task"}
                    </button>
                </form>
            </div>
            <div className="bg-gray-800 bg-opacity-50 p-5 md:px-10 md:pb-10 rounded-lg w-full">
                <h1 className="text-white text-2xl">Tasks</h1>
                <hr className="border-b-2 border-gray-600 my-2" />
                {taskList.map((task, index) => (
                    <Task_List
                        key={index}
                        task={task.task}
                        description={task.description}
                        date={task.date}
                        index={index}
                        deleteTask={deleteTask}
                        editTask={() => editTask(index)}
                        isCompleted={task.completed}
                        handleComplete={() => handleComplete(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Task_tracker;
