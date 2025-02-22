import React, { useState, useContext } from 'react';

import Aside from '../../common/components/Aside';
import Select from '../../common/components/Select';
import Layout from '../../common/components/Layout';
import Main from '../../common/components/Main';
import ChartContainer from './ChartContainer';
import SummaryContainer from './SummaryContainer';
import { DataContext } from '../../context/DataContext';

const DashboardShell = () => {
  const [selectedLabel, setSelectedLabel] = useState('');
  const { updateEndpoint } = useContext(DataContext);

  const handleSelectChange = (event) => {
    const selectedLabel = event.target.selectedOptions[0].label;
    setSelectedLabel(selectedLabel);
    updateEndpoint(event.target.value);
  };

  const optionsForSelect = [
    { label: 'Sales', value: `${process.env.REACT_APP_BASE_URL}/sales/` },
    {
      label: 'Subscriptions',
      value: `${process.env.REACT_APP_BASE_URL}/subscriptions/`,
    },
  ];

  return (
    <Layout>
      <Aside>
        <h2># Polly dashboard</h2>
        <Select
          label='Please, select a chart'
          id='select-chart'
          options={optionsForSelect}
          handleChange={handleSelectChange}
        />
      </Aside>
      <Main>
        <h1>
          Welcome, <span className='bold'>learner!</span>
        </h1>
        <SummaryContainer />
        <ChartContainer selectedLabel={selectedLabel} />
      </Main>
    </Layout>
  );
};

export default DashboardShell;
