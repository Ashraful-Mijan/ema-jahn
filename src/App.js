import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Review from './components/Review/Review';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/shop'>
          <Shop />
        </Route>
        <Route path='/review'>
          <Review />
        </Route>
        <Route exact path='/'>
          <Shop />
        </Route>
        <Route path="/product/:Key">
          <ProductDetails/>
        </Route>
        <Route path='*'>
          <h3>This page is 404!</h3>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
