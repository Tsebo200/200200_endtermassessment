import React from 'react';
import { Link } from 'react-router-dom';
import BarGraph from './Charts/BarGraph';
import LineGraph from './Charts/LineGraph';
import BarGraphTwo from './Charts/BarGraphTwo';

function Maps() {
  return (
    <>
   
    <Link to="/"><p>Maps</p></Link>
     <BarGraph/>
     <BarGraphTwo/>
     <LineGraph/>
    </>
 

  )
}

export default Maps