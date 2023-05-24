import React from 'react'
import Globally from '../Globally'
import Made from '../Made'
import Feature from '../Feauture'

import Style from "./index.module.css"
import Logos from '../Logos'
import News from '../News'
import Robotics from '../Robotics'
const Home = () => {
  return (
    <>
    <div className={Style.home}>
        
        <div className={Style.paragraf}>
          <p className={Style.one}> Improved Production level with Robotics</p>
          <p className={Style.two}>EVERYONE WANTS THE INNOVATION THROUGH ROBOTICS</p>
          <button className={Style.buttons}>View Details</button>
        </div>
        <div className={Style.rights}>
           <img className={Style.imgfluid} src="https://preview.colorlib.com/theme/robotics/img/banner-img.png.webp" alt=""/>
        </div>
    </div>
<Robotics/>
   <Globally/>
   <Made/>
   <Feature/>
   <Logos/>
   <News/>
    </>
  )
}

export default Home