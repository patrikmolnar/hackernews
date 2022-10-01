import Heart from "../../assets/Icons/heart.svg";
import Comment from "../../assets/Icons/comment.svg";
import Time from "../../assets/Icons/time.svg";
import User from "../../assets/Icons/user.svg";
import Triangle from "../../assets/Icons/triangle.svg";
import styles from "./Icon.module.css";

interface Props {
  name: string;
  [key: string]: string | number;
}

const icons: any = {
  heart: Heart,
  comment: Comment,
  time: Time,
  user: User,
  triangle: Triangle,
};

const Icon: React.FunctionComponent<Props> = ({ name, ...props }) => {
  let IconComponent = icons[name];

  return <IconComponent className={styles.icon} {...props} />;
};

export default Icon;
