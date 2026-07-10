//import logo from './logo.svg';
import { useState } from 'react';
import Header from "./Components/Header";
import MenuBar from "./Components/MenuBar";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";

import { Switch, Route, Redirect } from "react-router-dom";
import Aboutus from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import ComingSoon from "./Components/ComingSoon";
import Rti from "./Components/RTI";
import Dashboard from "./Components/dashboard";
import Pgr from "./Components/Pgr";
import MR from "./Components/MR";
import PT from "./Components/PT";
import WnS from "./Components/WnS";
import TL from "./Components/TL";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Registration from "./Components/Registration";
import ULBSpage from "./Components/ULBs-page";
import TPA from "./Components/TPA";
import Notification from "./Components/Notification";
import Loader from './Components/Loader';
function App() {
  const isTopWindow = window === window.top;
  // Get translation loading status from Redux
  return (
    <section>
      <Loader />
      {isTopWindow ? (
        <>
          <Notification />
          <Header />
          <MenuBar />
          {/* { <HomePage /> } */}
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to="/home" />;
              }}
            />
            <Route exact path="/home" component={HomePage} />
            <Route path="/aboutus" component={Aboutus} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/pgr" component={Pgr} />
            <Route path="/mr" component={MR} />
            <Route path="/pt" component={PT} />
            <Route path="/wns" component={WnS} />
            <Route path="/tl" component={TL} />
            <Route path="/comingsoon" component={ComingSoon} />
            <Route path="/rti" component={Rti} />
            <Route path="/obpas-dashboard" component={Dashboard} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/Registration" component={Registration} />
            <Route path="/ulbs" component={ULBSpage} />
            <Route path="/tpa" component={TPA} />
            <Route render={() => <Redirect to="/home" />} />
          </Switch>
          <Footer />
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          Access is restricted.
        </div>
      )}
    </section>
  );
}

export default App;
