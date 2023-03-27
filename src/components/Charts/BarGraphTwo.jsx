import React from 'react'
import {Bar} from 'react-chartjs-2';
import { UserData } from '../../Data/Data';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale, BarElement } from 'chart.js';
ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);


function BarGraphTwo() {
  return (
    <div>BarGraphTwo</div>
  )
}

export default BarGraphTwo