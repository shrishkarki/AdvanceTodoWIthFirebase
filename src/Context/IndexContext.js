import React,{useState,createContext} from 'react';
// import {useTodos} from '../CustomHooks-Firebase/CustomTodosFirebase';
// import {useProjects} from '../CustomHooks-Firebase/CustomProjectsFirebase';

import {useCustomTodosFirebase} from '../CustomHooks-Firebase/CustomTodosFirebase';
import {useCustomProjectsFirebase} from '../CustomHooks-Firebase/CustomProjectsFirebase';


const IndexContext=createContext();

const IndexContextProvider = ({children}) => {
    const defaultSelectedOProject='Today';
    const [selectedProject,setSelectedProject]=useState(defaultSelectedOProject);
    const todos=useCustomTodosFirebase();
    const projects=useCustomProjectsFirebase(todos);
    
    console.log(todos)
    console.log(projects)

  return (
    <IndexContext.Provider value={{selectedProject,setSelectedProject,todos,projects}}>
        {children}
    </IndexContext.Provider>
  )
}

export  { IndexContext, IndexContextProvider}