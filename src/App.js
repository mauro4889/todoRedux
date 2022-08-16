import './App.css';
import { Card } from './components/card/Card';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Card></Card>
    </Provider>    
  );
}

export default App;
