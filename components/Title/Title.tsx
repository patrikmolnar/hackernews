import styles from "./Title.module.css";

interface Props {
  title: string;
}

const Title: React.FunctionComponent<Props> = ({ title }) => (
  <div className={styles.container}>
    <h1 className={styles.glitch}>
      <span aria-hidden="true">{title}</span>
      {title}
      <span aria-hidden="true">{title}</span>
    </h1>
  </div>
);

export default Title;
