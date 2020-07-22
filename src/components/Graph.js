import React, { useState, useEffect } from "react"
import { Line } from "react-chartjs-2"
import axios from "axios"

function Graph() {
  const [chartData, setChartData] = useState({})

  const chart = () => {
    let x = JSON.parse(localStorage.getItem("curr"))[0]
    x = x.email
    let title = []
    let amount = []

    axios
      .get(`http://localhost:3004/${x}`)
      .then((res) => {
        console.log(res.data)

        for (const dataObj of res.data) {
          title.push(dataObj.title)
          amount.push(parseInt(dataObj.amount))
        }
        setChartData({
          labels: title,
          datasets: [
            {
              label: "Incomes/Expenses",
              data: amount,
              backgroundColor: ["rgb(112,128,144)"],
              borderWidth: 4,
            },
          ],
        })
      })
      .catch((err) => {
        console.log(err)
      })
    
  }

  useEffect(() => {
    chart()
  }, [])
  return (
    <div>
      <h3>Incomes/Expenses Graph</h3>
      <div>
        <Line data={chartData} />
      </div>
    </div>
  )
}

export default Graph
