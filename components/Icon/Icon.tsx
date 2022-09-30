import Heart from "../../assets/Icons/heart.svg";
import Comment from "../../assets/Icons/comment.svg";
import Time from "../../assets/Icons/time.svg";
import User from "../../assets/Icons/user.svg";

interface Props {
  name: string;
  [key: string]: string | number;
}

const icons: any = {
  heart: Heart,
  comment: Comment,
  time: Time,
  user: User,
};

const Icon: React.FunctionComponent<Props> = ({ name, ...props }) => {
  let IconComponent = icons[name];

  return <IconComponent {...props} />;
};

export default Icon;
