import Image from "next/future/image";
import styles from "./Thumbnail.module.css";

interface Props {
  src: string;
}

const Thumbnail: React.FunctionComponent<Props> = ({ src }) => (
  <div className={styles.thumbnail}>
    <Image alt="thumbnail" src={src} width={110} height={110} />
  </div>
);

export default Thumbnail;
