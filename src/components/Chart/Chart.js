import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {
  const dataPointsValues = props.dataPoints.map(dataPoints => dataPoints.value)
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar 
          key={dataPoint.label} 
          value={dataPoint.value} 
          maxValue={totalMaximum} 
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;