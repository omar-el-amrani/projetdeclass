import React, { useState } from 'react'
import Student from './component/studentItem'; 

const student =[{id:1,firstname:"test1",lastname:"AAA"},
    {id:2,firstname:"test2",lastname:"BBB"},
    {id:3,firstname:"test3",lastname:"CCC"},
    {id:4,firstname:"test4",lastname:"DDD"}
];
export default function Students() {
    const[vsearch,setVsearch]=useState();
  return (
    <div>
        <input  onChange={(e)=>{setVsearch(e.target.value)}}/>
    <div style={{display:'flex', flexDirection:'column'}}>
        {student.map((std,idx)=>{
            if(std.firstname.includes(vsearch)){
                 return(<Student
                key={std.id}
                student={std}
                index={idx}
                />)
            }
           
        })}
    </div>
    </div>
  )
}

