"use client";

import { useEffect, useState } from "react";

import api from "../services/api";

import PlayerCard from "../components/PlayerCard/PlayerCard";
import PlayerDetails from "../components/PlayerDetails/PlayerDetails";

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const response = await api.get("/players?per_page=100");

        const formattedPlayers = response.data.data.map((player) => {
          const fullName = `${player.first_name} ${player.last_name}`;

          return {
            id: player.id,
            name: fullName,
            team: player.team.full_name,
            position: player.position || "Não informado",
            conference: player.team.conference,
            division: player.team.division,
            country: player.country || "Não informado",
            jersey: player.jersey_number || "Não informado",
          };
        });

        setPlayers(formattedPlayers);
      } catch (error) {
        console.log("Erro API:", error);
      }
    }

    fetchPlayers();
  }, []);

  return (
    <main
      style={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        padding: "40px",
        color: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "orange",
        }}
      >
        NBA Players
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            onSelect={setSelectedPlayer}
          />
        ))}
      </div>

      <PlayerDetails player={selectedPlayer} />
    </main>
  );
}