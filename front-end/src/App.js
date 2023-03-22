import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
 
import Home from "./Home"
import CreateAccount from "./pages/CreateAccount/CreateAccount"
import SearchSettings from "./pages/SearchSettings/SearchSettings"
import GeneralSettings from "./pages/GeneralSettings/GeneralSettings"
import BrightnessSettings from "./pages/GeneralSettings/BrightnessSettings"
import SizeSettings from "./pages/GeneralSettings/SizeSettings"
import AccountInfo from "./pages/GeneralSettings/AccountInfo"
import Discover from "./pages/Discover/Discover"
import Matches from "./pages/Matches/Matches"
import CreateListing from "./pages/CreateListing/CreateListing"
import Login from "./pages/Login/Login"
import Logout from "./pages/Logout/Logout"
 
import "./App.css"

// set up routes so different URL routes load up different main components
const App = props => {
 

  return (
    <div className="container">
      <Router>
        {/* pass the setter function that can be called if the user successfully logs in from the login screen */}
 
        <Routes>
          {/* a route to the home screen */}
          <Route path="/" element={<Home />} />

          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/searchSettings" element={<SearchSettings />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/generalSettings" element={<GeneralSettings />} />
          <Route path="/brightnessSettings" element={<BrightnessSettings />} />
          <Route path="/sizeSettings" element={<SizeSettings />} />
          <Route path="/accountInfo" element={<AccountInfo />} />
          <Route path="/createListing" element={<CreateListing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
 
        </Routes>
      </Router>
    </div>
  )
}

// make this available to other modules as an import
export default App