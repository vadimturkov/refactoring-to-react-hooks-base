import React, { useState } from 'react';

import DashboardShell from './features/Dashboard/DashboardShell';
import { useFetch } from './hooks/useFetch';

export const globalContext = React.createContext();
const { Provider } = globalContext;

const App = () => {
  const [endpoint, setEndpoint] = useState('');
  const data = useFetch(endpoint);

  return (
    <Provider value={data}>
      <DashboardShell fetchDataset={setEndpoint} />
    </Provider>
  );
};

export default App;
