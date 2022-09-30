import { useEffect, useState } from "react";
import Image from "next/future/image";
import { fetchItems } from "../../utils/apiHelper";
import { Item } from "../../types/item";
import styles from "./TopStories.module.css";
import Icon from "../Icon/Icon";

interface Props {
  storyIds: number[];
}

const TopStories: React.FunctionComponent<Props> = ({ storyIds }) => {
  const [loading, setLoading] = useState(false);
  const [stories, setStories] = useState<null | Item[]>(null);

  useEffect(() => {
    setLoading(true);
    fetchItems(storyIds).then((stories) => {
      setStories(stories);

      // delaying loading screen to avoid flashing screen on very fast connections
      setTimeout(() => {
        setLoading(false);
      }, 100);
    });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!stories) return <p>{"No stories..:("}</p>;

  console.log({ stories });

  return (
    <div className={styles.container}>
      {stories.map((story) => (
        <div className={styles.storyContainer} key={story.id}>
          <div className={styles.avatar}>
            <Image alt="avatar" src="/cat.jpg" width={150} height={150} />
          </div>
          <div className={styles.storyItem}>
            <p>{story.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopStories;
