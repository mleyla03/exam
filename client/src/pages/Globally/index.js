
import * as React from 'react';

import Box from '@mui/material/Box';
import Style from "./index.module.css"
import Grid from '@mui/material/Grid';
const Globally = () => {
  return (
    <>
     <Box >
      <Grid container spacing={2} style={{marginTop:"100px",display:"flex", justifyContent:"space-between"}} columns={12}>
        <Grid className={Style.rights} item lg={4} md={5} sm={12} xs={12}>
           <img src='https://preview.colorlib.com/theme/robotics/img/about-img.png' alt='' style={{ width:"643px",height:"649px"}}/>
        </Grid>
        <Grid className={Style.paragraf} item lg={5} md={4} sm={12} xs={12}>
        <h3 className={Style.one}> Globally Connected by Large Network</h3>
          <p className={Style.two}>We are here to listen from you deliver exellence</p>
          <p  className={Style.end}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
          <button className={Style.buttons}>View Details</button>
        </Grid>
      </Grid>
    </Box>
    
    </>
  )
}

export default Globally