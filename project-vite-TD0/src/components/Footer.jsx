
import React from "react";

function Footer() {
    const year = new Date().getFullYear(); // année dynamique
  return (
    <footer className="footer">
      © {year} - Serge.Beauboeuf, Tous droits réservés.
    </footer>
  );
}

export default Footer;
