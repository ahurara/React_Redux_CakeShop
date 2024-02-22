
import './App.css';
import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
     <CakeContainer/>
     <HookCakeContainer/>
     <IceCreamContainer/>
    </div>
    </Provider>
  );
}

export default App;
