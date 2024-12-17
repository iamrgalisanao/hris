import React from "react";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";
import NavLink from "../Core/NavLink";
import Dropdown from "../Core/Dropdown";
import ResponsiveNavLink from "../Core/ResponsiveNavLink";

function Navbar(){
    return(
        <nav className="border-b border-gray-100 bg-white dark:border-gray-100 dark:bg-gray-100"></nav>
    );
    
}

export default Navbar;