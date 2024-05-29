import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import Login from "views/auth/Login";
// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import Doctor from "layouts/doctor";

// views without layouts

import Landing from "views/Landing.js";
import PatientsList from "views/doctor/patients";
import Index from "views/Index.js";
import About from "views/About";
import Contact from "views/Contact";
import Register from "views/auth/Register";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      <Route path="/doctor" component={Doctor} />

      {/* add routes without layouts */}
      <Route path="/" exact component={Landing} />
      <Route path="/About" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/Accueil" exact component={Index} />
      <Route path="/Connexion" exact component={Login} />
      <Route path="/Inscription" exact component={Register} />
      <Route path="/patientlist" exact component={PatientsList} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
