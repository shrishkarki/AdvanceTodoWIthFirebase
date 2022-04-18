import {useEffect, useState} from 'react';
import {db} from '../Firebase/IndexFirebase';

import { collection , getDocs } from "firebase/firestore";

const todosCollectionRef=collection(db, "todos");


export const useCustomTodosFirebase = () => {
  const [todos,setTodos]=useState([]);

   
  // useEffect(()=>{
  // //   let unsubscribe=db.firestore.collection("todos").onSnapshot(snapshot=>{
  // //     const data=snapshot.docs.map(doc=>{
  // //       return{
  // //         id:doc.id,
  // //         ...doc.data()    
  // //        }
  // //     })
  // //     setTodos(data);
  // //   })
  // //    return()=> unsubscribe() 
  // // })

  // // return {todos}

  useEffect(()=>{
    getTodos();
  },[]);

  const getTodos=async()=>{
  const data=await getDocs(todosCollectionRef);
  // console.log(data.docs)
  setTodos(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
  }

   
  return todos
}

