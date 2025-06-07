import type {TaskListItemProps} from "../types.ts";
import {useState} from "react";
import {CheckSquare, Edit, Save, Square, Trash, X} from "lucide-react";

const TaskListItem = ({task, dispatch}: TaskListItemProps) => {
    const [isEdit, setIsEdit] = useState(false);
    const [text, setText] = useState(task.text);

    const handleCancelEdit = () => {
        setText(task.text);
        setIsEdit(false);
    }

    const handleSubmitEdit = () => {
        if (text === "") return;
        dispatch({
            type: "EDIT", payload: {
                id: task.id,
                text: text,
            }
        })
        setIsEdit(false);
    }

    const handleDelete = () => {
        dispatch({
            type: "DELETE", payload: task.id
        })
    }

    const handleCompleteTask = () => {
        dispatch({
            type: "COMPLETE", payload: task.id
        })
    }

    return (
        <>
            <li key={task.id}
                className={`${task.completed ? "opacity-70" : ""} w-full h-12 flex justify-between gap-x-2 bg-gray-100 rounded-md text-sm font-medium leading-tight p-2`}
                >
                {isEdit ? (
                    <>
                    <input
                        className="flex-1 p-2 border rounded-md"
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                        <div className="flex gap-x-2">
                            <button onClick={handleSubmitEdit}>
                                <Save size={16} />
                            </button>
                            <button onClick={handleCancelEdit}><X size={16} className="text-red-500"/></button>
                        </div>
                    </>
                    ) : (
                    <>
                        <div className="flex-1 flex gap-x-2 items-center">
                            <button onClick={handleCompleteTask}>
                                {task.completed ? (
                                    <CheckSquare size={16} className="text-green-500"/>
                                ) : (
                                    <Square size={16} className="text-green-500"/>
                                )}
                            </button>
                            <span className={`${task.completed ? "line-through" : ""} block max-w-[300px] overflow-hidden text-ellipsis whitespace-nowrap`}>{task.text}</span>
                        </div>
                        <div className="flex gap-x-2">
                            <button onClick={() => setIsEdit(true)}><Edit size={16} /></button>
                            <button onClick={handleDelete}><Trash className="text-red-500" size={16}/></button>
                        </div>
                    </>
                ) }
            </li>
        </>
    )
}

export default TaskListItem;