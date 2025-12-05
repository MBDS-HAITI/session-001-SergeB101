/*
import React from "react";

function MainContent() {
  return (
    <main className="main">
      <p>Ici, nous afficherons des informations interessantes :)</p>
    </main>
  );

}

export default MainContent;
*/

import React, { useEffect, useState } from "react";

function MainContent() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    // Mettre à jour l'heure chaque seconde
    const timer = setInterval(() => setNow(new Date()), 1000);

    // Nettoyage à la destruction du composant
    return () => clearInterval(timer);
  }, []);

  // Formatage en français (Haiti/France) — adapte la locale si tu veux
  const dateStr = new Intl.DateTimeFormat("fr-HT", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(now);

  const timeStr = new Intl.DateTimeFormat("fr-HT", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // passe à true si tu veux AM/PM
  }).format(now);

  return (
    <main className="main">
      <p>Ici, nous afficherons des informations interessantes :)</p>

      <div className="datetime">
        <div className="date">
          📅 {dateStr.charAt(0).toUpperCase() + dateStr.slice(1)}
        </div>
        <div className="time">🕒 {timeStr}</div>
      </div>
    </main>
  );
}

export default MainContent;

