import React, { useEffect, useState } from "react";

const App =()=>{
 const [data,setData]=useState({name:"", age:"", gender:""})
 const [formData,setFormData]=useState([])
 const [isEdit,setIsEdit]=useState(false)
 const [selectedItem,setSelectedItem]=useState(null)
 const [completedTodo,setcompletedTodo]=useState([])
 console.log(formData,"formDataformData")

console.log(completedTodo,"fddd")






  const handleSubmit = event => {
    console.log(data,'handleSubmit ran');
    
    if(isEdit){
   
      event.preventDefault();
      formData[selectedItem]=data
      setIsEdit(false)
      setData({name:"",age:"",gender:""})

    }else{
      debugger
      setcompletedTodo([])
      setIsEdit(false)
      event.preventDefault();
      const newData={id:Math.floor(Math.random() * 100),name:data.name,age:data.age,gender:data.gender}
      setFormData([...formData,newData])
      setData({name:"",age:"",gender:""})
     
    }
     
  

  };
  const handleChange=(event)=>{
    const value=event.target.value
    setData({
      ...data,
      [event.target.name]:value
    })

  }

  const handleEdit=(item,index)=>{
    setIsEdit(true)
    setSelectedItem(index)
    setData(item)

  }

   const handleDelete=(e,i)=>{
    setFormData(formData.filter((item,index)=>item!==e && index!==i))
   }

   const handleMarked=(index)=>{
    debugger;
    //setcompletedTodo([... new Set(completedTodo),index])
    if( completedTodo.includes(index)) {
      completedTodo.splice(index,1)
      setcompletedTodo(completedTodo)
      
     } else {
       setcompletedTodo([... new Set(completedTodo),index])
     }
     
   }

   const handleChecked =(index)=>{
  
   if( completedTodo.includes(index)){
    
    completedTodo.splice(index,1)
    setcompletedTodo(completedTodo)
    
   }
   }
return(
  <>
 
 <div style={{textAlign:"center",marginTop:15}}>
      <form onSubmit={handleSubmit}>
        <input
          id="first_name"
          name="name"
          type="text"
          onChange={handleChange}
          value={data.name}
        /><br/><br/>
        <input
          id="last_name"
          name="age"
          type="text"
          value={data.age}
          onChange={handleChange}
        /> <br/><br/>
         <input
          id="last_name"
          name="gender"
          type="text"
          value={data.gender}
          onChange={handleChange}
        /><br/><br/>

        <button type="submit">Submit form</button>
      </form>
    </div>
    <div style={{textAlign:"center",border:"1px solid black",marginTop:15}}>
     
      {
        formData.map((item,index)=>(
          <div key={index} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>  
          <div> 
          <input style={{textAlign:"right"}} type="checkbox" checked={completedTodo.includes(index)} onChange={()=>handleMarked(item.name)} />
         <p>{item.name} </p>  
         <p>{item.age} </p>
         <p>{item.gender} </p> 
         <hr/>
         </div>
         <div style={{display:"flex",justifyContent:"space-between"}}>
         
          <button onClick={()=>handleEdit(item,index)}>Edit</button>
          <button onClick={()=>handleDelete(item,index)}>delete</button>
          <button onClick={()=>handleMarked(index)}>marked</button>
          </div>
          </div>
         
          
        ))
      }
    </div>
  </>
)
}


export default App;