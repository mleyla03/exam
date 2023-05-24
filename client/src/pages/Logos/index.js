import React from 'react'
import Style from "./index.module.css"
import Grid from '@mui/material/Grid';



const Logos = () => {
  return (
    <>
            <Grid container spacing={2} style={{display:"flex", justifyContent:"center", alignItems:"center",margin:"80px auto"}} columns={12}>
        <Grid className={Style.rights} item lg={2} md={6} sm={12} xs={12}>
         <img src='https://preview.colorlib.com/theme/robotics/img/l1.png' alt=''/>
       
    
        </Grid>
        <Grid className={Style.rights} item lg={2} md={6} sm={12} xs={12}>
        <img src='https://preview.colorlib.com/theme/robotics/img/l2.png' alt=''/>
        </Grid>
      <Grid className={Style.rights} item lg={2} md={6} sm={12} xs={12}>
      <img src='https://preview.colorlib.com/theme/robotics/img/l3.png' alt=''/>
        </Grid>
        
        
        <Grid className={Style.rights} item lg={2} md={6} sm={12} xs={12}>
        <img src='https://preview.colorlib.com/theme/robotics/img/l4.png' alt=''/>
        </Grid>
           
        <Grid className={Style.rights} item lg={2} md={6} sm={12} xs={12}>
        <img src='https://preview.colorlib.com/theme/robotics/img/l5.png' alt=''/>
        </Grid>
        </Grid>
    </>
  )
}

export default Logos