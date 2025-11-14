import React, { useState, useEffect } from "react";
import "../css/headerM.css";

const Header = ({ names = "User Contacts", onAdd }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("theme-dark", dark);
  }, [dark]);

  return (
    <header className="app-header">
      <div className="container">
        <div className="brand" role="img" aria-label="logo">
          <span className="logo-mark">U</span>
          <div className="brand-text">
            <strong className="title">{names}</strong>
            <small className="subtitle">Contacts manager</small>
          </div>
        </div>

        <nav className={`nav ${mobileOpen ? "open" : ""}`} aria-label="Main">
          <button
            className="nav-link"
            type="button"
            onClick={() => alert("Home")}
          >
            Home
          </button>
          <button
            className="nav-link"
            type="button"
            onClick={() => alert("About")}
          >
            About
          </button>
          <button
            className="nav-link"
            type="button"
            onClick={() => alert("Contacts")}
          >
            Contacts
          </button>
        </nav>

        <div className="actions">
          <button
            className="btn btn-primary"
            onClick={() =>
              typeof onAdd === "function" ? onAdd() : alert("Add action")
            }
          >
            + Add User
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => setDark((d) => !d)}
            aria-pressed={dark}
            title="Toggle theme"
          >
            {dark ? "Light" : "Dark"}
          </button>

          <button
            className="burger"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
