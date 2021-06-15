// Start Node imports
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { auth } from "./Services/Firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// End Node imports

// Start Components
import Header from "./Components/Header/Header";
import Checkout from "./Pages/Checkout/Checkout";
import Signin from "./Pages/Signin/Signin";
import Orders from "./Pages/Orders/Orders";
import CheckoutPayment from "./Pages/Checkout/Payment/CheckoutPayment";
// End Components

// Start services
import { useStateValue } from "./Services/StateProvider";
// End services

// Start Pages
import Home from "./Pages/Home/Home";
// End Pages


// Start Stlyesheets
import './App.css';
// End Stlyesheets

function App() {

  const promise = loadStripe("STRIPE_PUBLISHABLE_KEY");

  const [{cart, user}, dispath] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        dispath({
          type: "SET_USER",
          user: authUser
        });
      } else {
        dispath({
          type: "SET_USER",
          user: null
        });
      }
    })
  }, []);

  return (
    <Router>
      <div className="App">
        <Route path="/sign-in" exact>
          <Signin/>
        </Route>
        <Switch>
          <Route path="/" exact>
            <Header Link={Link}/>
            <Home/>
          </Route>
          <Route path="/checkout" exact>
            <Header Link={Link}/>
            <Checkout/>
          </Route>
          <Route path="/checkout/payment" exact>
            <Header Link={Link}/>
            <Elements stripe={promise}>
              <CheckoutPayment/>
            </Elements>
          </Route>
          <Route path="/orders" exact>
            <Header Link={Link}/>
            <Orders/>
          </Route>
          <Route path="/checkout" exact>
            <Header Link={Link}/>
            <Checkout/>
          </Route>
          <Route path="/prime" exact>
            <Header Link={Link}/>
            <h1>Prime page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
