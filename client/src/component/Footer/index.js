import * as React from 'react';


import Style from "./index.module.css"
import Grid from '@mui/material/Grid';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
const Footer = () => {
  return (
    <>
    <div className={Style.footer} >
      
       <Grid container spacing={2} style={{display:"flex", justifyContent:"space-araund",margin:"0px auto"}} columns={12}>
        <Grid className={Style.rights} item lg={3} md={12} sm={12} xs={12}>
        <div className={Style.single}>
<h6>Top Products</h6>
<ul className={Style.footernav}>
<li><a href="#">Managed Website</a></li>
<li><a href="#">Manage Reputation</a></li>
<li><a href="#">Power Tools</a></li>
<li><a href="#">Marketing Service</a></li>
</ul>
</div>
              </Grid>
        <Grid className={Style.rights} item lg={5} md={12} sm={12} xs={12}>
        <div class="single-footer-widget newsletter">
<h6>Newsletter</h6>
<p className={Style.p}>You can trust us. we only send promo offers, not a single spam.</p>
<div id="mc_embed_signup">
<form target="_blank" novalidate="true" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className={Style.forminline}>
<div class="form-group row" >
<div className={Style.forms}>
<input name="EMAIL" className={Style.input} placeholder="Enter Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email '" required="" type="email"/>
<div>
<div class="col-lg-4 col-md-12">
<button class="nw-btn primary-btn">Subscribe</button>
</div>   

</div>
</div>

</div>
<div class="info"></div>
</form>
</div>
</div>
        </Grid>
        <Grid className={Style.right} item lg={4} md={12} sm={12} xs={12}>
        <div class="single-footer-widget mail-chimp">
<h6 class="mb-20">Instragram Feed</h6>
<ul className={Style.instafeed} >
<li><img src="https://preview.colorlib.com/theme/robotics/img/i1.jpg.webp" alt=""/></li>
<li><img src="https://preview.colorlib.com/theme/robotics/img/i2.jpg.webp" alt=""/></li>
<li><img src='https://preview.colorlib.com/theme/robotics/img/i3.jpg.webp' alt=""/></li>
<li><img src="https://preview.colorlib.com/theme/robotics/img/i4.jpg.webp" alt=""/></li>
<li><img src="https://preview.colorlib.com/theme/robotics/img/i5.jpg.webp" alt=""/></li>

<li><img src="https://preview.colorlib.com/theme/robotics/img/i6.jpg.webp" alt=""/></li>
<li><img src="https://preview.colorlib.com/theme/robotics/img/i7.jpg.webp" alt=""/></li>
<li><img src="https://preview.colorlib.com/theme/robotics/img/i8.jpg.webp" alt=""/></li>
</ul>
</div>
        </Grid>
       
      </Grid>
    
    </div>
 
      
 
    </>
  )
}

export default Footer