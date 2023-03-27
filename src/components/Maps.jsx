import React from 'react';
import { Link } from 'react-router-dom';
import BarGraph from './Charts/BarGraph';
import LineGraph from './Charts/LineGraph';

function Maps() {
  return (
    <>
   
    <Link to="/"><p>Maps</p></Link>
     <BarGraph/>
     <LineGraph/>
    </>
 

  )
}

export default Maps