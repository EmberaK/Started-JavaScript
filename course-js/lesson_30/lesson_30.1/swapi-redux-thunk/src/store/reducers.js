const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  export const swapiReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA_START':
        return { ...state, loading: true, error: null };
      case 'FETCH_DATA_SUCCESS':
        return { ...state, loading: false, data: action.payload };
      case 'FETCH_DATA_FAILURE':
        return { ...state, loading: false, error: action.payload };
      case 'CLEAR_TODO':
        return { ...state, data: [] };
      default:
        return state;
    }
  };
  