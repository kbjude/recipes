import data from './data';

const Reducer = (state = data.initialState, action) => {
  const newState = { ...state };
  if (action.type === 'LIST_RICIPES') {
    return newState;
  }

  if (action.type === 'VIEW_DETAILS') {
    return newState;
  }
};

export default Reducer;
