import React, { Component } from "react";
import LanguageSwitcher from "../LanguageSwitcher";
import PublicServices from "../PublicServices";
class Header extends Component {

    render() {
        return <section id="topbar" className="top-header d-none d-lg-block">
            <div className="container clearfix">
                <div className="contact-info float-left">
                    <p style={{ fontSize: "16px", margin: "0px", color: "#FFFFFF" }}> Government of Odisha  |  ଓଡ଼ିଶା ସରକାର  </p>
                    {/* <span style={{ fontSize: "16px" }}><i className="icofont-phone"></i> 1800 121 6833</span>
                    <span style={{ fontSize: "16px" }}><i className="icofont-envelope"></i> helpdesk[dot]sujog[at]odisha[dot]gov[dot]in</span> */}
                </div>
                <nav className="nav-menu float-right d-none d-lg-block">
                    <ul>
                        <li className="language-switcher">
                            <LanguageSwitcher />
                        </li>
                        <li className="language-switcher">
                            <PublicServices />
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    }
};
export default Header;