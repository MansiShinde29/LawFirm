"use client";
import { NextResponse } from "next/server";
import React, { useEffect } from "react";
import styles from '../../Header.module.css'




function Header() {

  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark" style={{ height: 80 }}>
      <div className="container-fluid mx-auto">
        <a className="navbar-brand fw-bolder p-4 m-4" style={{ fontSize: 30 }} href="#">
          
          JUSTICE
          

        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse ml-5 " id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link fw-bold" href="#">
                Blog
              </a>
            </li>

            <li class="nav-item dropdown fw-bold">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown">
                More
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item fw-bold" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a class="dropdown-item fw-bold" href="#">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a class="dropdown-item fw-bold" href="#">
                    Services
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
}
export default Header;
