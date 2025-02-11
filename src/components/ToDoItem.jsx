import { useState } from "react";
import "./style.css"



function ToDoItem(props){
const[isCheck,setIsCheck]=useState(false);
  



    return(
        <>
        <div className="item-container">

        <input type="checkbox" name="" id="check" checked={isCheck} onChange={(e)=>setIsCheck(e.target.checked)}/>
        <div className="container" onClick={props.onClick}>
        <h1>{props.list.toDo}</h1>
       
            
            {isCheck?null: <button className='modify' onClick={props.onModify} >modify</button>}
           
            <button className='remove' onClick={props.onRemove}>remove</button>
            
        

        </div>


        </div>
        
        
      
        </>
    )
}
export default ToDoItem;