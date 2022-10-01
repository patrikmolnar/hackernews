import { useEffect, useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { fetchItemsWithUsers } from "../../utils/apiHelper";
import { Item } from "../../types/item";
import styles from "./TopStories.module.css";
import Score from "../Score/Score";
import Thumbnail from "../Thumbnail/Thumbnail";
import StoryTitle from "../StoryTitle/StoryTitle";
import StoryInfo from "../StoryInfo/StoryInfo";

interface Props {
  storyIds: number[];
}

const TopStories: React.FunctionComponent<Props> = ({ storyIds }) => {
  const [loading, setLoading] = useState(false);
  const [stories, setStories] = useState<null | Item[]>(null);

  useEffect(() => {
    setLoading(true);
    fetchItemsWithUsers(storyIds).then((stories) => {
      setStories(stories);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!stories) return <p>{"No stories..:("}</p>;

  return (
    <div className={styles.container}>
      {stories.map((story) => (
        <div className={styles.storyContainer} key={story.id}>
          <Thumbnail src="/cat.jpg" />
          <div className={styles.storyItem}>
            <StoryTitle title={story.title} url={story.url} />
            <div className={styles.storyInfoContainer}>
              {/* user info */}
              <StoryInfo
                icon="user"
                content={`${story.by} (${story.user.karma} karma)`}
                iconProps={{ fill: "white" }}
              />
              {/* time */}
              <StoryInfo
                icon="time"
                content={formatDistanceToNow(new Date(story.time * 1000), {
                  includeSeconds: true,
                  addSuffix: true,
                })}
              />
            </div>
          </div>
          <Score score={story.score} />
        </div>
      ))}
    </div>
  );
};

export default TopStories;
