import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import usePageLocalization from "../../utils/usePageLocalization";
import LanguageSwitcher from "../LanguageSwitcher";
import PublicServices from "../PublicServices";

function Menubar() {

    const language = useSelector((state) => state.localization.language);
    const translations = usePageLocalization(language, 'menuBar');
    const currentDomain = window.location.hostname;
    console.log("hostname: ", currentDomain);
    const baseUrl = currentDomain.includes("-dev")
        ? "https://sujog-dev.odisha.gov.in"
        : "https://sujog.odisha.gov.in";

    return <header id="header" className="menubar-island">
        <div className="container">
            <div className="logo float-left">
                <Link to="/home">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="assets/img/SUJOG_New_Logo.webp" alt={translations.headerLogoAlt} className="img-fluid" style={{ height: '46px' }} />
                        <img src="assets/img/SUJOG_New_Logo_Text.webp" alt="SUJOG" className="img-fluid" style={{ height: '26px', marginLeft: '4px' }} />
                    </div>
                </Link>
            </div>
            <nav className="nav-menu float-right d-none d-lg-block">
                <ul>
                    <li className="active">
                        <Link to="/home">{translations.navigationHome}</Link>
                    </li>
                    <li className="drop-down">
                        <Link to="/home">{translations.navigationServices}</Link>
                        <ul>
                            <li>
                                <Link to="/obpas-dashboard">{translations.navigationBuildingPermissionApproval}</Link>
                            </li>
                            <li>
                                <Link to="/pgr">{translations.navigationPublicGrievanceRedressal}</Link>
                            </li>
                            <li>
                                <Link to="/pt">{translations.navigationPropertyTax}</Link>
                            </li>
                            <li>
                                <Link to="/wns">{translations.navigationWaterAndSewerage}</Link>
                            </li>
                            <li>
                                <Link to="/tl">{translations.navigationTradeLicense}</Link>
                            </li>
                            <li>
                                <Link to="/mr">{translations.navigationMarriageRegistration}</Link>
                            </li>
                            <li>
                                <Link to="/eodbdashboard">{translations.navigationEODBDashboard}</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="drop-down">
                        <Link to="/home">{translations.navigationInformation}</Link>
                        <ul>
                            <li>
                                <Link to="rti">{translations.navigationRTI}</Link>
                            </li>
                            <li>
                                <Link to="/home">{translations.navigationPublicNotice}</Link>
                            </li>
                            <li>
                                <a rel="noreferrer" href="/Deshboard/images/Citizen Charter_HUD_Final.pdf" target="_blank">
                                    {translations.navigationCitizenCharter}
                                </a>
                            </li>
                            <li>
                                <Link to="privacy-policy">{translations.navigationPrivacyPolicy}</Link>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <Link to="/ulbs" style={{ textTransform: 'none' }}>{translations.navigationULBs}</Link>
                    </li>
                    <li>
                        <Link to="/contactus">{translations.navigationHelpdesk}</Link>
                    </li>
                    <li className="login" style={{ marginLeft: "55px" }}>
                        <div className="dropdown">
                            <div className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {translations.navigationLogIn}
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item d-lg-block" style={{ color: "#000" }} href={`${baseUrl}/citizen/user/register`}>
                                    {translations.navigationLogInCitizen}
                                </a>
                                <a className="dropdown-item d-lg-block" style={{ color: "#000" }} href={`${baseUrl}/employee/user/login`}>
                                    {translations.navigationLogInDepartment}
                                </a>
                                {/* <a className="dropdown-item d-lg-block" style={{ color: "#000" }} href="https://sujog.odisha.gov.in/digit-ui/citizen/login">
                                    {translations.navigationLogInOthers}
                                </a> */}
                                <Link to="/tpa">{translations.navigationLogInTPA}</Link>
                            </div>
                        </div>
                    </li>
                    <li className="language-switcher d-lg-none" style={{ marginLeft: "10px", marginTop: "15px" }}>
                        <LanguageSwitcher />
                    </li>
                    <li className="language-switcher d-lg-none" style={{ marginLeft: "10px", marginTop: "15px" }}>
                        <PublicServices />
                    </li>
                </ul>
            </nav>
        </div>
    </header>

};
export default Menubar;