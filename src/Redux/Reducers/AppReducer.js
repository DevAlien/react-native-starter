export const appActionTypes = {
  APP_LOADED: 'APP_LOADED',
  APP_LOAD: 'APP_LOAD',
  APP_RESET: 'APP_RESET',
};

const initialState = {
  loaded: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case appActionTypes.APP_LOADED:
      return {
        ...state,
        loaded: true,
      };
    case appActionTypes.APP_RESET:
      return initialState;
    default:
      return state;
  }
};

export default appReducer;
