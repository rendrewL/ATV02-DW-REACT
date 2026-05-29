import styles from "./PlayerCard.module.css";

export default function PlayerCard({ player, onSelect }) {

  return (

    <div
      className={styles.card}
      onClick={() => onSelect(player)}
    >

      

      <h2>{player.name}</h2>

      <p>
        <strong>Time:</strong> {player.team}
      </p>

      <p>
        <strong>Posição:</strong> {player.position}
      </p>

    </div>

  );

}