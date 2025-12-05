
import React from "react";
import "./Header.css"; // optionnel si tu veux un style dédié
import logo from "../assets/logo.png"; // adapte le chemin si besoin

function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Logo de la formation"
        className="header__logo"
        width={64}
        height={64}
      />
      <div className="header__titles">
        <h1 className="header__title">Introduction à React</h1>
        <p className="header__subtitle">
          A la découverte des premières notions de React
        </p>
      </div>
    </header>
  );
}

export default Header;
