import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import LayoutRoute from './LayoutRoute';
import HomeScreen from './HomeScreen.js';
import SignUp from './SignUp';
import LoginScreen from './LoginScreen';
import ContactScreen from './ContactScreen';
import AboutScreen from './AboutScreen';
import ProductListing from './ProductListing';

function App() {
  return (
    <div>
      <BrowserRouter>
            <Switch>
                <LayoutRoute path="/" exact={true} component={HomeScreen} />
                <LayoutRoute path="/signup" exact={true} component={SignUp} />
                <LayoutRoute path="/login" exact={true} component={LoginScreen} />
                <LayoutRoute path="/products" exact={true} component={ProductListing} />
                <LayoutRoute path="/contact" exact={true} component={ContactScreen} />
                <LayoutRoute path="/about" exact={true} component={AboutScreen} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
