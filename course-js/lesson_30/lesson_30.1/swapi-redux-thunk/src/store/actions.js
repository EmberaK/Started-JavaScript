export const fetchSWAPIData = () => async (dispatch) => {
    dispatch({ type: 'FETCH_DATA_START' });
  
    try {
      const response = await fetch('https://swapi.dev/api/people/');
      const data = await response.json();
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data.results });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', payload: error });
    }
  };
  
  export const clearTODO = () => ({
    type: 'CLEAR_TODO',
  });
  