var initialState = {
    isLoading: false
  };
  
  const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_LOADING_TRUE":
        return [
          ...state,
          {
            isLoading: true
          }
        ];
      case "SET_LOADING_FALSE":
        return [
          ...state,
          {
            isLoading: false
          }
        ];
      default:
        return state;
    }
  };
  export default appReducer;