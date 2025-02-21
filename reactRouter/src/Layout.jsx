import React from "react";
import { Outlet } from "react-router-dom";
import header from "./components/header/header";
import footer from "./components/footer/footer";

function Layout() {
    return (
        <>
            <header/>
            <Outlet/>
            <h1 className="text-white">hello</h1>
            <footer/>
        </>
    );
}

export default Layout;
