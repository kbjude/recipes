import data from './data'

const Reducer = (state = data.initialState, action) => {
  const newState = { ...state };
  return newState;
};

export default Reducer;