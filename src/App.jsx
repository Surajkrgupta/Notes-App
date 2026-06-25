import React, { useState } from 'react'

export default function App() {
  const submitHandler=(e)=>{
    e.preventDefault();
    const copyTask=[...task];
    copyTask.push({title,detail});
    setTask(copyTask);
    setTitle('');
    setDetail('');
  };
  const deleteN=(i)=>{
    const copyTask=[...task];
    copyTask.splice(i,1);
    setTask(copyTask);

  }
  const [title,setTitle]=useState('');
  const [detail,setDetail]=useState('');
  const [task,setTask]=useState([]);

  return (
    <div>
      <form onSubmit={(e)=>{submitHandler(e)}} className='flex justify-between p-10'>
        <input type="text" placeholder='Enter Notes Title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <textarea name="" id="" placeholder='Enter Notes' value={detail} onChange={(e)=>{setDetail(e.target.value)}}></textarea>
        <button type='submit' >Save</button>
      </form>
      <div>
        <h1>Recent Notes</h1>
        <div>
          {task.map((elem,i)=>{
            return <div className='h-32 w-32 rounded-2xl bg-white'>
              <p>title {elem.title}</p>
              <br />
              <p>{elem.detail}</p>
              <button onClick={deleteN(i)}>Delete</button>
            </div>
            
          })}
          
        </div>

        </div>
      </div>
  )
}
