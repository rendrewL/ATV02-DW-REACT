export default function PlayerDetails({ player }) {

  if (!player) {

    return (
      <p style={{ marginTop: "30px" }}>
        Clique em um jogador
      </p>
    );

  }

  return (

    <div
      style={{
        marginTop: "40px",
        backgroundColor: "#1e1e1e",
        padding: "20px",
        borderRadius: "12px"
      }}
    >

      

      <h2 style={{ color: "orange" }}>
        {player.name}
      </h2>

      <p>
        <strong>Time:</strong> {player.team}
      </p>

      <p>
        <strong>Posição:</strong> {player.position}
      </p>

      <p>
        <strong>Conferência:</strong> {player.conference}
      </p>

      <p>
        <strong>Divisão:</strong> {player.division}
      </p>

      <p>
        <strong>País:</strong> {player.country}
      </p>

      <p>
        <strong>Camisa:</strong> {player.jersey}
      </p>

    </div>

  );

}