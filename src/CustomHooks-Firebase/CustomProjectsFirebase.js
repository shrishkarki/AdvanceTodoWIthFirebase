import {useEffect, useState} from 'react';
import { db } from '../Firebase/IndexFirebase';




export const useCustomProjectsFirebase = (todos) => {
    const [project,setProjects]=useState([]);
   
    const calculateNumOfTodos=(projectName,todos)=>{
        return todos.filter(todo=>todo.projectName===projectName).length}

    
 

    useEffect(()=>{
        let unsubscribe=db.firestore().collection('project').onSnapshot(snapshot=>{
            const data=snapshot.docs.map(doc=>{
                const projectName=doc.data().name;
                return{
                    id:doc.id,
                    name:projectName,
                    numOfTodos:calculateNumOfTodos(projectName,todos)
                }
            })

                setProjects(data);

            })
            return()=>unsubscribe()
        })
         return {project}

        }