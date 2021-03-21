import './App.css';
import { Provider } from 'react-redux';
import store from '../reducers/store';
import Meal from '../containers/Meal';

function App() {
  return (
    <Provider store={store}>
      <Meal />
      Capstone
    </Provider>
  );
}

export default App;
