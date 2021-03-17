import './App.css';
import { Provider } from 'react-redux';
import store from '../reducers/store';
import Spice from './spice';

function App() {
  return (
    <Provider store={store}>
      <Spice />
      Capstone
    </Provider>
  );
}

export default App;
