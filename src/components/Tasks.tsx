import {useEffect, useReducer} from "react";
import type {Action, TaskProps} from "../types.ts";
import TaskForm from "./TaskForm";
import TasksList from "./TasksList.tsx";
import TasksStats from "./TasksStats.tsx";

const getInitialTasks = () => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
}

const tasksReducer = (state: TaskProps[], action: Action): TaskProps[] => {
    switch (action.type) {
        case "ADD":
            return [...state, {
                id: Date.now(),
                text: action.payload,
                completed: false
            }]
        case "DELETE":
            return state.filter(task => task.id !== action.payload)
        case "EDIT":
            return state.map(task => {
                return (task.id === action.payload.id)
                    ? {...task, text: action.payload.text}
                    : task;
            })
        case "COMPLETE":
            return state.map(task => {
                return (task.id === action.payload)
                    ? {...task, completed: !task.completed}
                    : task;
            })
        case "CLEAR_ALL":
            return []
        default:
            return state;
    }
}

const Tasks = () => {
    const [tasks, dispatch] = useReducer(tasksReducer, [], getInitialTasks);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <>
            <div className = "max-w-sm mx-auto mt-12 flex flex-col">
                <h1 className="text-center text-2xl mb-4">Tasks List</h1>
                <TaskForm dispatch={dispatch} />
                <TasksList tasks={tasks} dispatch={dispatch} />
            { tasks.length > 0 && (
                <>
                    <TasksStats tasks={tasks} />
                    <div className="text-end m-4">
                        <button
                            onClick={() => dispatch({ type: "CLEAR_ALL"})}
                            className="bg-cf-red-100 text-white py-2 px-4 rounded"
                        >
                            Clear All
                        </button>
                    </div>
                </>
            )}
            </div>
        </>
    )
}

export default Tasks;