import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2'
import Chart from "chart.js/auto";

import { CategoryScale } from "chart.js";


Chart.register(CategoryScale);

function ChartPage() {
  const [orders,setOrders]=useState([])
  const [chartData,setChartData]=useState(null)
 

  const fetchOrders= async()=>{
    try{
      const response =await axios.get('http://localhost:8080/orders/data')
      console.log(response.data.Orders)
      setOrders(response.data.Orders)
     
      
      
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchOrders()

    
  },[])

 useEffect(()=>{
  if(orders.length>0){
    const ordersByDate = orders.reduce((acc, order) => {
      const orderDate = new Date(order.createdAt).toLocaleDateString(); // Format the date
      if (!acc[orderDate]) {
        acc[orderDate] = 1; // First occurrence of this date
      } else {
        acc[orderDate] += 1; // Increment the count for this date
      }
      return acc;
    }, {});
    setChartData({
      labels:Object.keys(ordersByDate),
      datasets: [
        {
          label: 'Total Orders report by Date',
          data:Object.values(ordersByDate),
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
        },
      ],
    })
  }
 },[orders])

  return (
    <div>
            <h2 className="text-gray-500 text-lg font-Roboto ml-3 mt-1 tracking-wider">Orders Overview</h2>
            <div className="px-4 py-3 bg-light-brown w-64 rounded-lg mx-4 my-5">

<h3 className="text-white-color font-Poppins">Total Revenues </h3>
<h1 className="text-white-color font-Poppins font-bold text-4xl mx-10 mt-2 ">$ {orders.reduce((acc,curr)=>acc + curr.totalAmount,0)}</h1></div>
          <div style={{width:"600px",height:"400px"}}> {chartData ? ( // Conditional rendering to ensure chartData is available
        <Line
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Total Orders',
                },
              },
              x: {
                title: {
                  display: true,
                  text: 'Orders per Date',
                },
              },
            },
            plugins: {
              legend: {
                display: true,
                position: 'top',
              },
            },
          }}
        />
      ) : (
        <p>Loading chart data...</p> // Loading message if chartData is not yet available
      )}</div> 
        </div>
  )
}

export default ChartPage
