import './App.css';
import { Provider } from 'react-redux';
import store from '../reducers/store';
import Spice from '../containers/Spice';

function App() {
  return (
    <Provider store={store}>
      <Spice />
      Capstone
    </Provider>
  );
}

export default App;
