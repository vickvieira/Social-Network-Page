import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import MainNavigation from "../../components/MainNavigation.jsx";

function RootLayout() {
    return (
    <Fragment>
        <MainNavigation></MainNavigation>
        <Outlet></Outlet>
    </Fragment>
)}

export default RootLayout;