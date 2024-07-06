import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <>
            <NavigationBar />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Layout;
