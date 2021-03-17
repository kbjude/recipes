import './App.css';
import { Provider } from 'react-redux';
import store from './reducers/store';

function App() {
  return (
    <Provider store={store}>
      Capstone
    </Provider>
  );
}

export default App;
