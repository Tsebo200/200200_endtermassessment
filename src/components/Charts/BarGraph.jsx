import React from 'react'
import {Bar} from 'react-chartjs-2';
import { UserData } from '../../Data/Data';

import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale, BarElement } from 'chart.js';
ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);


function BarGraph() {

  // const investorsData = UserData.map(data)         Tried to dynamically load content

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );


  
   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = ['2016', '2017', '2018', '2019', '2020'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'My Gains',

        // data: [59, 80, 81, 56, 55, 40],
        data: UserData.map((data)  => data.userGain),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
   
    ],
  };

  return <Bar options={options} data={data}/>
  
}

export default BarGraph