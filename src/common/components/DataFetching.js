import React from 'react';
import PropTypes from 'prop-types';

import { useFetch } from '../../hooks/useFetch';
import Loading from './Loading';

const DataFetching = ({ endpoint }) => {
  const { isLoading, data } = useFetch(endpoint);

  return isLoading ? (
    <Loading />
  ) : (
    <ul>
      {data.map((element) => (
        <li key={element.timestamp}>
          {element.timestamp} - {element.amount}
        </li>
      ))}
    </ul>
  );
};

DataFetching.propTypes = {
  endpoint: PropTypes.string.isRequired,
};

export default DataFetching;
