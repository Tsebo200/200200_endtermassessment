import React from 'react'
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { UserData } from '../../Data/Data';
  
  




function LineGraph() {

 

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
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
            text: 'Chart.js Line Chart',
          },
        },
      };
      // const investorsData = 
      
      const labels = ['2016', '2017', '2018', '2019', '2020'];
      // let myYear = UserData.map(labels);
       const data = {
        labels,
        datasets: [
          {
            // label: myYear.data.year,
            label: 'My Revenue',
            data: UserData.map((data)  => data.Revenue),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
       
        ],
      };
     

    return <Line options={options} data={data} />;
}

export default LineGraph