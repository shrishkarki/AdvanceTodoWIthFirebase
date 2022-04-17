import {useEffect, useState} from 'react';
import {db} from '../Firebase/IndexFirebase';


export const useCustomTodosFirebase = () => {
  const [todos,setTodos]=useState([]);

   
  useEffect(()=>{
    let unsubscribe=db.firestore.collection("todos").onSnapshot(snapshot=>{
      const data=snapshot.docs.map(doc=>{
        return{
          id:doc.id,
          ...doc.data()    
         }
      })
      setTodos(data);
    })
     return()=> unsubscribe() 
  })

  return {todos}
   
  
}

