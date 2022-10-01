import styles from "./Score.module.css";
import Icon from "../Icon/Icon";

interface Props {
  score: number;
}

const Score: React.FunctionComponent<Props> = ({ score }) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <Icon
        className={styles.triangleIcon}
        name="triangle"
        width={40}
        height={40}
        stroke="#4bffa5bf"
      />
      <span className={styles.scoreText}>{score}</span>
    </div>
  </div>
);

export default Score;
