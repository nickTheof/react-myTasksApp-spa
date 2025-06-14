import type {TasksListProps} from "../types.ts";
import TaskListItem from "./TaskListItem.tsx";

const TasksList = ({tasks, dispatch, ref}: TasksListProps) => {
    return (
        <>
            <ul className="flex flex-col gap-2">
                {tasks.map((task) => (
                    <TaskListItem task={task} dispatch={dispatch} ref={ref}/>
                ))}
            </ul>
        </>
    )
}

export default TasksList;