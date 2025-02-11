import { useState } from 'react'

import ToDoList from './components/ToDoList'
import './App.css';
import Header from './components/Header';



function App() {
  const [listData,setListData] =useState([]);
  const[inputVal,setInputVal]=useState('');
  const[index,setIndex] =useState(null);

function handleAdd(){
if(inputVal.trim() ===''){return}; //to avoid empty inputs

 let newObj = {toDo:inputVal,key:listData.length+1};

if(index !== null){
  
  let updatedList =[...listData];  //updatedList =[toDo: ,key ...]- new arr 

  updatedList[index].toDo =inputVal;
  
  setListData(updatedList); //now listData is replaced by new arr updatedList

  
  setIndex(null);
}

else{
  if(index ===null){
    //In the case of setVal(val + 1), React internally ensures that it updates the state based on the latest value even though the state update is asynchronous. But with arrays or objects, React depends on reference equality to detect changes. If you mutate an array directly (like listData.push(newObj)), React won't detect that the array has been updated and won't trigger a re-render.
        
 setListData([...listData,newObj]);

  }
}

setInputVal('');     //clear input field
 

}
//both setIndex and setinputVal make changes together in "same render" onModify click
function handleModify(index){
  setIndex(index)
  setInputVal(listData[index].toDo);
  
} 

function handleRemove(index){
 
  let removedList = listData.filter((data,dataIndex)=>{if(dataIndex !== index){return data}});
  console.log(removedList)
  setListData(removedList);

}


  return (
    
            <>
            <Header/>
           
    <div id='add-item'>
    {/* not onChange={setInputVal(e.target.value)} as it calls imediately and also we dont have to return  */}
      <input type="text" id='input'  value={inputVal} onChange={(e)=>setInputVal(e.target.value)} /> 
      <button id='btn-add' onClick={handleAdd}>{index !==null?'Modify':'Add'}</button>


    </div>
      <ToDoList data={listData} onModify={handleModify} onRemove={handleRemove} />
      
    
    </>
  )
}

export default App
