import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
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
    <hr/>
    <center><div className='line-chart-box'>
     <LineGraph/>
     </div></center>

    <div className="bar-container">
    <div className='bar-chart-box'>
    <BarGraph/>
    </div>

  {/* <Button/> */}
    <Button variant="light">Show/Hide</Button>
    <div className="spacer"></div>
   
    <div className='bar-chart-two-box'>
    <BarGraphTwo/>
    </div>
    </div>

   
 
    </>
 

  )
}

export default Maps