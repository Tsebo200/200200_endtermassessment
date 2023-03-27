import React from 'react';
import { Link } from 'react-router-dom';
import BarGraph from './Charts/BarGraph';
import LineGraph from './Charts/LineGraph';
import BarGraphTwo from './Charts/BarGraphTwo';
import '../styles/styles.sass'

function Maps() {
  return (
    <>
   <center><h1>Maps Page</h1></center>
    {/* <Link to="/"><p>Maps</p></Link>  */}     {/* This is the Link to */}
     <BarGraph/>
     <BarGraphTwo/>
     <LineGraph/>
    </>
 

  )
}

export default Maps