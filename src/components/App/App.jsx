import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import AboutPage from "../AboutPage/AboutPage";
import UserPage from "../UserPage/UserPage";
import InfoPage from "../InfoPage/InfoPage";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import ClassList from "../ClassList/ClassList";
import ClassDetails from "../ClassDetails/ClassDetails";
import HomePage from "../HomePage/HomePage";
import WelcomePage from "../WelcomePage/WelcomePage";
import SchedulePage from "../SchedulePage/SchedulePage";
import UpdateProfilePage from "../UpdateProfilePage/UpdateProfilePage"
import ConfirmationPage from "../ ConfirmationPage/ ConfirmationPage";
import ReservationPage from "../ReservationPage/ReservationPage";
//import ClassBookingPage from '../ClassBookingPage/ClassBookingPage';
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/WelcomePage" />

          <Route exact path="/WelcomePage" >
            <WelcomePage />
          </Route>

          <ProtectedRoute exact path="/LoginPage">
          {user.id ?
              <Redirect to="/HomePage" />
              :
              <LoginPage />
            }
          </ProtectedRoute>


          <ProtectedRoute exact path="/ReservationPage">
            <ReservationPage />
          </ProtectedRoute>

          <ProtectedRoute exact path="/RegisterPage">
            <RegisterPage />
          </ProtectedRoute>

          <Route exact path="/HomePage">
            <HomePage />
          </Route>

          <ProtectedRoute exact path="/SchedulePage">
            <SchedulePage />
          </ProtectedRoute>

          <Route exact path="/ClassDetails">
            <ClassDetails />
          </Route>


          <Route exact path="/ClassList">
            <ClassList />
          </Route>

          <Route exact path="/ConfirmationPage">
            <ConfirmationPage />
          </Route>

          <Route exact path="/UpdateProfilePage">
            <UpdateProfilePage /> 
          </Route>
          


          
{/* Example of redirection */}
          {/* <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>  */}


          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
