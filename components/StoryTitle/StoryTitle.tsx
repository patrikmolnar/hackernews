import styles from "./StoryTitle.module.css";

interface Props {
  title: string;
  url: string;
}

const StoryTitle: React.FunctionComponent<Props> = ({ title, url }) => (
  <h1 className={styles.storyTitle}>
    <a target="_blank" href={url}>
      {title}
    </a>
  </h1>
);

export default StoryTitle;
