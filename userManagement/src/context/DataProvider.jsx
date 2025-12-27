import React, { createContext, useEffect, useState } from 'react'
import { getUsersFromLS, setUsersToLS } from '../utils/LocalStorage';

export const DataContext = createContext();

const DataProvider = ({children}) => {
  const [user, setUser] = useState([]);

  useEffect(()=> {
    setUser(getUsersFromLS())
  }, [])

  useEffect(()=> {
    if(user.length) {
      setUsersToLS(user)
    }
  }, [user])

  return (
    <DataContext.Provider value={[user, setUser]}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider