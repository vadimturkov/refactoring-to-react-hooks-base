import { useEffect, useReducer } from 'react';

const initialState = {
  isLoading: false,
  error: '',
  data: [],
};

function apiReducer(state, action) {
  switch (action.type) {
    case 'FECTH_DATASET_START':
      return { ...state, isLoading: true };
    case 'FETCH_DATASET_ERROR':
      return { ...state, isLoading: false, error: action.payload };
    case 'FETCH_DATASET_SUCCESS':
      return { ...state, isLoading: false, error: '', data: action.payload };
    default:
      return state;
  }
}

export function useFetch(endpoint) {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  useEffect(() => {
    if (!endpoint) return;

    const fetchData = async () => {
      dispatch({ type: 'FETCH_DATASET_START' });

      try {
        const response = await fetch(endpoint);
        const json = await response.json();
        dispatch({ type: 'FETCH_DATASET_SUCCESS', payload: json });
      } catch (error) {
        dispatch({ type: 'FETCH_DATASET_ERROR', payload: error.message });
      }
    };

    fetchData();
  }, [endpoint]);

  return state;
}
