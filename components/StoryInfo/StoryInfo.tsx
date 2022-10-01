import styles from "./StoryInfo.module.css";
import Icon from "../Icon/Icon";

interface Props {
  icon: string;
  content: string;
  iconProps?: any;
}

const StoryInfo: React.FunctionComponent<Props> = ({
  icon,
  iconProps,
  content,
}) => (
  <div className={styles.container}>
    <Icon
      className={styles.icon}
      name={icon}
      width={15}
      height={15}
      {...iconProps}
    />
    <span className={styles.content}>{content}</span>
  </div>
);

export default StoryInfo;
