
import './App.css';
import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewIceCreamContainer from './components/NewIceCreamContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
    <ItemContainer  cake/>
    <ItemContainer/>
     <CakeContainer/>
     <HookCakeContainer/>
     <IceCreamContainer/>
     <NewIceCreamContainer/>
    </div>
    </Provider>
  );
}

export default App;
