import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import PatientSidebar from "components/Sidebar/PatientSidebar";
import PatientRdv from "views/patient/rdvpatients";
import Chat from "views/patient/consultspatient";


// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";


export default function Patient() {
  return (
    <>
      <PatientSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">  
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/patient/rdv" exact component={PatientRdv} />
            <Route path="/patient/myconsultations" exact component={Chat} />
            <Route path="/admin/settings" exact component={Settings} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
        </div>
      </div>
    </>
  );
}
