import React from 'react'

export default function Student(props) {
  return (<button style={{
    width:200,
    marginBottom:10,
    background:props.index % 2 === 0 ? "#CCC" : "#ccfc",
    color:"#FFF",
    padding:10,
    borderRadius:7,
    border:0
  }}>
    {props.student.firstname}
    {props.student.lastname}
  </button>
    
  )
}

