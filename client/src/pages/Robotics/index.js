import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import { getAllArtist } from '../../api/requiests'
const Robotics = () => {
    const [ robot,setRobot]=useState([])
    useEffect(()=>{
        getAllArtist().then((res)=>{
            setRobot(res)
        })
    },[])
  return (
    <>
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",marginTop:"60px",flexDirection:"column"}}>
        {robot && robot.map((rob)=>{
          return <>
          <Card
    style={{
      width: 300,
    }}
  >
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src={rob.imageURL} alt=''/>
    </div>
    <h3>{rob.names}</h3>
    <p>{rob.title}</p>
    
 
  </Card>
          </>
      
        } )}
    </div>
    </>
  )
}

export default Robotics