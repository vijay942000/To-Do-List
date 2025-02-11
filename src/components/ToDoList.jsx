import { useState } from "react";
import ToDoItem from "./ToDoItem";


function ToDoList(prop){



    return(
        <>
        {prop.data.map((data,index)=>{
            return <ToDoItem key={data.key} list={data} onModify={()=>{prop.onModify(index)}} onRemove={()=>{prop.onRemove(index)}}/>

        })}
        </>
    )
}
export default ToDoList;