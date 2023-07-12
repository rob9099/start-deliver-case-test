import "./home.css"
import Header from "../../components/header/Header"
import {reportDataType} from "../../models/reportDataType"
import Chart from "chart.js/auto"
import {Bar} from "react-chartjs-2"
import {useEffect, useState} from "react"
import {CategoryScale} from "chart.js"
import Loader from '../../components/loader/Loader'

Chart.register(CategoryScale)

const Home = () => {

   const [loaded, setLoaded] = useState(false)

   const [chart, setChart] = useState([])
   let seats = 0
   let arr = 0
   let convertNumberFormat = ""

   const mainDataCalc = () => {
      chart.map((data:reportDataType) => {
         seats += data.seats
         arr += data.arr
         convertNumberFormat = Intl.NumberFormat("en", {
            notation: "compact"
         }).format(arr)
      })
   }

   const convertMonths = (month:any) => {
    let slicedMonth = month.slice(5,7)
    const date = new Date()
    date.setMonth(slicedMonth - 1)
    return date.toLocaleString('en-US', { month: 'short' })
   }

   useEffect(() => {
    fetch("https://startdeliver-mock-api.glitch.me/report")
    .then((response) => response.json())
    .then((data) => {
        setChart(data.data)
        setLoaded(true)
    })
    .catch((error) => {
        console.error("Error fetching report data:", error)
    })
   }, [])
   mainDataCalc()

   let data = {
      labels: chart?.map((data:reportDataType) => convertMonths(data.month) + " " + data.month.slice(0,4)),
      datasets: [
         {
            label: "NEW ARR PER MONTH",
            data: chart?.map((data:reportDataType) => data.arr),
            borderWidth: 1,
            backgroundColor: '#2050fe',
         }
      ]
   }
   Chart.defaults.color = "#a4aabd";
   let options = {
      plugins: {
         legend: {
            labels: {
               font: {
                   size: 14,
                   weight: 'bold'
               }
           },
            align: 'start'
         }
      },
      scales: {
         y: {
            beginAtZero: true,
            display: false,
            grid: {
               display: false
            }
         },
         x: {
            grid: {
               display: false
            },
            border: {
               display: false
            },
            ticks: {
               align: 'end'
            }
         }
      }
    }

    return (
      <>
         <Header />
         <div className="home-container">
            <h1>Home</h1>
            {loaded?
               <>
                  <article className="data-titles">
                     <p><b>ARR</b></p>
                     <p><b>SEATS</b></p>
                  </article>
                  <article className="data-stats">
                     <p>${convertNumberFormat}</p>
                     <p>{seats}</p>
                  </article>
                  <article className="chart-container">
                     <Bar data={data} /*options={options}*/ />
                  </article>
               </>
            :<Loader />
            }
         </div>
      </>
   )
}
export default Home