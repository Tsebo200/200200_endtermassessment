import React from 'react';
import { Link } from 'react-router-dom';
import BarGraph from './Charts/BarGraph';
import LineGraph from './Charts/LineGraph';
import BarGraphTwo from './Charts/BarGraphTwo';
import '../styles/styles.sass';
import '../styles/map.sass';


function Maps() {
  return (
    <>
   <center><h1>Maps Page</h1></center>
    {/* <Link to="/"><p>Maps</p></Link>  */}     {/* This is the Link to */}

    <div className='bar-chart-box'>
    <BarGraph/>
    </div>
   
    <div className='bar-chart-two-box'>
    <BarGraphTwo/>
    </div>

    <div className='line-chart-box'>
     <LineGraph/>
     </div>
 
    </>
 

  )
}

export default Maps