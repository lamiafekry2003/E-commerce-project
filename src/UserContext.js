import { createContext, useState } from "react";

export const userContext = createContext(null)

export function UserContextProvider({children}){

  const [user,setIsUser] = useState(null)
  const [login,setLogin] = useState(null)
  const [open,setOpen] = useState(false)

  return(
    <userContext.Provider value={{user,setIsUser,login,setLogin,open,setOpen}}>
       {children}
    </userContext.Provider>

  )
}