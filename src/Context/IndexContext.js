import React,{useState,createContext} from 'react';
// import {useTodos} from '../CustomHooks-Firebase/CustomTodosFirebase';
// import {useProjects} from '../CustomHooks-Firebase/CustomProjectsFirebase';

import {useCustomTodosFirebase} from '../CustomHooks-Firebase/CustomTodosFirebase';
import {useCustomProjectsFirebase} from '../CustomHooks-Firebase/CustomProjectsFirebase';


const IndexContext=createContext();

const IndexContextProvider = ({children}) => {
    const defaultSelectedOProject='Today';
    const [selectedProject,setSelectedProject]=useState(defaultSelectedOProject);
    var todos=useCustomTodosFirebase();
    const projectsItems=useCustomProjectsFirebase(todos);

    console.log(projectsItems)
    
  

  return (
    <IndexContext.Provider value={{selectedProject,setSelectedProject,todos,projectsItems}}>
        {children}
    </IndexContext.Provider>
  )
}

export  { IndexContext, IndexContextProvider}