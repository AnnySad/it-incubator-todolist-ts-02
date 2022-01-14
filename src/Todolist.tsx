import React, {useState} from 'react';
import {filterType} from "./App";


type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTasks: (taskID: number) => void
    filteredTasks?: (filterValue: filterType) => void

}


export function Todolist(props: PropsType) {

    const [filter, setFilter] = useState<filterType>('ALL')

    let filteredT = props.tasks
    if (filter === 'Active') {
        filteredT = filteredT.filter(f => f.isDone)
    }
    if (filter === 'Completed') {
        filteredT = filteredT.filter(f => !f.isDone)
    }


    const filteredTasks = (filterValue: filterType) => {
        setFilter(filterValue)
        console.log(filterValue)
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {filteredT.map((m, i) => {
                return (
                    <li key={i}>
                        <button onClick={() => props.removeTasks(m.id)}>X</button>
                        <input type="checkbox" checked={m.isDone}/>
                        <span>{m.title}</span>
                    </li>
                )
            })}

        </ul>
        <div>
            <button onClick={() => filteredTasks('ALL')}>All</button>
            <button onClick={() => filteredTasks('Active')}>Active</button>
            <button onClick={() => filteredTasks('Completed')}>Completed</button>
        </div>

    </div>
}
