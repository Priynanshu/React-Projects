import React, { createContext, useEffect, useState } from 'react'
import { getTaskFromLS, setTaskFromLS } from '../utils/TaskLocalStorage'

export const TaskContext = createContext()

const TaskProvider = ({children}) => {
    const [taskData, setTaskData] = useState([])

    useEffect(() => {
      setTaskData(getTaskFromLS())
    }, [])

    useEffect(() => {
        if(taskData.length) {
            setTaskFromLS(taskData)
        }
    }, [taskData])
    
  return (
    <TaskContext.Provider value={[taskData, setTaskData]}>
        {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider