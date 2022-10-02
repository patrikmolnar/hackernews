import styles from "./Header.module.css";

interface Props {
  text: string;
}

const Header: React.FunctionComponent<Props> = ({ text }) => (
  <div className={styles.container}>
    <h1 data-cy="header" className={styles.glitch}>
      <span aria-hidden="true">{text}</span>
      {text}
      <span aria-hidden="true">{text}</span>
    </h1>
  </div>
);

export default Header;
