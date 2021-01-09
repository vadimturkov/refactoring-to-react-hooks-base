import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import LineChart from './LineChart';
import { globalContext } from '../../App';

const ChartContainer = ({ selectedLabel }) => {
  const { data: dataset } = useContext(globalContext);

  const chartLabels = dataset.map((dataPoint) => dataPoint.timestamp);
  const chartValues = dataset.map((dataPoint) => dataPoint.amount);

  return (
    <div>
      <LineChart chartLabels={chartLabels} chartValues={chartValues} label={selectedLabel} />
    </div>
  );
};

ChartContainer.propTypes = {
  selectedLabel: PropTypes.string.isRequired,
};

export default ChartContainer;
