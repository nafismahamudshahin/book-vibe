import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {

    return (
        <nav className="sticky top-0 z-50 border-b border-base-200 bg-base-100/95 shadow-sm backdrop-blur">
            <div className="navbar container mx-auto sm:px-2">

                {/* Left */}
                <div className="navbar-start">
                    {/* Mobile Menu */}
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle lg:hidden"
                            aria-label="Open menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu dropdown-content z-50 mt-3 w-52 rounded-2xl bg-base-100 p-3 shadow-xl"
                        >
                            <NavLinks></NavLinks>
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link
                        href="/"
                        className="ml-2 text-2xl font-extrabold tracking-tight sm:text-3xl"
                    >
                        <span className="text-primary">Book</span>{" "}
                        <span>Vibe</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-2 px-1">
                        <NavLinks></NavLinks>
                    </ul>
                </div>

                {/* Right */}
                <div className="navbar-end gap-2">
                    <Link
                        href="/login"
                        className="btn btn-ghost hidden sm:inline-flex"
                    >
                        Sign In
                    </Link>

                    <Link
                        href="/sign-up"
                        className="btn btn-primary rounded-lg px-5"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;