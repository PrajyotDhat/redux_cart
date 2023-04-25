import React from 'react'
import HomeContainer from './components/HomeContainer';
import { Provider } from 'react-redux';
import Store from './redux/actions/Store';
import Home from './components/Home';
import AboutContainer from './components/AboutContainer';
import NewContainer from './components/NewContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';


function App() {
  return (
    <Provider store={Store}>
    <div>
    {/* <UserContainer/> */}
    <ItemContainer product/>
    <ItemContainer/>
    <Home/>
    <HomeContainer/>
    <AboutContainer/>
    <NewContainer/>
    </div>
    </Provider>
  );
}

export default App;
