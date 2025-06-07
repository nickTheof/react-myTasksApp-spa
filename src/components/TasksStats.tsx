import type {TaskProps} from "../types.ts";

const TasksStats = ({tasks}: {tasks: TaskProps[]}) => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const activeTasks = totalTasks - completedTasks;

    return (
        <>
            <div className="flex justify-between border-t pt-2 mt-4 text-cf-gray">
                <span>Total: {totalTasks}</span>
                <span>Active: {activeTasks}</span>
                <span>Completed: {completedTasks}</span>
            </div>
        </>
    )
}

export default TasksStats;