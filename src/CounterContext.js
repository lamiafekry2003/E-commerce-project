import { createContext, useState } from "react";

export const counterContext=createContext(0)
// to create context
export function CounterContextProvider({children}){
    // fun to provide app with context

    const [counter,setCounter]=useState(1)
    // consider it is data

    return <counterContext.Provider value={{counter,setCounter}}>
        {children}
    </counterContext.Provider>
}