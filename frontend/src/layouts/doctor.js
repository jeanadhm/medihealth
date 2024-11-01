import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import DoctorSidebar from "components/Sidebar/DoctorSidebar";


// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import PatientsList from "views/doctor/patients";
import AnalysisForm from "views/doctor/analyses";
import AppointmentForm from "views/doctor/rdvdoctor";
import DoctorChat from "views/doctor/consultations";
import Allanalyses from "views/doctor/allanalyses"

export default function Doctor() {
  return (
    <>
      <DoctorSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">  
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/doctor/patients" exact component={PatientsList} />
            <Route path="/doctor/analyses" exact component={AnalysisForm} />
            <Route path="/doctor/consultations" exact component={DoctorChat} />
            <Route path="/doctor/rdv" exact component={AppointmentForm} />
            <Route path="/doctor/analyses/all" exact component={Allanalyses} />
            <Route path="/admin/settings" exact component={Settings} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
        </div>
      </div>
    </>
  );
}
