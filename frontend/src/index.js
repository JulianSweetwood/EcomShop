import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store.js";
import "./assets/styles/bootstrap.custom.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./assets/styles/index.css";
import App from "./App";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import LoginScreen from "./Screens/LoginScreen.jsx";
import RegisterScreen from "./Screens/RegisterScreen.jsx";
import HomeScreen from "./Screens/HomeScreen.jsx";
import ProductScreen from "./Screens/ProductScreen.jsx";
import CartScreen from "./Screens/CartScreen.jsx";
import ShippingScreen from "./Screens/ShippingScreen.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />

      <Route path="" element={<PrivateRoute />}>
      <Route path="/shipping" element={<ShippingScreen />} />
        
      </Route>
    
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
