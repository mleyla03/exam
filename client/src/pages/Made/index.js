import * as React from 'react';

import Box from '@mui/material/Box';
import Style from "./index.module.css"
import Grid from '@mui/material/Grid';

const Made = () => {
  return (
    <>
    <Box  style={{marginTop:"120px"}}>
      <Grid container spacing={2} style={{marginTop:"100px",display:"flex", justifyContent:"space-between", width:"90%",margin:"0 auto"}} columns={12}>
        <Grid className={Style.rights} item lg={6} md={5} sm={12} xs={12}>
        <span >BRAND NEW APP TO BLOW YOUR MIND</span>
          <h3 className={Style.one}>We’ve made a lifethat will change you</h3>
          <p className={Style.two}>We are here to listen from you deliver exellence</p>
          <p  className={Style.end}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmo d tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className={Style.buttons}>Get Started</button>
        </Grid>
        <Grid className={Style.paragraf} item lg={5} md={4} sm={12} xs={12}>
           <img src='https://preview.colorlib.com/theme/robotics/img/video-bg.jpg.webp'  style={{width:"450px",height:"300px"}} alt=''/>
        </Grid>
      </Grid>
    </Box>
    
    </>
  )
}

export default Made