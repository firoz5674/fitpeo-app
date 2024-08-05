import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart2 = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Monthly Sales ($)',
        data: [12000, 15000, 18000, 20000, 17000, 22000, 24000],
        backgroundColor: '#688cf8',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 0,
        borderRadius: 10,
        padding: 10,
        height: 200,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Sales Data',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='bar-chart'>
      <h2>Activity</h2>
      <Bar data={data} options={options} />;
    </div>
  )
};

export default BarChart2;
