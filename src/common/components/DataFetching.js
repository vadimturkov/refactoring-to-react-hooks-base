import React from 'react';
import PropTypes from 'prop-types';

import { useFetch } from '../../hooks/useFetch';
import Loading from './Loading';

const DataFetching = ({ endpoint }) => {
  const { isLoading, error, data } = useFetch(endpoint);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>Ops! Something went wrong: {error}</p>;
  }

  return (
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
