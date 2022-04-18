import {useEffect, useState} from 'react';
import { db } from '../Firebase/IndexFirebase';
import { collection,  getDocs } from 'firebase/firestore';





export let useCustomProjectsFirebase = (todos) => {
    const [project,setProject]=useState([]);
   
   
    const calculateNumOfTodos=(projectName,todos)=>{
        return todos.filter(todo=>todo.projectName===projectName).length
    
}





    const projectCollectionRef=collection(db, "project");
    
    useEffect(()=>{
        getProject();
    },[todos]);

    const getProject=async()=>{
        
        const data=await getDocs(projectCollectionRef);
        // console.log(data.docs.data());
        setProject(data.docs.map((doc)=>(
            // {console.log(doc.data().name)}
            {...doc.data(),
            id:doc.id,
            numOfTodos:calculateNumOfTodos(doc.data().name,todos)
        })))

        // console.log(data.docs.map((d)=>d.data().name))

        




    }

    return project

    }