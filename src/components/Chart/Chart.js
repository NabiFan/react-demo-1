import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart({ dataPoints }) {
  const dataPointsValues = dataPoints.map(item=>item.value);
  const maxDataPoint = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxDataPoint}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
