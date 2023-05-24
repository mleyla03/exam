import React from 'react'
import Style from "./index.module.css"
import Grid from '@mui/material/Grid';





const News = () => {
  return (
    <>
       <div className={Style.feature} >
       <div className={Style.fea}>
       <h1 >Some Features that Made us Unique</h1>
       <p >Who are in extremely love with eco friendly system.</p>
       </div>
       <Grid container spacing={2} style={{display:"flex", justifyContent:"center",alignItems:"center",margin:"0px auto"}} columns={12}>
        <Grid className={Style.rights} item lg={6} md={12} sm={12} xs={12}>
      
        <img src='https://preview.colorlib.com/theme/robotics/img/b1.jpg' alt=''/>
        <div class="detais">

        <button className={Style.buttons}>Travel</button> <button className={Style.buttons}>Life Style</button>
<a href="#"  style={{textDecoration:"none",color:"black"}}><h4>Portable latest Fashion for young women</h4></a>
<p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
</p>
<p class="date">31st January, 2018</p>
</div>
        </Grid>
       
      <Grid className={Style.rights} item lg={6} md={12} sm={12} xs={12}>
       
        <img src='https://preview.colorlib.com/theme/robotics/img/b2.jpg' alt=''/>
        <div class="detais">
        <button className={Style.buttons}>Travel</button> <button className={Style.buttons}>Life Style</button>
<a href="#" style={{textDecoration:"none",color:"black"}}><h4>Portable latest Fashion for young women</h4></a>
<p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
</p>
<p class="date">31st January, 2018</p>
</div>
       
        </Grid>


      </Grid>
    
    </div>
    </>
  )
}

export default News