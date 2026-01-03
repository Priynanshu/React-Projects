import React, { createContext, useEffect, useState } from 'react'
import { getDataToLS, setDataToLS } from '../hooks/useLocalStorage'

export const TaskDataContext = createContext()

const TaskProvider = ({ children }) => {
  const [taskData, setTaskData] = useState([])
  // localStorage.clear()

  useEffect(() => {
    setTaskData(getDataToLS())
  }, [])

  useEffect(() => {
    if (taskData.length) {
      setDataToLS(taskData)
    }
  }, [taskData])

  return (
    <TaskDataContext.Provider value={[taskData, setTaskData]}>
      {children}
    </TaskDataContext.Provider>
  )
}

export default TaskProvider